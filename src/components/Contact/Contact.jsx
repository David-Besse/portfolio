import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.scss";

const Contact = () => {
  const { currentSection, setCurrentSection } = useStore(useStoreApp);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formRef = useRef();

  const onSubmit = () => {
    try {
      emailjs
        .sendForm(
          "service_it89wkk",
          "template_xlt69rd",
          formRef.current,
          "T9p81MAbarBsUJjZ3"
        )
        .then(
          () => {
            console.log("Email sent !");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      console.log(error);
    }

    // alert('Thank you for your attention, I will respond as quickly as possible, have a good day !');
    reset();
  };

  const handleWaypointEnter = () => {
    setCurrentSection("contact");
  };

  useEffect(() => {
    if (currentSection !== "contact") {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection]);

  return (
    <div
      id="contact"
      className="contact flex flex-col p-4 h-full w-full snap-center bg-[#f3f2f9]"
    >
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />

      <h2 className="text-2xl self-start font-bold">.contact</h2>
      <div className="h-full flex flex-col sm:justify-center gap-4 sm:gap-16">
        <p className="text-center mt-10 sm:mt-0">
          Get in touch or shoot me an email directly on{" "}
          <a className="text-[#00a1ec]" href="mailto: dahodprod@gmail.com">
            dahodprod@gmail.com
          </a>
        </p>

          <form
            ref={formRef}
            className="w-full sm:w-[400px] flex flex-col self-center gap-2"
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
              className="cursor-pointer w-fit self-end active:bg-[#00a1ec] active:text-white rounded-lg p-2"
              type="submit"
            />
          </form>
      </div>
    </div>
  );
};

export default Contact;
