/* eslint-disable react/no-unknown-property */

import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import styled from "styled-components";
import "./myWorks.scss";
import { useRef, useState } from "react";
import gsap from "gsap";

import WorksList from "../../datas/WorksList";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";

const ListItem = styled.li`
  &::before {
    content: "${({ text }) => text}";
  }

  span::before {
    content: "${({ text }) => text}";
  }

  &::after {
    content: "${({ text }) => text}";
  }

  span::after {
    content: "${({ text }) => text}";
  }
`;

const MyWorks = () => {
  const [projectSelected, setProjectSelected] = useState("");
  const tvRef = useRef();

  const handleProjectInformation = (projectName) => {
    setProjectSelected(projectName);

    gsap.timeline({ delay: 0.2 }).fromTo(
      tvRef.current,
      { display: "none", opacity: 0 },
      {
        display: "flex",
        opacity: 1,
        duration: 0.8,
        ease: "ease-in-out",
      }
    );
  };

  return (
    <div
      id="myWorks"
      className="relative h-screen w-screen bg-[#d4cacdff] snap-center0"
    >
      <h2 className="absolute top-2 left-2 h-[5%] text-xl sm:text-2xl">
        .myWorks
      </h2>
      <BackgroundDiv
        path="0% 0%, 0% 100%, 50% 100%, 0% 0%"
        color="#cee5e3ff"
        width="100%"
        height="100%"
      />
      <BackgroundDiv
        path="50% 100%, 75% 100%, 100% 50%, 100% 0%"
        color="#ad8b75ff"
        width="100%"
        height="100%"
      />
      <div className="h-full w-full sm:flex">
        <ul className="w-full h-[12%] flex justify-center items-end text-4xl pb-1 sm:flex-col sm:pb-16 sm:w-1/4 sm:h-full lg:text-5xl xl:text-6xl">
          {WorksList.map((item) => (
            <div
              key={`div_${item.projectName}`}
              className="div_listItem flex justify-center"
            >
              <ListItem
                className="listItem w-fit ml-2 mr-2 sm:mb-4 cursor-pointer"
                text={item.projectName}
                onClick={() => handleProjectInformation(item.projectName)}
              >
                <span className="spanList">{item.projectName}</span>
              </ListItem>
            </div>
          ))}
        </ul>
        {projectSelected !== "" && (
          <div
            className="w-full h-[88%] sm:w-3/4 sm:h-full hidden justify-center sm:pt-14 pb-20 items-start sm:items-center z-10"
            ref={tvRef}
          >
            {projectSelected === WorksList[0].projectName && (
              <iframe
                title="Projet Art@home"
                src="https://www.webshappers.com"
                className="w-[90%] h-[100%] sm:h-[80%] border-8 rounded shadow-2xl"
              />
            )}
            {projectSelected === WorksList[1].projectName && (
              <div className="flex w-[90%] h-[95%] sm:h-[80%] text-4xl bg-transparent rounded shadow-2xl justify-center items-center">
                En cours de construction . . .
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyWorks;

// &:after {
//   content: "${({ text }) => text}";
//   position: absolute;
//   top: 0;
//   left: 0;
//   background: linear-gradient(20deg, pink, #00a1ec);
//   backgroundclip: text;
//   -webkit-background-clip: text;
//   color: transparent;
//   width: 0;
//   overflow: hidden;
//   white-space: nowrap;
// }
// &.clicked {
//   &::after {
//     animation: moveText 0.3s linear both;
//   }
// }

// @keyframes moveText {
//   from {
//     width: 0;
//   }

//   to {
//     width: 100%;
//   }
// }

// bg-[#d4cacdff]
