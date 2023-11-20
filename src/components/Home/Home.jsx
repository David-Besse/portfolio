import { useRef } from "react";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";
import "./home.scss";
import { BsDownload, BsLinkedin, BsGithub } from "react-icons/bs";
import gsap from "gsap";

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The JSX element representing the Home component.
 */
const Home = () => {
  const letters = Array.from("david");
  const logoRef = useRef();

  gsap.to(logoRef.current, {
    duration: 0.5,
    opacity: 1,
    ease: "power1.inOut",
  });

  return (
    <>
      {/* BackgroundDiv component with specific props */}
      <BackgroundDiv
        path="0% 0%, 0% 100%, 50% 100%, 0% 0%"
        color="#cadfd3"
        width="100%"
        height="100%"
      />
      <BackgroundDiv
        path="50% 100%, 75% 100%, 100% 50%, 100% 0%"
        color="#ad8b75ff "
        width="100%"
        height="100%"
      />

      {/* Header section */}
      <header className="h-[15%] p-2 w-screen md:w-4/5 md:mx-auto bg-transparent flex justify-between border-b-1 z-10">
        {/* Logo */}
        {/* <img src={Logo} alt="logo" className="rounded-xl w-30 h-30 z-10" /> */}
        <div className="flex flex-col justify-center items-center ps-4">
          <h2
            ref={logoRef}
            className="font-bold text-3xl sm:text-4xl text-[#00a1ec] flex"
          >
            {letters.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
            <span className="text-[#606887]">b.</span>
          </h2>
          <span className="logo text-base sm:text-lg font-bold text-[#606887]">
            &lsaquo;web developer&rsaquo;
          </span>
        </div>
        {/* CV + socials networks */}
        <ul className="pe-4 flex items-center justify-center gap-4 z-10">
          <li className="w-22 flex justify-center items-center">
            <a
              href="#"
              className="flex gap-1 hover:scale-125 hover:italic"
              aria-label="download my CV"
            >
              <span className="self-end text-3xl font-bold text-[#808080]">
                CV
              </span>
              <BsDownload className="w-[28.23px] h-[36px] " />
            </a>
          </li>
          <li className="socials w-8 flex justify-center items-center text-[#00a1ec]">
            <a
              href="https://www.linkedin.com/in/david-besse-666a77236/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125"
              aria-label="link to my LinkedIn profile"
            >
              <BsLinkedin className="w-[30px] h-[30px]" />
            </a>
          </li>
          <li className="w-8 flex justify-center items-center text-[#00a1ec]">
            <a
              href="https://github.com/David-Besse"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125"
              aria-label="link to my Github profile"
            >
              <BsGithub className="w-[30px] h-[30px]" />
            </a>
          </li>
        </ul>
      </header>

      {/* Main content section */}
      <section className="h-[85%] w-full flex flex-col lg:flex-row pb-16 z-10">
        {/* Left side content */}
        <div className="home_left w-full h-1/3 lg:w-2/6 lg:h-full flex flex-col justify-start text-xl lg:text-2xl xl:text-3xl pt-20 fade-in gap-3 text-end pl-20">
          <p className="text-6xl font-extrabold">
            Hello,
          </p>
          <p className="">My name is David.</p>
          <p className="">I am a web developer,</p>
          <p className=""> and I love to create websites.</p>
        </div>

        {/* center content */}
        <div className="home_center w-full h-1/3 lg:w-2/6 lg:h-[80%] flex justify-center items-center self-center">
          <img
            src="/home_right.png"
            alt="my photo"
            className="h-full opacity-60 transform rotate-12 rounded-se-[150px] rounded-es-[150px]"
          />
        </div>

        {/* Right side content */}
        <div className="home_right w-full h-1/3 lg:w-2/6 lg:h-full flex flex-col justify-end pb-20 gap-8 fade-in text-start pr-20">
          <h3 className="text-6xl lg:text-6xl font-extrabold ">My motto :</h3>
          <q className="text-xl lg:text-2xl xl:text-3xl leading-normal">
            For the things we have to learn before we can do them, we learn by
            doing them.
          </q>
          <cite className="text-lg xl:text-xl text-gray-600 text-end">
            ― Aristotle,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Nicomachean_Ethics"
              target="_blank"
              rel="noreferrer"
              aria-label="Read more about The Nicomachean Ethics"
              className="decoration-1 underline underline-offset-2"
            >
              The Nicomachean Ethics
            </a>
          </cite>
        </div>
      </section>
    </>
  );
};

export default Home;
