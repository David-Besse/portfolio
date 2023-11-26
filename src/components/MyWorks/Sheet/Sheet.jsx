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
    content: "${({ text }) => text}";
  }

  span::before,
  span::after {
    content: "${({ text }) => text}";
  }
`;

const Sheet = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ModalPreview project={project} isOpen={isOpen} onClose={onClose} />
      <Card className="h-full w-[90%] sm:w-full lg:h-[90%] rounded-none">
        <CardHeader className="flex flex-col">
          <div className="flex flex-col w-full">
            <div
              key={`div_${project.projectName}`}
              className="div_listItem w-full relative flex justify-center text-2xl"
            >
              <NewPTag className="listItem w-fit" text={project.projectName}>
                <span className="spanList">{project.projectName}</span>
              </NewPTag>
            </div>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Image
            alt="nextui logo"
            height={"100%"}
            radius="sm"
            src={project.screenshot}
            width={"100%"}
            className="pb-4"
          />
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
        </CardBody>
        <Divider />
        <CardFooter className="flex-col gap-2">
          <p className="text-sm">GitHub links</p>
          <p className="w-full flex justify-around">
            {project.src.front !== "" && (
              <Link
                isExternal
                showAnchorIcon
                href={project.src.front}
                key={project.src.front}
                className="text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                front
              </Link>
            )}
            {project.src.back !== "" && (
              <Link
                isExternal
                showAnchorIcon
                href={project.src.back}
                key={project.src.back}
                className="text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                back
              </Link>
            )}
          </p>
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
