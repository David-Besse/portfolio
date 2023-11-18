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
    icon: <BsHouse size={32} />,
  },
  {
    hrefLabel: "aboutMe",
    ariaLabel: "go to about me page",
    icon: <BsPerson size={32} />,
  },
  {
    hrefLabel: "myWorks",
    ariaLabel: "got to my works page",
    icon: <BsBook size={32} />,
  },
  {
    hrefLabel: "mySkills",
    ariaLabel: "go to my skills page",
    icon: <BsCodeSlash size={32} />,
  },
  {
    hrefLabel: "contact",
    ariaLabel: "go to contact me page",
    icon: <BsEnvelopeAt size={32} />,
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
    <nav className="fixed bottom-6 w-full -translate-y-1/6 flex justify-center z-50">
      <ul className="w-[425px] flex justify-around items-center text-2xl text-[#606887]">
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
                activeSection === link.hrefLabel ? "scale-150" : ""
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
