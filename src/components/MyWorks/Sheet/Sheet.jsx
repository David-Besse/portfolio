import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import styled from "styled-components";
import { useStore } from "zustand";
import useStoreApp from "../../Store/app.store";

import ModalPreview from "../ModalPreview/ModalPreview";

import { ImNewTab } from "react-icons/im";
import { MdOutlinePreview } from "react-icons/md";

import "./Sheet.scss";

const NewPTag = styled.p`
  &::before,
  &::after {
    content: "${(props) => props.$text}";
  }

  span::before,
  span::after {
    content: "${(props) => props.$text}";
  }
`;

const Sheet = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { theme } = useStore(useStoreApp);

  return (
    <>
      <ModalPreview project={project} isOpen={isOpen} onClose={onClose} />
      <Card className="h-full w-full left-1/2 transform -translate-x-1/2 rounded-2xl bg-opacity-70 shadow-[0_0_2px_2px_inset_#606887] dark:shadow-[0_0_2px_2px_inset_white]">
        <CardHeader className="flex flex-col p-0 pt-[4vh]">
          <div className="flex flex-col w-full justify-center items-center">
            <div
              key={`div_${project.projectName}`}
              className="projectListItemContainer w-fit relative flex justify-center text-4xl sm:text-5xl lg:text-6xl border-y-1 border-black dark:border-white"
            >
              <NewPTag className="projectListItem w-fit" $text={project.projectName}>
                <span className="spanList">{project.projectName}</span>
              </NewPTag>
            </div>
          </div>
        </CardHeader>

        <CardBody className="flex flex-col justify-center items-center">
          <Image
            className={`object-contain h-[208px] aspect-[401/208] sm:h-auto ${
              theme === "dark" ? "bg-white shadow-[0_0_8px_8px_inset_black]" : ""
            }`}
            fallbackSrc="/images/No_image_available.svg"
            alt={`image of the project ${project.projectName}`}
            radius="sm"
            src={
              project.screenshot !== ""
                ? project.screenshot
                : "/images/No_image_available.svg"
            }
          />
          {project.url !== "" && (
            <div className="flex justify-around gap-4 sm:py-4 ">
              <span
                className="hidden sm:flex sm:justify-end sm:items-center text-md cursor-pointer text-[#0F4FA4] dark:text-blue-500 underline md:hover:italic  "
                onClick={() => onOpen()}
              >
                Preview{" "}
                <MdOutlinePreview className="ml-1 text-2xl text-[#0F4FA4] dark:text-blue-500" />
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="open the website in a new tab"
                className="flex justify-end items-center text-md text-[#0F4FA4] dark:text-blue-500 underline md:hover:italic "
              >
                Website{" "}
                <ImNewTab className="ml-1 text-2xl text-[#0F4FA4] dark:text-blue-500" />
              </a>
            </div>
          )}
        </CardBody>

        <CardFooter className="flex-col md:flex-row md:items-start rounded-t-xl h-[40%] lg:h-[35%] lg:tracking-wider overflow-auto ">
          <div className="w-full h-full sm:px-2 lg:px-4 text-center text-[#4D4D4D] dark:text-white sm:text-start">
            {project.description !== "" && (
              <p className="text-xs sm:text-sm pb-2">
                <span className="text-sm sm:text-base text-black dark:text-orange-400">
                  Description :
                </span>
                <br /> {project.description}
              </p>
            )}
            {project.stack.front !== "" && (
              <p className="text-xs sm:text-sm pb-2">
                <span className="text-sm sm:text-base text-black dark:text-orange-400">
                  Front stack :
                </span>
                <br /> {project.stack.front}
              </p>
            )}
            {project.stack.back !== "" && (
              <p className="text-xs sm:text-sm pb-2">
                <span className="text-sm sm:text-base text-black dark:text-orange-400">
                  Back stack :
                </span>
                <br /> {project.stack.back}
              </p>
            )}
          </div>
          <div className="w-fit h-fit flex flex-row md:flex-col text-end p-1 lg:px-4 lg:p-0">
            <p className="text-sm sm:text-base whitespace-nowrap pr-4 md:pr-0 md:pb-2 md:text-center dark:text-orange-400">
              GitHub links
            </p>
            <p className="flex flex-row md:flex-col justify-end md:justify-center md:items-center">
              {project.src.map((stackObj) =>
                Object.values(stackObj).map(
                  (value) =>
                    value !== "" && (
                      <Link
                        isExternal
                        showAnchorIcon
                        href={value}
                        key={`${Object.keys(stackObj).find((el) => el)}_src`}
                        className=" text-sm text-[#0F4FA4] md:text-base md:hover:italic  px-2 md:px-0 md:pl-2 md:py-2 dark:text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {Object.keys(stackObj).find((el) => el)}
                      </Link>
                    )
                )
              )}
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

Sheet.propTypes = {
  project: PropTypes.shape({
    description: PropTypes.string,
    projectName: PropTypes.string,
    screenshot: PropTypes.string,
    src: PropTypes.arrayOf(PropTypes.shape({
      back: PropTypes.string,
      front: PropTypes.string
    })),
    stack: PropTypes.shape({
      back: PropTypes.string,
      front: PropTypes.string
    }),
    url: PropTypes.string
  })
}

export default Sheet;
