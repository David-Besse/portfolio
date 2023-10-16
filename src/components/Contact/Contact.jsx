import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import { useForm } from "react-hook-form";

import './contact.scss';
import { useEffect } from "react";

const Contact = () => {
  const { currentSection, setCurrentSection } = useStore(useStoreApp);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    alert('le mail a été envoyé');
    reset();
  };

  const handleWaypointEnter = () => {
    setCurrentSection("contact");
  };

  useEffect(() => {
    if (currentSection !== 'contact'){
      reset();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection]);

  return (
    <div
      id="contact"
      className="contact flex flex-col items-center p-4 h-screen w-screen snap-center bg-[#f3f2f9]"
    >
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      <h2 className="text-2xl self-start font-bold pb-8">.contact</h2>
      <p className="text-center pt-8">
        Get in touch or shoot me an email directly on <a className="text-[#00a1ec]" href = "mailto: dahodprod@gmail.com">dahodprod@gmail.com</a>
      </p>
      <div className="w-5/6 md:w-96 pt-8">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
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
            className="h-40 rounded-lg p-1"
            {...register("yourmessage", {
              required: "required field.",
              maxLength: {
                value: 450,
                message: "maximum allowed length reached (450 max).",
              },
            })}
          />
          <p className="text-red-500">{errors.yourmessage?.message}</p>
          <input className="cursor-pointer w-fit self-end active:bg-[#00a1ec] active:text-white rounded-lg p-2" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
