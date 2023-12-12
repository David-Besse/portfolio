import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col justify-center items-center w-screen h-screen gap-4 bg-[#f2f2f2]">
      <h1 className="text-8xl font-extrabold">Oops!</h1>
      <p className="text-2xl font-semibold">Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl pt-6">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
