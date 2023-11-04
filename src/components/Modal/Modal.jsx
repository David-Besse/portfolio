import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import { useCallback, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

const Modal = () => {
  const {
    contactModalisOpened,
    contactModalMessage,
    setContactModalisOpened,
  } = useStore(useStoreApp);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    rootElement.style.pointerEvents = contactModalisOpened ? "none" : "auto";

    return () => {
      rootElement.style.pointerEvents = "auto";
    };
  }, [contactModalisOpened]);

  const transitions = useTransition(contactModalisOpened, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });

  const onClose = useCallback(() => {
    setContactModalisOpened();
  }, [setContactModalisOpened]);

  return transitions(
    (style, item) =>
      item && (
        <animated.div
          style={style}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-xl bg-gray-100 p-4 border border-[#9bbbf7] shadow-[-4px_4px_4px_rgba(59,130,246,0.5)] z-50"
        >
          <p className="">{contactModalMessage}</p>
          <span
            className="cursor-pointer text-4xl ms-4 pointer-events-auto"
            onClick={onClose}
          >
            &times;
          </span>
        </animated.div>
      )
  );
};

export default Modal;
