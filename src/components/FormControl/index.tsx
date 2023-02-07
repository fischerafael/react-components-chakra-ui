import React from "react";
import * as Chakra from "@chakra-ui/react";

interface FormControlProps extends Chakra.FormControlProps {
  label: string;
  input: React.ReactNode;
  helper?: string;
}

export const FormControl = ({ label, helper, input }: FormControlProps) => {
  return (
    <Chakra.FormControl w="full" borderRadius="none">
      <Chakra.FormLabel w="full" fontSize="xs">
        {label}
      </Chakra.FormLabel>
      {input}
      <Chakra.FormHelperText w="full" fontSize="xs">
        {helper}
      </Chakra.FormHelperText>
    </Chakra.FormControl>
  );
};
