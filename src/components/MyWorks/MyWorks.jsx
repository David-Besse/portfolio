/* eslint-disable react/no-unknown-property */
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
      <div className="h-full w-full">
        <ul className="flex justify-center items-center gap-3">
          {/* Map over WorksList and render each project */}
          {WorksList.map((project) => (
            <Sheet key={`div_${project.projectName}`} project={project} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyWorks;
