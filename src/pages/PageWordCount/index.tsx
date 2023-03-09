import React from "react";
import * as Chakra from "@chakra-ui/react";

interface IRankItem {
  word: string;
  count: number;
}

class Rank {
  execute(text: string): IRankItem[] {
    let rank: IRankItem[] = [];

    const wordsArray = text.split(" ");
    const wordsArraySanitized = wordsArray.filter((word) => word !== "");
    const wordsWithoutCommas = wordsArraySanitized.map((word) =>
      word.replace(",", "")
    );
    const wordsWithoutPeriods = wordsWithoutCommas.map((word) =>
      word.replace(".", "")
    );
    const wordsWithout = wordsWithoutPeriods.filter((word) => word !== "-");
    const wordsToLowerCase = wordsWithout.map((word) => word.toLowerCase());

    for (let currentWord of wordsToLowerCase) {
      const isWordInRank = rank.find((wrd) => wrd.word === currentWord);

      if (isWordInRank?.word) {
        const updatedRank = rank.map((item) => {
          if (item.word === currentWord) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        rank = updatedRank;
      } else {
        rank.push({
          count: 1,
          word: currentWord,
        });
      }
    }
    return rank;
  }
}

export const PageWordCount = () => {
  const [text, setText] = React.useState("");

  const rank = new Rank();

  const rankings: IRankItem[] = rank
    .execute(text)
    .sort((a, b) => b.count - a.count);

  console.log("current text - ", text);
  console.log("results - ", rankings);

  return (
    <Chakra.VStack w="full" minH="100vh" bg="gray.900" py="8">
      <Chakra.VStack w="full" maxW="container.md">
        <Chakra.Textarea
          w="full"
          placeholder="Paste Your Text Here"
          value={text}
          color="white"
          onChange={(e) => setText(e.target.value)}
        />

        <Chakra.VStack w="full">
          {rankings.map((word, index) => (
            <Chakra.HStack
              key={word.word}
              w="full"
              justify="space-between"
              bg="gray.800"
              color="white"
              px="8"
              py="2"
            >
              <Chakra.Text>
                <Chakra.Text as="span" color="cyan.500">
                  {index + 1}
                </Chakra.Text>

                {`  ${word.word}`}
              </Chakra.Text>
              <Chakra.Text>{word.count}</Chakra.Text>
            </Chakra.HStack>
          ))}
        </Chakra.VStack>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
