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

  return (
    <>
      <ModalPreview project={project} isOpen={isOpen} onClose={onClose} />
      <Card className="h-full w-full left-1/2 transform -translate-x-1/2 rounded bg-transparent shadow-none">
        <CardHeader className="flex flex-col p-0 pt-[4vh]">
          <div className="flex flex-col w-full justify-center items-center">
            <div
              key={`div_${project.projectName}`}
              className="div_listItem w-fit relative flex justify-center text-4xl sm:text-5xl lg:text-6xl border-y-1 border-black"
            >
              <NewPTag className="listItem w-fit" $text={project.projectName}>
                <span className="spanList">{project.projectName}</span>
              </NewPTag>
            </div>
          </div>
        </CardHeader>

        <CardBody className="flex flex-col justify-center items-center">
          <Image
            className="object-contain w-auto h-[25vh]"
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
                className="hidden sm:flex sm:justify-end sm:items-center text-md cursor-pointer text-[#137af0] md:hover:italic md:hover:font-bold md:hover:scale-110"
                onClick={() => onOpen()}
              >
                Preview{" "}
                <MdOutlinePreview className="ml-1 text-2xl text-[#137af0]" />
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="open the website in a new tab"
                className="flex justify-end items-center text-md text-[#137af0] md:hover:italic md:hover:font-bold md:hover:scale-110"
              >
                Website <ImNewTab className="ml-1 text-2xl text-[#137af0]" />
              </a>
            </div>
          )}
        </CardBody>

        <CardFooter className="flex-col md:flex-row md:items-start rounded-t-xl h-[40%] lg:h-[30%]">
          <div className="w-full h-full sm:px-2 lg:px-[4vw] text-center sm:text-start">
            {project.description !== "" && (
              <p className="text-xs sm:text-base text-default-500 pb-2">
                <span className="text-sm sm:text-lg text-black">
                  Description:
                </span>
                <br /> {project.description}
              </p>
            )}
            {project.stack.front !== "" && (
              <p className="text-xs sm:text-base text-default-500 pb-2">
                <span className="text-sm sm:text-lg text-black">
                  Front stack
                </span>
                <br /> {project.stack.front}
              </p>
            )}
            {project.stack.back !== "" && (
              <p className="text-xs sm:text-base text-default-500 pb-2">
                <span className="text-sm sm:text-lg text-black">
                  Back stack
                </span>
                <br /> {project.stack.back}
              </p>
            )}
          </div>
          <div className="w-fit h-fit flex flex-row md:flex-col text-end p-1 border-2 border-[#eaa470] rounded-xl">
            <p className="text-sm md:text-base whitespace-nowrap pr-4 md:pr-0 md:pb-2 md:text-center">
              GitHub links :
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
                        className=" text-sm md:text-base md:hover:italic md:hover:font-bold md:hover:scale-110 px-2 md:px-0 md:pl-2 md:py-2"
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
    src: PropTypes.arrayOf(
      PropTypes.shape({
        back: PropTypes.string,
        front: PropTypes.string,
      })
    ),
    stack: PropTypes.shape({
      back: PropTypes.string,
      front: PropTypes.string,
    }),
    url: PropTypes.string,
  }),
};

export default Sheet;
