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
      <Card className="h-full w-full lg:w-[95%] left-1/2 transform -translate-x-1/2 rounded bg-transparent shadow-none">
        <CardHeader className="flex flex-col h-fit">
          <div className="flex flex-col w-full">
            <div
              key={`div_${project.projectName}`}
              className="div_listItem w-full relative flex justify-center text-4xl lg:text-6xl"
            >
              <NewPTag className="listItem w-fit" $text={project.projectName}>
                <span className="spanList">{project.projectName}</span>
              </NewPTag>
            </div>
          </div>
        </CardHeader>
        {/* <Divider /> */}
        <CardBody className="h-fit">
          <Image
            fallbackSrc="/No_image_available.svg"
            alt={`image of the project ${project.projectName}`}
            radius="sm"
            src={project.screenshot !== "" ? project.screenshot : "/No_image_available.svg"}
            className={`h-full border-1 border-black`}
          />
          {project.url !== "" && (
            <div className="flex justify-around gap-2 py-2">
              <span
                className="hidden sm:flex sm:justify-end sm:items-center text-small text-default-500 cursor-pointer"
                onClick={() => onOpen()}
              >
                <MdOutlinePreview className="text-2xl" /> Preview
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="open the website in a new tab"
                className="flex justify-end items-center text-small text-default-500"
              >
                <ImNewTab className="text-2xl" /> Website
              </a>
            </div>
          )}
        </CardBody>
        <Divider />
        <CardFooter className="flex-col lg:flex-row gap-2 h-fit overflow-y-auto">
          <div className="w-full h-fit">
            {project.stack.front !== "" && (
              <p
                aria-label="front technologies used in the project"
                className="text-sm text-default-500"
              >
                <span className="text-base text-black">Front stack :</span>
                <br /> {project.stack.front}
              </p>
            )}
            {project.stack.back !== "" && (
              <p
                aria-label="back technologies used in the project"
                className="text-sm text-default-500"
              >
                <span className="text-base text-black">Back stack :</span>
                <br /> {project.stack.back}
              </p>
            )}
          </div>
          <div className="w-full h-fit flex flex-row justify-between text-end p-1 border-4 rounded-xl bg-slate-100">
            <p className="text-md h-full whitespace-nowrap">GitHub links :</p>
            <p className="w-full h-full flex flex-row justify-end">
              {project.src.front !== "" && (
                <Link
                  isExternal
                  showAnchorIcon
                  href={project.src.front}
                  key={project.src.front}
                  className="pr-1 text-base hover:scale-105 hover:text-[#e79568]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  front
                </Link>
              )}
              {project.src.front === "" && " no source"}/
              {project.src.back !== "" && (
                <Link
                  isExternal
                  showAnchorIcon
                  href={project.src.back}
                  key={project.src.back}
                  className="pl-2 text-base hover:scale-105 hover:text-[#e79568]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  back
                </Link>
              )}
              {project.src.back === "" && " no source"}
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
    src: PropTypes.shape({
      back: PropTypes.string,
      front: PropTypes.string,
    }),
    screenshot: PropTypes.string,
  }),
};

export default Sheet;
