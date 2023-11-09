import useStoreApp from "../Store/app.store";
import { useStore } from "zustand";
import {
  BsBook,
  BsEnvelopeAt,
  BsPerson,
  BsHouse,
  BsCodeSlash,
} from "react-icons/bs";

const Navbar = () => {
  const { currentSection } = useStore(useStoreApp);

  return (
    <div className="flex justify-center">
      <div className="w-screen">
        <nav className="fixed bottom-2 w-full -translate-y-1/6 flex justify-center z-50">
          <ul className="w-[425px] flex justify-around items-center text-2x1 text-[#606887]">
            <li className="flex items-center justify-center">
              <a
                href="#homePage"
                className="cursor-pointer flex flex-col place-items-center"
                aria-label="home page"
              >
                <BsHouse size={32} />
                {currentSection === "homePage" && (
                  <span className="text-lg font-bold">home</span>
                )}
              </a>
            </li>
            <li className="rounded flex items-center justify-center">
              <a
                href="#aboutMe"
                className="flex flex-col place-items-center"
                aria-label="about me page"
              >
                <BsPerson size={32} />
                {currentSection === "aboutMe" && (
                  <span className="text-lg font-bold">aboutMe</span>
                )}
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#myWorks"
                className="flex flex-col place-items-center"
                aria-label="my works page"
              >
                <BsBook size={30} />
                {currentSection === "myWorks" && (
                  <span className="text-lg font-bold">myWorks</span>
                )}
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#mySkills"
                className="flex flex-col place-items-center"
                aria-label="my skills page"
              >
                <BsCodeSlash size={32} />
                {currentSection === "mySkills" && (
                  <span className="text-lg font-bold">mySkills</span>
                )}
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#contact"
                className="flex flex-col place-items-center"
                aria-label="contact me page"
              >
                <BsEnvelopeAt size={32} />
                {currentSection === "contact" && (
                  <span className="text-lg font-bold">contact</span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

// bg-black/20 h-[60px] backdrop-blur-2xl
// navbar color icon #606887
