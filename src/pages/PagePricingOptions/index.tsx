import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";

export const PagePricingOptions = () => {
  return (
    <Chakra.HStack
      w="full"
      justify="center"
      minH="100vh"
      align="center"
      bg="gray.50"
    >
      <PricingOptionContainer options={mockData.options} />
    </Chakra.HStack>
  );
};

export interface IAction {
  cta: string;
  href: string;
}

export interface IOption {
  id: string;
  name: string;
  price: string;
  discount?: number;
  description: string;
  featuresTitle: string;
  features: string[];
  action: IAction;
}

export interface IPricingOptionComponent {
  options: IOption[];
}

export const mockData: IPricingOptionComponent = {
  options: [
    {
      id: "1",
      name: "Free",
      price: "R$ 10",
      discount: 10,
      description: "per user/month, billed anually",
      featuresTitle: "For small teams",
      features: [
        "Real-time contact syncing",
        "Automatic data enrichment",
        "Up to 3 seats",
      ],
      action: {
        cta: "Get Started",
        href: "/",
      },
    },
    {
      id: "2",
      name: "Free",
      price: "R$ 10",
      discount: 10,
      description: "per user/month, billed anually",
      featuresTitle: "For small teams",
      features: [
        "Real-time contact syncing",
        "Automatic data enrichment",
        "Up to 3 seats",
      ],
      action: {
        cta: "Get Started",
        href: "/",
      },
    },
    {
      id: "3",
      name: "Free",
      price: "R$ 10",
      discount: 10,
      description: "per user/month, billed anually",
      featuresTitle: "For small teams",
      features: [
        "Real-time contact syncing",
        "Automatic data enrichment",
        "Up to 3 seats",
      ],
      action: {
        cta: "Get Started",
        href: "/",
      },
    },
    {
      id: "4",
      name: "Free",
      price: "R$ 10",
      discount: 10,
      description: "per user/month, billed anually",
      featuresTitle: "For small teams",
      features: [
        "Real-time contact syncing",
        "Automatic data enrichment",
        "Up to 3 seats",
      ],
      action: {
        cta: "Get Started",
        href: "/",
      },
    },
  ],
};

export const PricingOptionContainer = (props: IPricingOptionComponent) => {
  return (
    <Chakra.SimpleGrid columns={4} w="full" maxW="container.xl" gap="8">
      {props.options.map((opt) => (
        <Chakra.VStack
          key={opt.id}
          borderRadius="16"
          p="8"
          bg="white"
          border="1px"
          borderColor="gray.200"
          align="flex-start"
          spacing="8"
          fontFamily="sans-serif"
          role="group"
          _hover={{ bg: "blue.500   ", color: "white" }}
        >
          <Chakra.Text fontWeight="bold" fontSize="lg">
            {opt.name}
          </Chakra.Text>

          <Chakra.VStack w="full" align="flex-start" spacing="0">
            <Chakra.HStack align="flex-start">
              <Chakra.Text fontWeight="bold" fontSize="4xl">
                {opt.price}
              </Chakra.Text>
              {!!opt.discount && (
                <Chakra.Text
                  bg="gray.100"
                  borderRadius="4"
                  py="2px"
                  px="2"
                  fontSize="xs"
                  _groupHover={{ bg: "blue.300", color: "blue.500" }}
                >
                  -{opt.discount}%
                </Chakra.Text>
              )}
            </Chakra.HStack>

            <Chakra.Text
              fontSize="xs"
              color="gray.400"
              _groupHover={{ color: "white" }}
            >
              {opt.description}
            </Chakra.Text>
          </Chakra.VStack>

          <Chakra.VStack w="full" align="flex-start" spacing="2">
            <Chakra.Text fontSize="sm" fontWeight="semibold">
              {opt.featuresTitle}
            </Chakra.Text>
            <Chakra.VStack w="full" align="flex-start">
              {opt.features.map((feat) => (
                <Chakra.HStack w="full" justify="flex-start">
                  <Chakra.Icon
                    bg="gray.200"
                    color="gray.400"
                    borderRadius="4"
                    as={Icon.HiOutlineCheck}
                  />
                  <Chakra.Text fontWeight="semibold" fontSize="sm" key={feat}>
                    {feat}
                  </Chakra.Text>
                </Chakra.HStack>
              ))}
            </Chakra.VStack>
          </Chakra.VStack>

          <Chakra.Button size="lg" variant="outline" w="full" fontSize="sm">
            {opt.action.cta}
          </Chakra.Button>
        </Chakra.VStack>
      ))}
    </Chakra.SimpleGrid>
  );
};
