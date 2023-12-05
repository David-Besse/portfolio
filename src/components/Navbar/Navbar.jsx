import {
  BsBook,
  BsEnvelopeAt,
  BsPerson,
  BsHouse,
  BsCodeSlash,
} from "react-icons/bs";
import { useStore } from "zustand";
import useStoreApp from "../Store/app.store";

const links = [
  {
    hrefLabel: "homePage",
    ariaLabel: "go to home page",
    icon: <BsHouse />,
  },
  {
    hrefLabel: "aboutMe",
    ariaLabel: "go to about me page",
    icon: <BsPerson />,
  },
  {
    hrefLabel: "myWorks",
    ariaLabel: "got to my works page",
    icon: <BsBook />,
  },
  {
    hrefLabel: "mySkills",
    ariaLabel: "go to my skills page",
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

  /**
   * Handles the click event on the navigation links.
   *
   * @param {Event} event - The click event object.
   * @return {undefined} This function does not return a value.
   */
  const handleClick = (event) => {
    // Prevent the default behavior of the click event
    event.preventDefault();

    // Get the href attribute value of the clicked element
    const target = event.currentTarget.getAttribute("href");

    // Find the element with the corresponding id
    const location = document.querySelector(`#${target}`);

    // If the element exists, scroll to it smoothly
    if (location) {
      location.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Render the navigation bar
    <nav className="fixed bottom-2 right-0 lg:right-1/2 lg:transform lg:translate-x-1/2 w-fit -translate-y-1/6 z-50 rounded-ss-2xl rounded-es-2xl lg:rounded-2xl border-4 border-r-0 border-opacity-100 p-2 lg:p-3 bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-60">
      <ul className="flex justify-end items-center gap-4 sm:gap-6 lg:gap-16 text-2xl xl:text-3xl text-[#606887] dark:text-[#fefefe]">
        {/* Render each link in the navigation bar */}
        {links.map((link, index) => (
          <li className="flex flex-col items-center justify-center" key={index}>
            <a
              // Set the href attribute value of the link
              href={link.hrefLabel}
              // Set the aria-label attribute value of the link
              aria-label={link.ariaLabel}
              // Attach the click event handler
              onClick={handleClick}
              // Add a CSS class if the current section matches the link's href value
              className={`${
                activeSection === link.hrefLabel ? "scale-[130%] text-[#00a1ec]" : "scale-110"
              }`}
            >
              {/* Render the icon of the link */}
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
