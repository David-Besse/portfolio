import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
} from "@nextui-org/react";

/**
 * Render a modal component that displays a project preview in live.
 *
 * @param {Object} project - The project object.
 * @param {boolean} isOpen - Indicates whether the modal is open or not.
 * @param {function} onClose - The function to close the modal.
 * @return {JSX.Element} The modal preview component.
 */
const ModalPreview = ({ project, isOpen, onClose }) => {
  return (
    <Modal
      className="h-[90%] w-[90%] max-w-none"
      isOpen={isOpen}
      onClose={onClose}
      radius="2xl"
      backdrop="blur"
      placement="center"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="p-1 flex justify-center items-center">
              <p className="">
                 Preview in live of &quot;{project.projectName}&quot; project !
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
