import { ModalGeneric } from "@/src/components/ModalGeneric";
import React from "react";
import * as Chakra from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export const PageModalGeneric = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>Open Modal</button>
      <ModalGeneric
        isOpen={isOpen}
        onClose={onClose}
        header={
          <Chakra.Text>
            Sit nulla est ex deserunt exercitation anim occaecat.
          </Chakra.Text>
        }
        footer={
          <Chakra.Text>
            Sit nulla est ex deserunt exercitation anim occaecat.
          </Chakra.Text>
        }
      >
        <Chakra.VStack w="full" align="flex-start">
          <Chakra.Text>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis.
          </Chakra.Text>
        </Chakra.VStack>
      </ModalGeneric>
    </>
  );
};
