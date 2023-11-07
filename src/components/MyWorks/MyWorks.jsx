/* eslint-disable react/no-unknown-property */
import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import styled from "styled-components";
import "./myWorks.scss";

const projects = ["Art@home", "portfolio"];

const MyWorks = () => {
  const { setCurrentSection } = useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setCurrentSection("myWorks");
  };

  const ListItem = styled.li`
    color: transparent;
    -webkit-text-stroke: 1px black;

    &::after {
      content: "${({ text }) => text}";
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(20deg, white,#00a1ec);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      width: 0;
      overflow: hidden;
      white-space: nowrap;
    }

    &:hover {
      ::after {
        animation: moveText 0.3s linear both;
      }
    }

    @keyframes moveText {
      to {
        width: 100%;
      }
    }
  `;

  return (
    <div
      id="myWorks"
      className="myWorks relative h-screen snap-center bg-[#f3f2f9]"
    >
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      <h2 className="absolute top-2 left-2 h-[5%] text-2xl font-bold">
        .myWorks
      </h2>
      <div className="h-full w-full sm:flex">
        <ul className="w-full h-1/5 flex sm:flex-col justify-center items-center pt-10 sm:pb-16 ps-2 sm:w-1/4 sm:h-full text-2xl lg:text-4xl xl:text-6xl">
          {projects.map((item) => (
            <ListItem
              className="relative ms-2 me-2 sm:m-0 sm:mt-4 sm:mb-4 cursor-pointer text-[1.4em]"
              key={item}
              text={item}
            >
              {item}
            </ListItem>
          ))}
        </ul>
        <div className="w-full h-4/5 sm:w-3/4 sm:h-full flex justify-center sm:pt-10 pb-16 items-start sm:items-center">
          <iframe
            title="Projet Art@home"
            src="https://www.webshappers.com"
            className="w-[90%] h-[95%] sm:h-[80%] border-8 border-double object-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
