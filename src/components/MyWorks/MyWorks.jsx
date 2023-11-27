/* eslint-disable react/no-unknown-property */
import { useMediaQuery } from "@uidotdev/usehooks";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";
import Sheet from "./Sheet/Sheet";
import { register } from "swiper/element/bundle";

import WorksList from "./../../datas/WorksList";

import "./myWorks.scss";

register();

/**
 * Renders the "MyWorks" component.
 *
 * @return {JSX.Element} The rendered component.
 */
const MyWorks = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1023px)");

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
      <swiper-container
        slides-per-view={isSmallDevice ? 1 : 3}
        pagination={{
          clickable: true,
        }}
        loop={true}
        centeredSlides={true}
        effect="coverflow"
      >
        {/* Map over WorksList and render each project */}
        {WorksList.map((project, index) => (
          <swiper-slide key={index}>
            <Sheet project={project} index={index} />
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};

export default MyWorks;
