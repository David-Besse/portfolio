/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import Draggable from "react-draggable";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";
import Sheet from "./Sheet/Sheet";

import WorksList from "../../datas/WorksList";

import "./myWorks.scss";

/**
 * Renders the "MyWorks" component.
 *
 * @return {JSX.Element} The rendered component.
 */
const MyWorks = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 600px)");
  const sheetRef = useRef(null);

  return (
    <>
      {/* Heading */}
      <h2 className="absolute top-2 left-2 h-[5%] text-xl sm:text-2xl z-10">
        .myWorks
      </h2>
      {/* Background Div */}
      <BackgroundDiv
        path="0% 0%, 0% 100%, 50% 100%, 0% 0%"
        color="#c4ae96"
        width="100%"
        height="100%"
      />
      <BackgroundDiv
        path="50% 100%, 75% 100%, 100% 50%, 100% 0%"
        color="#89d6e8 "
        width="100%"
        height="100%"
      />
      {/* Works List */}
      <div className="h-fit w-full py-16 px-2 flex gap-3">
        {WorksList.map((project, index) => (
          <Draggable
            nodeRef={sheetRef}
            bounds="body"
            disabled={isSmallDevice}
            handle="strong"
            defaultPosition={{ x: 0, y: index === 0 ? 0 : index + 100 }}
            key={`div_${project.projectName}`}
          >
            <div ref={sheetRef} className="sheet w-[30vh]">
              {/* Map over WorksList and render each project */}
              <Sheet
                project={project}
                index={index}
                isSmallDevice={isSmallDevice}
              />
            </div>
          </Draggable>
        ))}
      </div>
    </>
  );
};

export default MyWorks;
