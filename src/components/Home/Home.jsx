import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";
import "./home.scss";
import Logo from "/logo.png";
import { BsDownload, BsLinkedin, BsGithub } from "react-icons/bs";

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The JSX element representing the Home component.
 */
const Home = () => {
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
        <h2 className="font-bold text-4xl text-[#00a1ec] z-10 flex items-center ps-4">david<span className="text-[#606887]">b.</span></h2>
        {/* CV + socials networks */}
        <ul className="pe-4 flex items-center justify-center gap-4 z-10">
          <li className="myCv w-22 flex justify-center items-center">
            <a
              href="#"
              className="flex gap-1 hover:scale-125 hover:italic"
              aria-label="download my CV"
            >
              <span className="text-center text-[24px] font-bold">CV</span>
              <BsDownload className="w-[30px] h-[30px] " />
            </a>
          </li>
          <li className="socials w-8 flex justify-center items-center">
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
          <li className="w-8 flex justify-center items-center">
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
      <div className="h-[85%] w-full flex flex-col lg:flex-row lg:pl-14 xl:pl-40 md:pr-0 z-10">
        {/* Left side content */}
        <div className="home_left w-full h-fit lg:w-2/5 lg:h-full 2xl:pl-36 flex flex-col pt-4 pb-4 lg:pt-20 px-10 md:px-16 lg:px-0 gap-4 lg:gap-12 fade-in z-10">
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
        {/* Right side content */}
        <div className="home_right w-full h-1/2 lg:w-3/5 lg:h-full md:pt-0 lg:pt-16 fade-in z-10">
          <img
            src="/home_right.png"
            alt="screen animated"
            className="home_right_img h-[85%] md:w-3/6 md:h-auto lg:w-[80%] xl:w-[60%] 2xl:w-2/6 m-auto"
          />
        </div>
      </div>
      
    </>
  );
};

export default Home;
