import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { BsDownload, BsLinkedin, BsGithub } from "react-icons/bs";

import "./home.scss";
import Logo from "/logo.png";

gsap.registerPlugin(MotionPathPlugin);

const Home = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const containerWidth =
      document.querySelector(".surfer-container").offsetWidth;
    const surferWidth = document.querySelector(".surfer").offsetWidth;

    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        ".surfer",
        { x: 0 },
        {
          x: containerWidth - surferWidth,
          duration: 2,
          ease: "power1.inOut",
        }
      )
      .to(".surfer", {
        x: 0,
        duration: 2,
        ease: "power1.inOut",
      });
  }, [windowSize.width]);

  return (
    <div id="homePage" className="homePage h-screen snap-center flex-col">
      <header className="h-1/6 p-4 w-screen lg:w-4/5 lg:mx-auto bg-white flex justify-between border-b-2">
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
      <section className="h-5/6 flex flex-col lg:flex-row">
        <div className="left w-screen lg:w-2/5 h-1/3 lg:h-full flex flex-col justify-center items-center p-4 gap-4 lg:gap-10">
          <h2 className="text-6xl lg:text-8xl font-bold">My motto</h2>
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
        <div className="right w-screen lg:w-3/5 h-2/3 lg:h-full flex justify-center items-start lg:items-center">
          <div className="surfer-container w-4/5 h-3/5 border">
            <div className="surfer"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
