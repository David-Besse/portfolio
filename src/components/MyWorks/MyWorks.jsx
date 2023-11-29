/* eslint-disable react/no-unknown-property */
import AliceCarousel from "react-alice-carousel";
import { useMediaQuery } from "@uidotdev/usehooks";

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
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1023px)");

  const carouselItems = WorksList.map((project, index) => (
    <Sheet
      project={project}
      index={index}
      key={`${index}_${project}`}
    />
  ));

  const carouselProps = {
    mouseTracking: true,
    animationType: "slide",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
    items: carouselItems,
    infinite: true,
    disableButtonsControls: isSmallDevice,
  };

  return (
    <>
      {/* Heading */}
      {/* <h2 className="absolute top-2 left-2 h-[5%] text-xl sm:text-2xl z-10">
        .myWorks
      </h2> */}
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
      <AliceCarousel {...carouselProps} />
    </>
  );
};

export default MyWorks;
