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
    color: #00a1ec;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.6s ease;
  }

  &:hover {
    ::after {
      width: 100%;
      transition: width 0.6s ease;
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
        <div className="flex flex-col h-5/6 lg:flex-row p-4">
          <ul className="flex flex-col w-full h-1/2 mb-8 mt-8 justify-around lg:w-1/3 lg:h-full lg:justify-around lg:mt-0 lg:mb-0 xl:w-1/4 word_list">
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
              </ListItem>
            ))}
          </ul>
          <div
            className="resumeBox w-full h-1/2 lg:w-2/3 lg:h-full xl:w-3/4 flex items-center justify-center"
          >
            {wordHovered !== "" && (
              <div className="flex items-center justify-center">
                <div className="arrow content-none"></div>
                <p
                  className={`w-auto h-fit p-4 text-4xl text-center ${
                    wordHovered !== ""
                      ? "border rounded-3xl border-solid border-transparent bg-white"
                      : ""
                  }`}
                >
                  {wordList[wordHovered]}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
