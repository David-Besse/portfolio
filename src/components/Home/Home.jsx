import { Tooltip } from "@heroui/react";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

import "./home.scss";
import ProfileImg from "../../assets/images/profile.png";
import filePdf from "../../assets/docs/CVBD.pdf";
import SignPannel from "./SignPannel/SignPannel";

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The JSX element representing the Home component.
 */
const Home = () => {
  const letters = Array.from("david");

  return (
    <>
      {/* BackgroundDiv component with specific props */}
      <BackgroundDiv
        path="0% 0%, 0% 100%, 50% 100%, 0% 0%"
        color="#c4ae96"
        width="100%"
        height="100%"
      />
      <BackgroundDiv
        path="50% 100%, 75% 100%, 100% 50%, 100% 0%"
        color="#89d6e8"
        width="100%"
        height="100%"
      />

      {/* Header section */}
      <header className="h-[15%] p-2 w-screen md:w-4/5 md:mx-auto bg-transparent flex justify-between border-b-1 z-10">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center pl-2 cursor-default">
          <p className="font-bold text-3xl sm:text-4xl text-[#00a1ec] flex">
            {letters.map((letter, index) => (
              <span key={index} className="mx-[2px]">
                {letter}
              </span>
            ))}
            <span className="text-[#4D4D4D] dark:text-[#f2f2f2]">b.</span>
          </p>
          <span className="logo text-base sm:text-lg font-bold text-[#4D4D4D] dark:text-[#f2f2f2]">
            &lsaquo;web developer&rsaquo;
          </span>
        </div>

        {/* CV + socials networks */}
        <ul className="pr-2 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-4 lg:gap-6 z-10">
          <li className="flex justify-center items-center">
            <Tooltip
              content="Show or download my curriculum vitae"
              className="dark:bg-white dark:text-gray-800"
            >
              <a
                href={filePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center hover:italic hover:scale-110"
                aria-label="show or download my curriculum vitae"
              >
                <IoIosArrowForward size={24} className="" />
                <span
                  role="text"
                  className="self-end text-2xl lg:text-3xl font-bold dark:text-[#f2f2f2]"
                >
                  CV
                </span>
              </a>
            </Tooltip>
          </li>
          <li className="flex flex-row gap-4 lg:gap-6">
            <Tooltip
              content="link to my LinkedIn profile"
              className="dark:bg-white dark:text-gray-800"
            >
              <a
                href="https://www.linkedin.com/in/david-besse-666a77236/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00a1ec] hover:scale-125"
                aria-label="link to my LinkedIn profile"
              >
                <BsLinkedin size={28} />
              </a>
            </Tooltip>
            <Tooltip
              content="link to my Github profile"
              className="dark:bg-white dark:text-gray-800"
            >
              <a
                href="https://github.com/David-Besse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00a1ec] hover:scale-125"
                aria-label="link to my Github profile"
              >
                <BsGithub size={30} />
              </a>
            </Tooltip>
          </li>
        </ul>
      </header>

      {/* Main content section */}
      <main className="relative h-[85%] w-full flex flex-wrap lg:flex-col items-stretch pb-16 px-4 sm:px-20 xl:px-20 z-10 cursor-default">
        {/* Left side content */}
        <section className="home_center w-1/2 h-1/2 lg:h-full lg:w-1/2 flex order-1 lg:order-none justify-center items-end lg:items-center z-10">
          <img
            src={ProfileImg}
            alt="my photo"
            className="photo aspect-[125/201] h-[90%] sm:h-[85%] lg:h-[60%] -rotate-2 lg:-rotate-2 rounded border-4 shadow-xl rounded-se-[50px] rounded-es-[50px]"
          />
        </section>

        {/* center content */}
        <section className="relative w-1/2 h-1/2 lg:h-1/2 flex flex-col order-2 lg:order-none justify-end fade-in-L gap-[2vh] lg:gap-3 text-start pl-2 sm:pl-0 lg:pr-20 xl:pr-[10%]">
          {/* Background Bubble */}
          <div className="bgBuble absolute w-fit h-[20%] top-[4%] right-0 sm:right-[15%] lg:right-[unset] lg:left-[15%] sm:top-[20%] lg:h-[22%] z-0 flex justify-center items-center px-4">
            <SignPannel />
            <h1 className="openToWork text-xl sm:text-end sm:text-2xl lg:text-3xl z-10 whitespace-nowrap text-white dark:text-[#4d4d4d]">
              OPEN TO WORK
            </h1>

            {/* intro */}
          </div>
          <p className="text-xl font-extrabold sm:text-2xl lg:text-2xl xl:text-4xl pb-2">
            My name is David.
          </p>
          <p className="text-sm sm:text-base xl:text-lg lg:pt-4 tracking-wide">
            I&apos;m <strong>french</strong> and a web developer. <br />
            Each assignment is a valuable opportunity for me to improve and
            develop my skills.
          </p>
        </section>

        {/* Right side content */}
        <section className="w-full h-1/2 flex flex-col order-3 justify-center gap-[4vh] px-4 lg:px-0 lg:pr-20 xl:pr-[10%] lg:w-1/2 lg:h-1/2 lg:order-none lg:gap-8 fade-in-R">
          <p className="text-2xl font-extrabold lg:text-2xl xl:text-4xl text-center italic">
            My motto
          </p>
          <q className="leading-normal text-sm sm:text-base xl:text-lg text-center sm:px-20 lg:px-0 tracking-wide">
            For the things we have to learn before we can do them, we learn by
            doing them.
          </q>
          <cite className="text-sm sm:text-sm xl:text-base text-gray-600 dark:text-white text-center">
            ― Aristotle,{" "}
            <Tooltip content="Wikipedia: The Nicomachean Ethics">
              <a
                href="https://en.wikipedia.org/wiki/Nicomachean_Ethics"
                target="_blank"
                rel="noreferrer noopener nofollow"
                aria-label="Read more about The Nicomachean Ethics"
                className="decoration-1 underline underline-offset-2 text-[#0F4FA4] dark:text-orange-400"
              >
                The Nicomachean Ethics
              </a>
            </Tooltip>
          </cite>
        </section>
      </main>
    </>
  );
};

export default Home;
