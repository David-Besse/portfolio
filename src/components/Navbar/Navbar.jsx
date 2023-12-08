import { useEffect, useRef } from "react";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";
import {
  BsBook,
  BsEnvelopeAt,
  BsPerson,
  BsHouse,
  BsCodeSlash,
} from "react-icons/bs";
import { RiMenuFoldFill } from "react-icons/ri";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import "./Navbar.scss";

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
  const { activeSection, setActiveSection, theme, setTheme } =
    useStore(useStoreApp);
  const navRef = useRef();
  const menuIconBurgerRef = useRef();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const handleClick = (event) => {
    event.preventDefault();

    const target = event.currentTarget.getAttribute("href");
    console.log(target);
    window.stop();

    if (target) {
      const location = document.querySelector(`#${target}`);
      if (location) {
        location.scrollIntoView({ behavior: "smooth" });
        setActiveSection(target);
      }
    }
  };

  const handleNav = () => {
    navRef.current.classList.toggle("nav_is_open");
    menuIconBurgerRef.current.classList.toggle("nav_is_open");
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
        ref={menuIconBurgerRef}
        className="menuIconBurger fixed pr-2 bottom-2 right-0 lg:hidden z-50 border-2 border-r-0 bg-white bg-opacity-60 rounded-ss-2xl rounded-es-2xl dark:border-white dark:bg-black dark:bg-opacity-40"
        onClick={handleNav}
      >
        <RiMenuFoldFill size={40} className="scale-80" />
      </div>

      {/* Render the navigation bar */}
      <nav
        ref={navRef}
        className={`opacity-0 -mr-[300px] lg:opacity-100 lg:mr-0 fixed w-fit bottom-2 right-[50px] lg:right-1/2 lg:transform lg:translate-x-1/2 -translate-y-1/6 z-50 rounded-ss-2xl rounded-es-2xl lg:rounded-2xl border-2 border-r-0 lg:border-r-2 border-opacity-100 py-2 px-4 lg:p-3 bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-40`}
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
                    ? "scale-[130%] text-blue-500"
                    : "scale-100"
                }`}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        {/* Dark mode */}
        <button
          className="h-fit absolute -top-6 -left-8 hover:scale-125"
          onClick={toggleDarkMode}
          aria-label="toggle dark mode"
        >
          {theme === "light" ? (
            <MdDarkMode size={30} className="cursor-pointer" />
          ) : (
            <MdLightMode size={30} className="cursor-pointer" />
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
