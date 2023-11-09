import { Waypoint } from "react-waypoint";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";

import "./home.scss";
import Logo from "/logo.png";
import { BsDownload, BsLinkedin, BsGithub } from "react-icons/bs";

const Home = () => {
  const { homeAnimated, setHomeAnimated, setCurrentSection } =
    useStore(useStoreApp);

  const handleWaypointEnter = () => {
    setHomeAnimated();
    setCurrentSection("homePage");
  };

  const handleWaypointLeave = () => {
    setHomeAnimated();
  };

  return (
    <div
      id="homePage"
      className="homePage h-screen snap-center flex-col bg-[#f3f2f9]"
    >
      <Waypoint
        onEnter={() => handleWaypointEnter()}
        onLeave={() => handleWaypointLeave()}
        bottomOffset="5%"
      />
      <header className="h-1/6 p-4 w-screen md:w-4/5 md:mx-auto bg-transparent flex justify-between border-b-2">
        <img src={Logo} alt="logo" className="myLogo rounded-xl w-30 h-30" />
        <ul className="flex items-center justify-center gap-8">
          <li className="myCv w-22 h-16 flex justify-center items-center">
            <a href="#" className="flex gap-1 hover:scale-125 hover:italic" aria-label="download my CV">
              <span className="text-center text-[24px] font-bold">CV</span>
              <BsDownload className="w-[32px] h-[32px] " />
            </a>
          </li>
          <li className="socials w-8 h-16 flex justify-center items-center">
            <a
              href="https://www.linkedin.com/in/david-besse-666a77236/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125"
              aria-label="link to my LinkedIn profile"
            >
              <BsLinkedin className="w-[32px] h-[32px]" />
            </a>
          </li>
          <li className="w-8 h-16 flex justify-center items-center">
            <a
              href="https://github.com/David-Besse"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125"
              aria-label="link to my Github profile"
            >
              <BsGithub className="w-[32px] h-[32px]" />
            </a>
          </li>
        </ul>
      </header>
      <section className="h-5/6 flex flex-col lg:flex-row lg:pl-14 xl:pl-40 md:pr-0">
        <div
          className={`home_left w-screen lg:w-2/5 h-1/3 lg:h-full 2xl:pl-36 flex flex-col pt-4 lg:pt-20 px-10 md:px-16 lg:px-0 gap-4 lg:gap-12 ${
            homeAnimated ? "fade-in" : "fade-out"
          }`}
        >
          <h2 className="text-6xl lg:text-8xl font-extrabold">My motto</h2>
          <q className="text-xl lg:text-2xl xl:text-4xl italic text-center">
            For the things we have to learn before we can do them, we learn by
            doing them.
          </q>
          <cite className="text-l xl:text-2xl self-end text-gray-600">
            ― Aristotle,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Nicomachean_Ethics"
              target="_blank"
              rel="noreferrer"
              aria-label="Read more about The Nicomachean Ethics"
            >
              The Nicomachean Ethics
            </a>
          </cite>
        </div>
        <div
          className={`home_right w-screen lg:w-3/5 h-2/3 lg:h-full pt-8 md:pt-0 lg:pt-20 ${
            homeAnimated ? "fade-in" : "fade-out"
          }`}
        >
          <img
            src="/home_right.png"
            alt="screen animated"
            className="home_right_img w-4/5 md:w-3/6 lg:w-5/6 xl:w-4/6 2xl:w-3/6 m-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
