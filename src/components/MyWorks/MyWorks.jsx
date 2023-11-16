/* eslint-disable react/no-unknown-property */
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";
import Sheet from "./Sheet/Sheet";

import WorksList from "../../datas/WorksList";

import "./myWorks.scss";

const MyWorks = () => {
  return (
    <div
      id="myWorks"
      className="relative h-screen w-screen bg-[white] snap-center"
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
        <ul className=" flex justify-center items-end text-4xl pb-1 sm:flex-col sm:pb-16 sm:w-1/4 sm:h-full lg:text-5xl xl:text-6xl gap-3">
          {WorksList.map((item) => (
            <Sheet key={`div_${item.projectName}`} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyWorks;
