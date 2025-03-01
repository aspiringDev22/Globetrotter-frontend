import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { ModalLayoutProps } from "./types/interface";

const ModalLayout: React.FC<ModalLayoutProps> = ({ isOpen, onClose, title, children, showFooter }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay />
      <ModalContent padding="15px 10px">
        <ModalHeader textAlign="center" color="headingColor">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding="15px 10px">{children}</ModalBody>
        {showFooter && (
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalLayout;
