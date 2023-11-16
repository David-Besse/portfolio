import {
  BsBook,
  BsEnvelopeAt,
  BsPerson,
  BsHouse,
  BsCodeSlash,
} from "react-icons/bs";

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

const Navbar = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const target = event.currentTarget.getAttribute("href");
    const location = document.querySelector("#" + target);
    if (location) {
      location.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-3 w-full -translate-y-1/6 flex justify-center z-50">
      <ul className="w-[425px] flex justify-around items-center text-2xl text-[#606887]">
        {links.map((link, index) => (
          <li className="flex flex-col items-center justify-center" key={index}>
            <a
              href={link.hrefLabel}
              aria-label={link.ariaLabel}
              onClick={(event) => handleClick(event)}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
