import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.scss";
import Modal from "../Modal/Modal";

const Contact = () => {
  const {
    currentSection,
    setCurrentSection,
    setContactModalisOpened,
    setContactModalMessage,
  } = useStore(useStoreApp);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formRef = useRef();

  const onSubmit = () => {
    const serviceId = "service_it89wkk";
    const templateId = "template_xlt69rd";
    const apiKey = "T9p81MAbarBsUJjZ3";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, apiKey)
      .then(() => {
        setContactModalisOpened(true);
        setContactModalMessage(
          "Message sent! Thank you for your interest in me."
        );
      })
      .catch(() => {
        setContactModalisOpened(true);
        setContactModalMessage(
          "Your message could not be sent. Please contact me by email."
        );
      })
      .finally(() => {
        reset();
      });
  };

  const handleWaypointEnter = () => {
    setCurrentSection("contact");
  };

  useEffect(() => {
    if (currentSection !== "contact") {
      reset();
    }
  }, [currentSection, reset]);

  return (
    <div
      id="contact"
      className="contact relative h-screen w-screen flex flex-col  snap-center bg-[#f3f2f9]"
    >
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />

      <Modal />

      <h2 className="absolute top-2 left-2 text-2xl font-bold">
        .contact
      </h2>

      <div className="absolute w-full top-1/2 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 sm:gap-16 ps-2 pe-2 sm:p-0">
        <p className="text-center mt-1 mb-1">
          Get in touch or shoot me an email directly on{" "}
          <a className="text-[#00a1ec]" href="mailto: dahodprod@gmail.com">
            dahodprod@gmail.com
          </a>
        </p>

        <form
          ref={formRef}
          className="w-full sm:w-[400px] text-sm flex flex-col self-center gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder=" first name"
            className="rounded-3xl p-1"
            {...register("firstname", {
              required: "required field.",
              minLength: {
                value: 3,
                message: "min 3 characters",
              },
              maxLength: {
                value: 20,
                message: "maximum allowed length reached (20 max).",
              },
            })}
          />
          <p className="text-red-500">{errors.firstname?.message}</p>
          <input
            type="text"
            placeholder=" last name"
            className="rounded-3xl p-1"
            {...register("lastname", {
              required: "required field.",
              minLength: {
                value: 3,
                message: "min 3 characters",
              },
              maxLength: {
                value: 20,
                message: "maximum allowed length reached (20 max).",
              },
            })}
          />
          <p className="text-red-500">{errors.lastname?.message}</p>
          <input
            type="text"
            placeholder=" email"
            className="rounded-3xl p-1"
            {...register("mail", {
              required: "required field.",
              pattern: {
                value: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/i,
                message: "hey, your email is not valid.",
              },
            })}
          />
          <p className="text-red-500">{errors.mail?.message}</p>
          <textarea
            type="text"
            placeholder=" message..."
            className="h-[250px] rounded-lg p-1"
            {...register("yourmessage", {
              required: "required field.",
              minLength: {
                value: 10,
                message: "min 10 characters",
              },
              maxLength: {
                value: 450,
                message: "maximum allowed length reached (450 max).",
              },
            })}
          />
          <p className="text-red-500">{errors.yourmessage?.message}</p>
          <input
            className="cursor-pointer w-fit self-end active:bg-[#00a1ec] active:text-white rounded-lg p-1"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
