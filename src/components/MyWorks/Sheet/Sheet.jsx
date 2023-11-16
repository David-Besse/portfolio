import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import styled from "styled-components";

import WorksList from "../../../datas/WorksList";
import "./Sheet.scss";

const ListItem = styled.li`
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

const Sheet = ({ item }) => {
  const [projectSelected, setProjectSelected] = useState("");
  const tvRef = useRef()

  const handleProjectInformation = (projectName) => {
    setProjectSelected(projectName);

    gsap.timeline({ delay: 0.2 }).fromTo(
      tvRef.current,
      { display: "none", opacity: 0 },
      {
        display: "flex",
        opacity: 1,
        duration: 0.8,
        ease: "ease-in-out",
      }
    );
  };

  return (
    <>
      <Card className="max-w-[400px] text-lg">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <div
              key={`div_${item.projectName}`}
              className="div_listItem relative flex justify-center text-2xl"
            >
              <ListItem
                className="listItem w-fit ml-2 mr-2 sm:mb-4 cursor-pointer"
                text={item.projectName}
                onClick={() => handleProjectInformation(item.projectName)}
              >
                <span className="spanList">{item.projectName}</span>
              </ListItem>
            </div>
            <p className="text-small text-default-500"> Click on the name to see project in live preview</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>
      {projectSelected !== "" && (
          <div
            className="w-full h-[88%] sm:w-3/4 sm:h-full hidden justify-center sm:pt-14 pb-20 items-start sm:items-center z-10"
            ref={tvRef}
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
        )}
    </>
  );
};

Sheet.propTypes = {
  item: PropTypes.shape({
    projectName: PropTypes.any,
  }),
};

export default Sheet;
