import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

const TravelType = ({ image, label }: { image: string; label: string }) => (
  <VStack spacing="1.5rem">
    <Image alt={label} width="85px" height="85px" src={image} />
    <Text fontSize="1.5rem" lineHeight="2.25rem" fontWeight={600}>
      {label}
    </Text>
  </VStack>
);

const types = ["vida noturna", "praia", "moderno", "clássico", "e mais..."];
export const TravelTypes = () => {
  const [hideTravelTypesImages] = useMediaQuery("(max-width: 1200px)");

  return (
    <Flex
      my="5rem"
      px={{ sm: "3rem", md: "5rem", lg: "8.75rem" }}
      justify="space-between"
    >
      {hideTravelTypesImages ? (
        <Grid
          w="100%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap="1.75rem"
        >
          {types.map((text) => (
            <GridItem key={text} colSpan={1}>
              <HStack spacing="0.5rem">
                <Box w="8px" h="8px" bg="#FFBA08" borderRadius="4px" />
                <Text fontSize="1.125rem">{text}</Text>
              </HStack>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <>
          <TravelType image="/cocktail.png" label="vida noturna" />
          <TravelType image="/surf.png" label="praia" />
          <TravelType image="/building.png" label="moderno" />
          <TravelType image="/museum.png" label="clássico" />
          <TravelType image="/earth.png" label="e mais..." />
        </>
      )}
    </Flex>
  );
};
