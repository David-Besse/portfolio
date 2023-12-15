import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./SignPannel.scss";

const arrowsPanel = Array.from(">>>");

const SignPannel = () => {
  const panelContainerRef = useRef(null);

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
      className="panelContainer z-10 text-4xl sm:text-6xl w-fit h-fit p-2 text-white dark:text-[#4d4d4d]"
    >
      {arrowsPanel.map((arrow, i) => (
        <span key={`${arrow}_${i}`}>{arrow}</span>
      ))}
    </div>
  );
};

export default SignPannel;
