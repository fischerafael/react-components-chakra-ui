import React from "react";
import * as Chakra from "@chakra-ui/react";

export const PageCompoundInterestCalculator = () => {
  const [state, setState] = React.useState({
    initialInvestment: 0,
    interestRate: 0,
    periodInMonths: 0,
  });

  const total = handleCalculateInterest(
    state.initialInvestment,
    state.interestRate,
    state.periodInMonths
  );

  const earnings = total - state.initialInvestment;

  return (
    <Chakra.VStack w="full" h="100vh" justify="center" spacing="8">
      <Chakra.HStack w="full" maxW="container.md" spacing="8">
        <Chakra.Input
          value={state.initialInvestment}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              initialInvestment: Number(e.target.value),
            }))
          }
          type="number"
          placeholder="Valor Inicial"
        />
        <Chakra.Input
          value={state.interestRate}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              interestRate: Number(e.target.value),
            }))
          }
          type="number"
          placeholder="Taxa de Juros (%)"
        />
        <Chakra.Input
          value={state.periodInMonths}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              periodInMonths: Number(e.target.value),
            }))
          }
          type="number"
          placeholder="Prazo (meses)"
        />
      </Chakra.HStack>

      <Chakra.VStack w="full" align="center" spacing="8">
        <Chakra.Text>
          Total Ganho em Juros: {handleFormatValue(earnings)}
        </Chakra.Text>
        <Chakra.Text>Total: {handleFormatValue(total)} </Chakra.Text>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};

const handleCalculateInterest = (
  initialInvestment: number,
  interestRate: number,
  periodInMonths: number
): number => {
  const exp = (1 + interestRate / 100) ** periodInMonths;
  return initialInvestment * exp;
};

const handleFormatValue = (realCurrencyValue: number): string => {
  return `R$ ${realCurrencyValue.toFixed(2)}`;
};
