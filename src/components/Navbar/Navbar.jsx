import {
  BsBook,
  BsEnvelopeAt,
  BsPerson,
  BsHouse,
  BsCodeSlash,
} from "react-icons/bs";
import { RiMenuFoldFill } from "react-icons/ri";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

const links = [
  {
    hrefLabel: "homePage",
    ariaLabel: "go to home page",
    icon: <BsHouse />,
  },
  {
    hrefLabel: "aboutMe",
    ariaLabel: "go to aboutme page",
    icon: <BsPerson />,
  },
  {
    hrefLabel: "myWorks",
    ariaLabel: "got to myworks page",
    icon: <BsBook />,
  },
  {
    hrefLabel: "mySkills",
    ariaLabel: "go to myskills page",
    icon: <BsCodeSlash />,
  },
  {
    hrefLabel: "contact",
    ariaLabel: "go to contact me page",
    icon: <BsEnvelopeAt />,
  },
];

/**
 * Renders the navigation bar component.
 *
 * @return {JSX.Element} The navigation bar component.
 */
const Navbar = () => {
  const { activeSection } = useStore(useStoreApp);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = useMediaQuery("only screen and (max-width : 1023px)");

  const handleClick = (event) => {
    event.preventDefault();

    const target = event.currentTarget.getAttribute("href");

    if (target) {
      const location = document.querySelector(`#${target}`);
      if (location) {
        location.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (activeSection) {
      const location = document.querySelector(`#${activeSection}`);
      if (location) {
        location.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [activeSection]);

  return (
    <>
      {/* Render the hamburger menu */}
      <div
        className="fixed bottom-2 right-2 lg:hidden z-50 rounded-se-xl rounded-ee-xl border-l-0 border-2 dark:border-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <RiMenuFoldFill size={40} className="scale-80" />
      </div>
      {/* Render the navigation bar */}
      <nav
        className={`${
          isSmallScreen && !isMenuOpen ? "hidden" : "block"
        } fixed bottom-2 right-12 lg:right-1/2 lg:transform lg:translate-x-1/2 w-fit -translate-y-1/6 z-50 rounded-ss-2xl rounded-es-2xl lg:rounded-2xl border-2 border-r-0 lg:border-r-2 border-opacity-100 py-2 px-4 lg:p-3 bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-40`}
      >
        <ul className="flex justify-end items-center gap-6 lg:gap-14 text-2xl xl:text-3xl text-[#606887] dark:text-[#fefefe]">
          {/* Render each link in the navigation bar */}
          {links.map((link, index) => (
            <li
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <a
                href={link.hrefLabel}
                aria-label={link.ariaLabel}
                onClick={handleClick}
                className={`${
                  activeSection === link.hrefLabel
                    ? "scale-[130%] text-[#00a1ec]"
                    : "scale-100"
                }`}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
