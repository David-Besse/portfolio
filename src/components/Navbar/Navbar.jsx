import { useStoreApp } from "../Store/app.store";
import {
  BsBook,
  BsEnvelopeAt,
  BsPerson,
  BsHouse,
  BsCodeSlash,
} from "react-icons/bs";

const Navbar = () => {
  const selectedSection = useStoreApp((state)=> state.selectedSection);

  return (
    <div className="flex justify-center">
      <div className="w-screen bg-white">
        <nav className="fixed bottom-1 left-2/4 transform -translate-x-2/4 -translate-y-1/6 z-50">
          <ul className="w-full flex justify-around items-center text-2x1 text-black">
            <li className="w-[80px] h-[80px] flex items-center justify-center">
              <a
                href="#homePage"
                className="cursor-pointer flex flex-col place-items-center"
              >
                <BsHouse size={32} />
                {selectedSection === 'homePage' && <span className="text-l font-bold">home</span>}
              </a>
            </li>
            <li className="w-[80px] h-[80px] rounded flex items-center justify-center">
              <a
                href="#myProfile"
                className="cursor-pointer flex flex-col place-items-center"
              >
                <BsPerson size={32} />
                {selectedSection === 'myProfile' && <span className="text-l font-bold">aboutMe</span>}
              </a>
            </li>
            <li className="w-[80px] h-[80px] flex items-center justify-center">
              <a
                href="#myWorks"
                className="cursor-pointer flex flex-col place-items-center"
              >
                <BsBook size={30} />
                {selectedSection === 'myWorks' && <span className="text-l font-bold">works</span>}
              </a>
            </li>
            <li className="w-[80px] h-[80px] flex items-center justify-center">
              <a
                href="#mySkills"
                className="cursor-pointer flex flex-col place-items-center"
              >
                <BsCodeSlash size={32} />
                {selectedSection === 'mySkills' && <span className="text-l font-bold">skills</span>}
              </a>
            </li>
            <li className="w-[80px] h-[80px] flex items-center justify-center">
              <a
                href="#contact"
                className="cursor-pointer flex flex-col place-items-center"
              >
                <BsEnvelopeAt size={32} />
                {selectedSection === 'contact' && <span className="text-l font-bold">contact</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

//  bg-black/20 h-[60px] backdrop-blur-2xl
