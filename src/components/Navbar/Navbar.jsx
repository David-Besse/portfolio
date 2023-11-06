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
          <ul className="w-full sm:w-1/3 flex justify-around items-center text-2x1 text-[#606887]">
            <li className="flex items-center justify-center">
              <a
                href="#homePage"
                className="cursor-pointer flex flex-col place-items-center"
              >
                <BsHouse size={32} />
                {currentSection === "homePage" && (
                  <span className="text-l font-bold">home</span>
                )}
              </a>
            </li>
            <li className="rounded flex items-center justify-center">
              <a
                href="#aboutMe"
                className="flex flex-col place-items-center"
              >
                <BsPerson size={32} />
                {currentSection === "aboutMe" && (
                  <span className="text-l font-bold">aboutMe</span>
                )}
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#myWorks"
                className="flex flex-col place-items-center"
              >
                <BsBook size={30} />
                {currentSection === "myWorks" && (
                  <span className="text-l font-bold">myWorks</span>
                )}
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#mySkills"
                className="flex flex-col place-items-center"
              >
                <BsCodeSlash size={32} />
                {currentSection === "mySkills" && (
                  <span className="text-l font-bold">mySkills</span>
                )}
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#contact"
                className="flex flex-col place-items-center"
              >
                <BsEnvelopeAt size={32} />
                {currentSection === "contact" && (
                  <span className="text-l font-bold">contact</span>
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
