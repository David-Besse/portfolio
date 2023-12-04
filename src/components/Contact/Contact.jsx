import { useEffect, useRef } from "react";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import Modal from "../Modal/Modal";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";
import "./Contact.scss";

const Contact = () => {
  const { activeSection, setContactModal } = useStore(useStoreApp);
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
    const rhfId = "T9p81MAbarBsUJjZ3";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, rhfId)
      .then(() => {
        setContactModal("Message sent! Thank you for your interest in me.");
      })
      .catch(() => {
        setContactModal(
          "Your message could not be sent. Please contact me by email."
        );
      })
      .finally(() => {
        reset();
      });
  };

  useEffect(() => {
    if (activeSection !== "contact") {
      reset();
    }
  }, [activeSection, reset]);

  return (
    <>
      <Modal />

      {/* section title */}
      <h2 className="titleContact absolute h-fit w-fit left-[1vh] bottom-[1vh] text-3xl sm:text-5xl z-[0] text-transparent opacity-[10%] lg:text-[15vw] lg:left-0 lg:right-0 lg:top-[1rem] lg:w-full lg:text-center cursor-default">
        .contact
      </h2>
      <BackgroundDiv
        path="0% 0%, 0% 100%, 50% 100%, 0% 0%"
        color="#c4ae96"
        width="100%"
        height="100%"
      />
      {/* green c4ae96 */}
      <BackgroundDiv
        path="50% 100%, 75% 100%, 100% 50%, 100% 0%"
        color="#89d6e8"
        width="100%"
        height="100%"
      />

      <div className="w-full h-full flex flex-col justify-center gap-6 sm:gap-8 lg:gap-10 z-10">
        <p className="text-center my-1 text-lg first-letter:text-4xl px-10 tracking-wide">
          Get in touch or shoot me an email directly on{" "}
          <a className="text-[#00a1ec]" href="mailto: dahodprod@gmail.com">
            dahodprod@gmail.com
          </a>
        </p>

        <form
          ref={formRef}
          className="w-[90%] sm:w-[400px] text-sm flex flex-col self-center gap-1 sm:gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder=" first name"
            className="rounded-3xl p-1 border-4 tracking-wide"
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
            className="rounded-3xl p-1 border-4 tracking-wide"
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
            className="rounded-3xl p-1 border-4 tracking-wide"
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
            className="h-[250px] rounded-lg p-1 border-4 tracking-wide"
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
            className="cursor-pointer w-fit self-end active:bg-transparent active:text-[#00a1ec] text-base rounded-lg p-1 tracking-wide"
            type="submit"
            value="Send message"
          />
        </form>
      </div>
    </>
  );
};

export default Contact;
