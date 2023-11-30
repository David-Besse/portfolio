import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
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
      <Card className="h-fit w-full lg:w-[95%] left-1/2 transform -translate-x-1/2 rounded bg-transparent shadow-none">
        <CardHeader className="flex flex-col h-fit p-0 pt-3">
          <div className="flex flex-col w-full justify-center items-center">
            <div
              key={`div_${project.projectName}`}
              className="div_listItem w-fit relative flex justify-center text-4xl lg:text-6xl border-y-1 border-black"
            >
              <NewPTag className="listItem w-fit" $text={project.projectName}>
                <span className="spanList">{project.projectName}</span>
              </NewPTag>
            </div>
          </div>
        </CardHeader>
        {/* <Divider /> */}
        <CardBody className="flex flex-col justify-center items-center p-0">
          <Image
            fallbackSrc="/No_image_available.svg"
            alt={`image of the project ${project.projectName}`}
            radius="sm"
            src={
              project.screenshot !== ""
                ? project.screenshot
                : "/No_image_available.svg"
            }
            className={`object-contain w-auto h-[35vh]`}
          />
          {project.url !== "" && (
            <div className="flex justify-around gap-4 pb-2 sm:py-4">
              <span
                className="hidden sm:flex sm:justify-end sm:items-center text-md text-default-500 cursor-pointer"
                onClick={() => onOpen()}
              >
                Preview <MdOutlinePreview className="ml-1 text-2xl" />
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="open the website in a new tab"
                className="flex justify-end items-center text-md text-default-500"
              >
                Website <ImNewTab className="ml-1 text-2xl" />
              </a>
            </div>
          )}
        </CardBody>
        {/* <Divider /> */}
        <CardFooter className="flex-col md:flex-row gap-2 md:gap-0 h-fit rounded-t-xl py-0">
          <div className="w-full h-fit py-2 text-start">
            {project.stack.front !== "" && (
              <p
                aria-label="front technologies used in the project"
                className="text-xs lg:text-md text-default-500 pb-2"
              >
                <span className="text-sm lg:text-lg text-black">
                  Front stack
                </span>
                <br /> {project.stack.front}
              </p>
            )}
            {project.stack.back !== "" && (
              <p
                aria-label="back technologies used in the project"
                className="text-xs lg:text-md text-default-500"
              >
                <span className="text-sm lg:text-lg text-black">
                  Back stack
                </span>
                <br /> {project.stack.back}
              </p>
            )}
          </div>

          <div className="w-fit h-fit flex flex-row md:flex-col text-end p-1 border-1 rounded-xl bg-gradient-to-b from-amber-100 to-sky-200">
            <p className="text-sm md:text-md whitespace-nowrap pr-4 md:pr-0 md:pb-2 md:text-center">
              GitHub links :
            </p>
            <p className="flex flex-row md:flex-col justify-end md:justify-center md:items-center">
              {project.src.map(( stackObj  ) => 
                Object.values(stackObj).map(( value ) => 
                value !== "" && (
                <Link
                  isExternal
                  showAnchorIcon
                  href={value}
                  key={`${Object.keys(stackObj).find((el)=> el)}_src`}
                  className=" text-sm md:text-md md:hover:italic md:hover:font-bold md:hover:scale-110 px-2 md:px-0 md:pl-2 md:py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Object.keys(stackObj).find((el)=> el)}
                </Link>
              )))}
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

Sheet.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string,
    stack: PropTypes.shape({
      back: PropTypes.string,
      front: PropTypes.string,
    }),
    url: PropTypes.string,
    src: PropTypes.arrayOf(
      PropTypes.shape({
        back: PropTypes.string,
        front: PropTypes.string,
      })
    ),
    screenshot: PropTypes.string,
  }),
};

export default Sheet;
