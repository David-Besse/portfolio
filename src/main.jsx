import { passiveSupport } from "passive-events-support/src/utils";
passiveSupport({ events: ["wheel"] });

import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./components/App/App";
import "./styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <App />
  </NextUIProvider>
);
