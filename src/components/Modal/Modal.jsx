import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import { useCallback, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

/**
 * Renders a modal component that displays a message.
 *
 * @return {React.ReactNode} The rendered modal component.
 */
const Modal = () => {
  const { contactModal, setContactModal } = useStore(useStoreApp);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    rootElement.style.pointerEvents = contactModal.isOpened ? "none" : "auto";

    return () => {
      rootElement.style.pointerEvents = "auto";
    };
  }, [contactModal]);

  const transitions = useTransition(contactModal.isOpened, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  const onClose = useCallback(() => {
    setContactModal();
  }, [setContactModal]);

  return transitions(
    (style, item) =>
      item && (
        <animated.div
          style={style}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-xl bg-gray-100 dark:bg-[#606887] p-4 border border-[#9bbbf7] dark:border-[#f2f2f2] shadow-[0px_0px_2px_2px_#c4ae96] dark:shadow-[0px_0px_2px_2px_#606887] z-50"
        >
          <p className="">{contactModal.message}</p>
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
