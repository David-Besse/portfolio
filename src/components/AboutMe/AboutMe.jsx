import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import { useStoreApp } from "../Store/app.store";
import styled from "styled-components";

import "./aboutMe.scss";

const words = ["pragmatic", "curious", "adaptive", "team spirit", "geek"];

const ListItem = styled.li`
  font-size: 3em;
  padding: 0 0 20px 0;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px black;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #606887;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const AboutMe = () => {
  const { setSelectedSection } = useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setSelectedSection("aboutMe");
  };

  return (
    <div id="aboutMe" className="aboutMe h-screen snap-center">
      <Waypoint onEnter={() => handleWaypointEnter()} bottomOffset="5%" />
      <section className="flex w-screen h-screen p-4 bg-[#f3f2f9]">
        <div className="flex flex-col">
          <h2 className="title_list text-2xl font-bold pb-8">.about me</h2>
          <br />
          <ul className="word_list">
            {words.map((item) => (
              <ListItem key={item} text={item}>
                {item}
              </ListItem>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
