import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";
import "./home.scss";
import { BsDownload, BsLinkedin, BsGithub } from "react-icons/bs";

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
        <div className="flex flex-col justify-center items-center ps-4">
          <h2 className="font-bold text-3xl sm:text-4xl text-[#00a1ec] flex">
            {letters.map((letter, index) => (
              <span key={index} className="mx-[2px]">
                {letter}
              </span>
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
              <span className="self-end text-2xl font-bold text-[#808080]">
                CV
              </span>
              <BsDownload className="w-[30px] h-[30px] " />
            </a>
          </li>
          <li className="socials w-8 flex justify-center items-center text-[#00a1ec]">
            <a
              href="https://www.linkedin.com/in/david-besse-666a77236/"
              target="_blank"
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
              className="hover:scale-125"
              aria-label="link to my Github profile"
            >
              <BsGithub className="w-[30px] h-[30px]" />
            </a>
          </li>
        </ul>
      </header>

      {/* Main content section */}
      <main className="relative h-[85%] w-full flex flex-wrap lg:flex-col items-stretch pb-16 pl-4 pr-4 xl:pl-20 xl:pr-20 z-10 ">
        {/* Left side content */}
        <section className="home_center w-1/2 h-1/2 lg:h-full lg:w-1/3 flex order-1 lg:order-none justify-center items-end lg:items-center z-10">
          <img
            src="/home_right.png"
            alt="my photo"
            className="photo h-3/4 sm:h-[85%] lg:h-2/3 -rotate-2 lg:-rotate-2 rounded border-4 shadow-xl rounded-se-[50px] rounded-es-[50px]"
          />
        </section>

        {/* center content */}
        <section className="relative w-1/2 h-1/2 lg:w-2/3 lg:h-1/2 flex flex-col order-2 lg:order-none justify-end fade-in-L gap-1 lg:gap-3 text-end  sm:text-start lg:text-start sm:pr-4 lg:px-8">
          {/* Background Bubble */}
          <div className="bgBuble absolute w-[65%] h-[15%] top-[25%] right-0 sm:right-2/3 lg:right-[10%] sm:w-[32%] sm:top-[20%] lg:h-[22%] lg:w-[25%] xl:w-[25%] 2xl:w-[13%] z-0 flex justify-center items-center">
            <p className="text-4xl sm:text-end lg:text-5xl font-extrabold z-10 whitespace-nowrap">
              Hello !
            </p>

            {/* intro */}
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl pb-4 lg:px-20">My name is David.</p>
          <p className="text-sm sm:text-xl lg:text-2xl lg:pt-4 lg:px-20">
            As a web developer, every assignment presents a precious chance to
            enhance and consistently advance my skills.
          </p>
        </section>

        {/* Right side content */}
        <section className="w-full h-1/2 flex flex-col order-3 justify-center gap-2 pr-4 pl-4 lg:w-2/3 lg:h-1/2 lg:order-none lg:px-8 sm:gap-4 lg:gap-8 fade-in-R">
          <h3 className="text-2xl lg:text-4xl font-extrabold text-start sm:text-center italic">
            My motto is . . .
          </h3>
          <q className="leading-normal text-sm sm:text-xl lg:text-2xl text-justify sm:text-center sm:px-20">
            For the things we have to learn before we can do them, we learn by
            doing them.
          </q>
          <cite className="text-sm sm:text-lg lg:text-xl text-gray-600 text-center">
            ― Aristotle,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Nicomachean_Ethics"
              target="_blank"
              rel="noreferrer noopener nofollow"
              aria-label="Read more about The Nicomachean Ethics"
              className="decoration-1 underline underline-offset-2"
            >
              The Nicomachean Ethics
            </a>
          </cite>
        </section>
      </main>
    </>
  );
};

export default Home;
