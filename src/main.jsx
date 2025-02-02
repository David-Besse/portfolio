import { passiveSupport } from "passive-events-support/src/utils";
passiveSupport({ events: ["wheel"] });

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import App from "./components/App/App";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import "./styles.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HeroUIProvider>
    <RouterProvider router={router} />
  </HeroUIProvider>
);
