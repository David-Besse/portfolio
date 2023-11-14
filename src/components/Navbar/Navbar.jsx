import {
  BsBook,
  BsEnvelopeAt,
  BsPerson,
  BsHouse,
  BsCodeSlash,
} from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="flex justify-center">
      <div className="w-screen">
        <nav className="fixed bottom-2 w-full -translate-y-1/6 flex justify-center z-50">
          <ul className="w-[425px] flex justify-around items-center text-2x1 text-[#606887]">
            <li className="flex flex-col items-center justify-center">
              <a
                href="#homePage"
                className=""
                aria-label="go to home page"
                onClick={() => setActiveSection("homePage")}
              >
                <BsHouse size={32} />
              </a>
              <span
                className={`text-lg font-bold ${
                  activeSection === "homePage" ? "block" : "hidden"
                }`}
              >
                home
              </span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <a
                href="#aboutMe"
                className=""
                aria-label="go to about me page"
                onClick={() => setActiveSection("aboutMe")}
              >
                <BsPerson size={32} />
              </a>
              <span
                className={`text-lg font-bold ${
                  activeSection === "aboutMe" ? "block" : "hidden"
                }`}
              >
                aboutMe
              </span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <a
                href="#myWorks"
                className=""
                aria-label="got to my works page"
                onClick={() => setActiveSection("myWorks")}
              >
                <BsBook size={32} />
              </a>
              <span
                className={`text-lg font-bold ${
                  activeSection === "myWorks" ? "block" : "hidden"
                }`}
              >
                myWorks
              </span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <a
                href="#mySkills"
                className=""
                aria-label="go to my skills page"
                onClick={() => setActiveSection("mySkills")}
              >
                <BsCodeSlash size={32} />
              </a>
              <span
                className={`text-lg font-bold ${
                  activeSection === "mySkills" ? "block" : "hidden"
                }`}
              >
                mySkills
              </span>
            </li>
            <li className="flex flex-col items-center justify-center">
              <a
                href="#contact"
                className=""
                aria-label="go to contact me page"
                onClick={() => setActiveSection("contact")}
              >
                <BsEnvelopeAt size={32} />
              </a>
              <span
                className={`text-lg font-bold ${
                  activeSection === "contact" ? "block" : "hidden"
                }`}
              >
                contact
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
