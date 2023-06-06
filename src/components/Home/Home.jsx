import { useState } from "react";
import { Waypoint } from "react-waypoint";

import "./home.scss";
import Logo from "/logo.png";
import { BsDownload, BsLinkedin, BsGithub } from "react-icons/bs";

const Home = () => {
  const [animated, setAnimated] = useState(false);

  const handleWaypointEnter = (value) => {
    setAnimated(value);
  };

  return (
    <div id="homePage" className="homePage h-screen snap-center flex-col">
      <Waypoint
        onEnter={() => handleWaypointEnter(true)}
        onLeave={() => handleWaypointEnter(false)}
        bottomOffset="5%"
      />
      <header className="h-1/6 p-4 w-screen md:w-4/5 md:mx-auto bg-transparent flex justify-between border-b-2">
        <img src={Logo} alt="logo" className="myLogo rounded-xl w-30 h-30" />
        <ul className="flex items-center justify-center gap-8">
          <li className="myCv w-22 h-16 flex justify-center items-center">
            <a
              href="#"
              className="flex justify-center items-center gap-1 hover:scale-125"
            >
              <span className="text-center text-xl font-bold">my CV</span>
              <BsDownload className="w-[32px] h-[32px]" />
            </a>
          </li>
          <li className="socials w-8 h-16 flex justify-center items-center">
            <a
              href="https://www.linkedin.com/in/david-besse-666a77236/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125"
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
            >
              <BsGithub className="w-[32px] h-[32px]" />
            </a>
          </li>
        </ul>
      </header>
      <section className="h-5/6 flex flex-col md:flex-row md:pl-14 xl:pl-40 md:pr-0">
        <div
          className={`home_left w-screen md:w-2/5 h-1/3 md:h-full 2xl:pl-36 flex flex-col pt-8 md:pt-24 lg:pt-20 px-10 md:px-0 gap-4 md:gap-10 ${
            animated ? "fade-in" : "fade-out"
          }`}
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold">
            My motto
          </h2>
          <q className="text-xl lg:text-2xl italic text-justify">
            For the things we have to learn before we can do them, we learn by
            doing them.
          </q>
          <cite className="text-l self-end text-gray-600">
            ― Aristotle,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Nicomachean_Ethics"
              target="_blank"
              rel="noreferrer"
            >
              The Nicomachean Ethics
            </a>
          </cite>
        </div>
        <div
          className={`home_right w-screen md:w-3/5 h-2/3 md:h-full pt-8 md:pt-24 ${
            animated ? "fade-in" : "fade-out"
          }`}
        >
          <img
            src="/home_right.png"
            alt="screen animated"
            className="home_right_img w-4/5 xl:w-3/6 m-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
