import React, { useState } from "react";
import * as Chakra from "@chakra-ui/react";

const techs: ITech[] = [
  { title: "React", field: "frontend" },
  { title: "Angular", field: "frontend" },
  { title: "Java", field: "backend" },
  { title: "Python", field: "backend" },
  { title: "Kotlin", field: "mobile" },
  { title: "R", field: "data" },
  { title: "Pandas", field: "data" },
  { title: "Figma", field: "design" },
  { title: "Illustrator", field: "design" },
  { title: "Miro", field: "management" },
];

interface ITech {
  title: string;
  field: string;
}

export const useTechs = (): ITech[] => {
  return techs;
};

export const PageSelectFilter = () => {
  const techs = useTechs();
  const categories = getCategories(techs);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory("");
      return;
    }
    setSelectedCategory(category);
  };

  const filteredTechs = getFilteredTechs(selectedCategory, techs);

  console.log(categories);

  return (
    <Chakra.VStack
      bg="gray.900"
      w="full"
      minH="100vh"
      justify="center"
      spacing="8"
    >
      <Chakra.HStack>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;

          return (
            <Chakra.Button
              colorScheme="cyan"
              variant={isActive ? "solid" : "outline"}
              key={cat}
              onClick={() => handleSelectCategory(cat)}
            >
              {cat}
            </Chakra.Button>
          );
        })}
      </Chakra.HStack>

      <Chakra.HStack>
        {filteredTechs.map((tech) => (
          <Chakra.Text
            bg="gray.800"
            p="2"
            color="white"
            borderRadius="4"
            key={tech.title}
          >
            {tech.title}
          </Chakra.Text>
        ))}
      </Chakra.HStack>
    </Chakra.VStack>
  );
};

export const getCategories = (techs: ITech[]): string[] => {
  let categories: string[] = [];
  for (let tech of techs) {
    const hasTech = categories.find(
      (existingTech) => existingTech === tech.field
    );

    if (!hasTech) {
      categories.push(tech.field);
    }
  }
  return categories;
};

export const getFilteredTechs = (
  selectedCategory: string,
  existingTechs: ITech[]
): ITech[] => {
  if (!selectedCategory) return existingTechs;
  return existingTechs.filter((tech) => tech.field === selectedCategory);
};
