import { useStoreApp } from "../Store/app.store";
import {
  BsBook,
  BsEnvelopeAt,
  BsPerson,
  BsHouse,
  BsCodeSlash,
} from "react-icons/bs";

const Navbar = () => {
  // const [hoveredIcon, setHoveredIcon] = useState(null);
  const selectedSection = useStoreApp((state)=> state.selectedSection);
  const setSelectedSection = useStoreApp((state)=> state.setSelectedSection);

  const handleSelectedSection = (value) => {
    setSelectedSection(value);
  }

  // const handleIconHover = (iconName) => {
  //   setHoveredIcon(iconName);
  // };

  // const handleIconLeave = () => {
  //   setHoveredIcon(null);
  // };

  return (
    <div className="flex justify-center">
      <div className="w-screen bg-white">
        <nav className="fixed bottom-1 left-2/4 transform -translate-x-2/4 -translate-y-1/6 z-50">
          <ul className="w-full flex justify-around items-center text-2x1 text-black">
            <li className="cursor-pointer w-[80px] h-[80px] flex items-center justify-center">
              <a
                href="#homePage"
                className="flex flex-col place-items-center"
                onClick={() => handleSelectedSection("homePage")}
                // onMouseEnter={() => handleIconHover("homePage")}
                // onMouseLeave={handleIconLeave}
              >
                <BsHouse size={32} />
                {selectedSection === 'homePage' && <span className="text-l font-bold">home</span>}
              </a>
            </li>
            <li className="cursor-pointer w-[80px] h-[80px] rounded flex items-center justify-center">
              <a
                href="#myProfile"
                className="flex flex-col place-items-center"
                onClick={() => handleSelectedSection("myProfile")}
                // onMouseEnter={() => handleIconHover("myProfile")}
                // onMouseLeave={handleIconLeave}
              >
                <BsPerson size={32} />
                {selectedSection === 'myProfile' && <span className="text-l font-bold">aboutMe</span>}
              </a>
            </li>
            <li className="cursor-pointer w-[80px] h-[80px] flex items-center justify-center">
              <a
                href="#myWorks"
                className="flex flex-col place-items-center"
                onClick={() => handleSelectedSection("myWorks")}
                // onMouseEnter={() => handleIconHover("myWorks")}
                // onMouseLeave={handleIconLeave}
              >
                <BsBook size={30} />
                {selectedSection === 'myWorks' && <span className="text-l font-bold">works</span>}
              </a>
            </li>
            <li className="cursor-pointer w-[80px] h-[80px] flex items-center justify-center">
              <a
                href="#mySkills"
                className="flex flex-col place-items-center"
                onClick={() => handleSelectedSection("mySkills")}
                // onMouseEnter={() => handleIconHover("mySkills")}
                // onMouseLeave={handleIconLeave}
              >
                <BsCodeSlash size={32} />
                {selectedSection === 'mySkills' && <span className="text-l font-bold">skills</span>}
              </a>
            </li>
            <li className="cursor-pointer w-[80px] h-[80px] flex items-center justify-center">
              <a
                href="#contact"
                className="flex flex-col place-items-center"
                onClick={() => handleSelectedSection("contact")}
                // onMouseEnter={() => handleIconHover("contact")}
                // onMouseLeave={handleIconLeave}
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
