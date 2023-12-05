/* eslint-disable react/no-unknown-property */
import AliceCarousel from "react-alice-carousel";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";
import Sheet from "./Sheet/Sheet";
import WorksList from "./../../datas/WorksList";
import "./myWorks.scss";

/**
 * Renders the "MyWorks" component.
 *
 * @return {JSX.Element} The rendered component.
 */
const MyWorks = () => {
  const carouselItems = WorksList.map((project, index) => (
    <Sheet project={project} index={index} key={`${index}_${project}`} />
  ));

  return (
    <>
      {/* section title */}
      <h2 className="titleMyWorks absolute h-fit w-fit left-[1vh] bottom-[1vh] text-3xl sm:text-5xl z-[0] text-transparent opacity-[20%] lg:opacity-[10%] lg:text-[15vw] lg:left-0 lg:right-0 lg:top-0  lg:w-full lg:text-center cursor-default select-none dark:text-white">
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
      <AliceCarousel
        mouseTracking={true}
        animationType="slide"
        items={carouselItems}
        infinite={true}
      />
    </>
  );
};

export default MyWorks;
