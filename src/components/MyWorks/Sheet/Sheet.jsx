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
import Draggable from "react-draggable";
import ModalPreview from "../ModalPreview/ModalPreview";

import "./Sheet.scss";
import { useRef } from "react";

const NewPTag = styled.p`
  &::before {
    content: "${({ text }) => text}";
  }

  span::before {
    content: "${({ text }) => text}";
  }

  &::after {
    content: "${({ text }) => text}";
  }

  span::after {
    content: "${({ text }) => text}";
  }
`;

const Sheet = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sheetRef = useRef(null);

  const handleModalPreview = () => {
    onOpen();
  };

  return (
    <>
      <Draggable nodeRef={sheetRef} bounds="body">
        <div ref={sheetRef} className="sheet">
          <Card className="w-[400px] h-[318px]">
            <CardHeader className="flex flex-col gap-3">
              {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              /> */}
              <div className="flex flex-col">
                <div
                  key={`div_${project.projectName}`}
                  className="div_listItem relative flex justify-center text-4xl"
                >
                  <NewPTag
                    className="listItem w-fit ml-2 mr-2 sm:mb-4 cursor-pointer"
                    text={project.projectName}
                    onClick={() => handleModalPreview()}
                  >
                    <span className="spanList">{project.projectName}</span>
                  </NewPTag>
                </div>
                <p className="text-small text-default-500">
                  {" "}
                  Click on the name to see project in live preview
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <ul className="text-base">{project.stack}</ul>
            </CardBody>
            <Divider />
            <CardFooter className="justify-between items-center">
              <p className="text-sm font-normal italic text-gray-600">
                Source code on GitHub
              </p>
              <p className="">
                {project.src.front !== "" && (
                  <Link
                    isExternal
                    showAnchorIcon
                    href={project.src.front}
                    key={project.src.front}
                    className=""
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
                    className="ms-2"
                  >
                    back
                  </Link>
                )}
              </p>
            </CardFooter>
          </Card>
        </div>
      </Draggable>
      <ModalPreview project={project} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

Sheet.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string,
    src: PropTypes.shape({
      front: PropTypes.string,
      back: PropTypes.string,
    }),
    stack: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Sheet;

{
  /* {projectSelected !== "" && (
          <div
            className="w-full h-[88%] sm:w-3/4 sm:h-full hidden justify-center sm:pt-14 pb-20 items-start sm:items-center z-10"
          >
            {projectSelected === WorksList[0].projectName && (
              <iframe
                title="Projet Art@home"
                src="https://www.webshappers.com"
                className="w-[90%] h-[100%] sm:h-[80%] border-8 rounded shadow-2xl"
              />
            )}
            {projectSelected === WorksList[1].projectName && (
              <div className="flex w-[90%] h-[95%] sm:h-[80%] text-4xl bg-transparent rounded shadow-2xl justify-center items-center">
                En cours de construction . . .
              </div>
            )}
          </div>
        )} */
}
