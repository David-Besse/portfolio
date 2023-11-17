import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
} from "@nextui-org/react";

const ModalPreview = ({ project, isOpen, onClose }) => {
  return (
    <Modal
      className="h-[85%] w-[90%] max-w-none"
      isOpen={isOpen}
      onClose={onClose}
      radius="2xl"
      backdrop="blur"
      placement="top-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="p-1 flex justify-center items-center">
              <p className="">
                {project.projectName} - Live from the website !
              </p>
            </ModalHeader>
            <ModalBody className="p-0">
              {project.url && (
                <iframe
                  className="h-full w-full"
                  title={project.projectName}
                  src={project.url}
                />
              )}
              {project.url === "" && (
                <p className="h-full w-full flex justify-center items-center text-2xl text-black">
                  Maintenance en cours ...
                </p>
              )}
            </ModalBody>
            <ModalFooter className="p-1">
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

ModalPreview.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  project: PropTypes.shape({
    projectName: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default ModalPreview;
