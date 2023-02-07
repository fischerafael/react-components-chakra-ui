import * as Chakra from "@chakra-ui/react";

interface IOption {
  value: string;
  label: string;
}

interface SelectProps extends Chakra.SelectProps {
  options: IOption[];
}

export const Select = ({ options, ...props }: SelectProps) => {
  return (
    <Chakra.Select {...props}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Chakra.Select>
  );
};
