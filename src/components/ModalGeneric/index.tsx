import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  HStack,
} from "@chakra-ui/react";

type ModalGenericPropsSizes = "xs" | "sm" | "md" | "lg" | "xl" | "full";

interface ModalGenericProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  isCentered?: boolean;
  size?: ModalGenericPropsSizes;
}

export const ModalGeneric = ({
  header,
  footer,
  children,
  isOpen,
  isCentered = true,
  size = "md",

  onClose,
}: ModalGenericProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered={isCentered}
      size={size}
    >
      <ModalOverlay />
      <ModalContent borderRadius={""}>
        {header ? <ModalHeader w="full">{header}</ModalHeader> : null}
        <ModalCloseButton />
        <ModalBody py="4" w="full">
          {children}
        </ModalBody>
        {footer ? (
          <HStack w="full" as={ModalFooter}>
            {footer}
          </HStack>
        ) : null}
      </ModalContent>
    </Modal>
  );
};
