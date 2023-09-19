import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import styled from "styled-components";

import "./aboutMe.scss";
import { useState } from "react";

import wordList from "../../datas/wordList";

const ListItem = styled.li`
  -webkit-text-stroke: 1px black;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #606887;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.4s ease;
  }

  span.arrow {
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #606887;
    rotate: 90deg;
    transition: opacity 0.4s ease;
  }

  &:hover {
    ::after {
      width: 100%;
      transition: width 0.8s ease;
    }

    span.arrow {
      opacity: 1;
      transtition: opacity 0.8s ease;
    }
  }
`;

const AboutMe = () => {
  const { setCurrentSection } = useStore(useStoreApp);
  const [wordHovered, setWordHovered] = useState("");
  const [hovered, setIsHovered] = useState(false);

  const words = Object.keys(wordList);

  const handleWaypointEnter = () => {
    setCurrentSection("aboutMe");
  };

  return (
    <div id="aboutMe" className="aboutMe h-screen snap-center">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      <section className="w-screen h-screen p-4 bg-[#f3f2f9]">
        <h2 className="title_list h-auto text-2xl font-bold lg:pb-8">
          .about me
        </h2>
        <div className="flex flex-col h-5/6 lg:flex-row">
          <ul className="flex flex-col w-full h-1/2 mb-8 mt-8 justify-around lg:w-1/3 lg:h-full lg:justify-around lg:mt-0 lg:mb-0 word_list">
            {words.map((word) => (
              <ListItem
                className={`relative flex items-center text-4xl text-transparent lg:text-6xl lg:align-top cursor-pointer ${
                  hovered ? "opacity-100" : ""
                }`}
                key={word}
                text={word}
                onMouseEnter={() => {
                  setWordHovered(word);
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setWordHovered("");
                  setIsHovered(false);
                }}
              >
                {word}
                <span className="arrow absolute right-0 opacity-0 content-none border-x-[20px]"></span>
              </ListItem>
            ))}
          </ul>
          <div className="resumeBox w-full h-1/2 lg:w-2/3 lg:h-full flex ">
            {wordHovered !== "" && (
              <p className="text-2xl">{wordList[wordHovered]}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
