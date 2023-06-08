import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import { useStoreApp } from "../Store/app.store";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { setSelectedSection } = useStore(useStoreApp);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // reset();
    console.log(data);
  };

  const handleWaypointEnter = () => {
    setSelectedSection("contact");
  };

  return (
    <div
      id="contact"
      className="contact flex justify-center items-center h-screen w-screen snap-center bg-red-200"
    >
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      <div className="w-5/6 h3/4">
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="first name"
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
            placeholder="last name"
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
            placeholder="email"
            {...register("mail", {
              required: "required field.",
              pattern: { value: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-z]{2,4}$/i, message: "hey, your email is not valid." },
            })}
          />
          <p className="text-red-500">{errors.mail?.message}</p>
          <textarea
            type="text"
            placeholder="your message"
            {...register("yourmessage", {
              required: "required field.",
              maxLength: {
                value: 450,
                message: "maximum allowed length reached (450 max).",
              },
            })}
          />
          <p className="text-red-500">{errors.yourmessage?.message}</p>
          <input className="cursor-pointer" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
