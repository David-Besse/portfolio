import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import BackgroundDiv from "../BackgroundDiv/BackgroundDiv";
import "./home.scss";
import { BsDownload, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The JSX element representing the Home component.
 */
const Home = () => {
  const { theme, setTheme } = useStore(useStoreApp);
  const letters = Array.from("david");

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

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
        <div className="flex flex-col justify-center items-center pl-2">
          <h2 className="font-bold text-3xl sm:text-4xl text-[#00a1ec] flex">
            {letters.map((letter, index) => (
              <span key={index} className="mx-[2px]">
                {letter}
              </span>
            ))}
            <span className="text-[#606887] dark:text-[#f2f2f2]">b.</span>
          </h2>
          <span className="logo text-base sm:text-lg font-bold text-[#606887] dark:text-[#f2f2f2]">
            &lsaquo;web developer&rsaquo;
          </span>
        </div>

        {/* Dark mode */}
        <div className="h-fit self-center border-black dark:border-white">
          {theme === "light" ? (
            <MdDarkMode
              size={30}
              onClick={toggleDarkMode}
              className="cursor-pointer"
            />
          ) : (
            <MdLightMode
              size={30}
              onClick={toggleDarkMode}
              className="cursor-pointer"
            />
          )}
        </div>

        {/* CV + socials networks */}
        <div className="pr-2 flex items-center justify-center gap-2 md:gap-4 z-10">
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="flex flex-col justify-center items-center hover:scale-125 hover:italic px-1"
              aria-label="download my CV"
            >
              <BsDownload size={26} />
              <span className="self-end text-2xl font-bold text-[#808080] dark:text-[#f2f2f2]">
                CV
              </span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.linkedin.com/in/david-besse-666a77236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00a1ec] hover:scale-125"
              aria-label="link to my LinkedIn profile"
            >
              <BsLinkedin size={28} />
            </a>

            <a
              href="https://github.com/David-Besse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00a1ec] hover:scale-125"
              aria-label="link to my Github profile"
            >
              <BsGithub size={30} />
            </a>
          </div>
        </div>
      </header>

      {/* Main content section */}
      <main className="relative h-[85%] w-full flex flex-wrap lg:flex-col items-stretch pb-16 px-4 sm:px-20 xl:px-20 z-10 ">
        {/* Left side content */}
        <section className="home_center w-1/2 h-1/2 lg:h-full lg:w-1/2 flex order-1 lg:order-none justify-center items-end lg:items-center z-10">
          <img
            src="/images/home_right.png"
            alt="my photo"
            className="photo h-3/4 sm:h-[85%] lg:h-[60%] -rotate-2 lg:-rotate-2 rounded border-4 shadow-xl rounded-se-[50px] rounded-es-[50px]"
          />
        </section>

        {/* center content */}
        <section className="relative w-1/2 h-1/2 lg:h-1/2 flex flex-col order-2 lg:order-none justify-end fade-in-L gap-[2vh] lg:gap-3 text-start pl-2 sm:pl-0 lg:pr-20 xl:pr-[10%]">
          {/* Background Bubble */}
          <div className="bgBuble absolute w-[75%] h-[20%] top-[6vh] right-0 sm:right-[15%] lg:right-[15%] sm:w-[40%] sm:top-[20%] lg:h-[22%] xl:w-[30%] 2xl:w-[20%] z-0 flex justify-center items-center">
            <p className="text-4xl sm:text-end lg:text-5xl font-extrabold z-10 whitespace-nowrap">
              Hello !
            </p>

            {/* intro */}
          </div>
          <p className="text-xl font-extrabold sm:text-2xl lg:text-2xl xl:text-4xl pb-2">
            My name is David.
          </p>
          <p className="text-sm sm:text-base xl:text-lg lg:pt-4 tracking-wide">
            As a web developer, every assignment presents a precious chance to
            enhance and consistently advance my skills.
          </p>
        </section>

        {/* Right side content */}
        <section className="w-full h-1/2 flex flex-col order-3 justify-center gap-[4vh] px-4 lg:px-0 lg:pr-20 xl:pr-[10%] lg:w-1/2 lg:h-1/2 lg:order-none lg:gap-8 fade-in-R">
          <h3 className="text-2xl font-extrabold lg:text-2xl xl:text-4xl text-center italic">
            My motto
          </h3>
          <q className="leading-normal text-sm sm:text-base xl:text-lg text-center sm:px-20 lg:px-0 tracking-wide">
            For the things we have to learn before we can do them, we learn by
            doing them.
          </q>
          <cite className="text-sm sm:text-sm xl:text-base text-gray-600 dark:text-[#f5d088] text-center">
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
