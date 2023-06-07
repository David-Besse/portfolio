import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import { useStoreApp } from "../Store/app.store";
import styled from "styled-components";

import "./aboutMe.scss";

const words = ["geek", "pragmatic", "team spirit", "adaptive", "curious"];

const ListItem = styled.li`
  font-size: 3em;
  padding: 0 0 20px 0;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: slategrey;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 2s linear both;

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
      <section className="flex w-screen h-screen p-4 bg-blue-500">
        <div className="w-full flex flex-col">
          <h2 className="title_list text-end text-2xl font-bold pb-8">Who i am</h2>
          <br />
          <ul className="word_list text-start">
            {words.map((item) => (
              <ListItem
                key={item}
                text={item}
              >
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
