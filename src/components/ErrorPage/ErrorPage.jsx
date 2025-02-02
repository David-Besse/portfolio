import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import errorBgImg from "../../assets/images/error.png";
import { RiArrowGoBackFill } from "react-icons/ri";

const ErrorPage = () => {
  // const error = useRouteError(); /* debugging */

  return (
    <>
      <div
        id="error-page"
        className="relative flex flex-col justify-center items-center w-screen h-screen gap-4 text-white"
      >
        <img
          src={errorBgImg}
          alt="error"
          className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
        />
        <h1 className="text-6xl xl:text-8xl font-extrabold z-10">Oops!</h1>
        <p className="text-2xl font-semibold z-10 text-center">
          What did you expect ?
        </p>
        <Button
          size="lg"
          color="default"
          className="z-10 font-semibold flex justify-center items-center bg-opacity-20"
          variant="light"
        >
          <RiArrowGoBackFill className="text-white" size={20} />
          <Link to="/" className="text-xl text-white">
            Go back
          </Link>
        </Button>
        {/* <p className="text-2xl pt-6 z-10 text-center">
      <i>{error.statusText || error.message}</i>
    </p> */}
      </div>
    </>
  );
};

export default ErrorPage;
