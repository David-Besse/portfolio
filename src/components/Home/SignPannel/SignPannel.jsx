import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./SignPannel.scss";
import { useMediaQuery } from "@uidotdev/usehooks";

const arrowsPanel = Array.from(">>>");

const SignPannel = () => {
  const panelContainerRef = useRef(null);
  const isTinyScreen = useMediaQuery("(max-width: 424px)");

  useEffect(() => {
    const panelContainerRefElement = Array.from(
      panelContainerRef.current.children
    );

    gsap
      .timeline({ repeat: -1 })
      .to(panelContainerRefElement, {
        delay: 1.2,
        stagger: 0.2,
        opacity: 0,
      })
      .to(panelContainerRefElement, {
        delay: 0.2,
        stagger: 0.2,
        opacity: 1,
      });
  }, []);

  return (
    <div
      ref={panelContainerRef}
      className={`${isTinyScreen ? "hidden" : "block"} panelContainer z-10 text-xl sm:text-4xl lg:text-5xl w-fit h-fit p-2 text-white dark:text-[#4d4d4d]`}
    >
      {arrowsPanel.map((arrow, i) => (
        <span key={`${arrow}_${i}`}>{arrow}</span>
      ))}
    </div>
  );
};

export default SignPannel;
