import * as Chakra from "@chakra-ui/react";

interface InputProps extends Chakra.InputProps {}

export const Input = ({ ...props }: InputProps) => {
  return <Chakra.Input {...props} />;
};
