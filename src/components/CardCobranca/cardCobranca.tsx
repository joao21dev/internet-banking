import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CardCobranca = (props: any) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-around"
      p={6}
      boxShadow="lg"
      bg="white"
      w="309px"
      h="144px"
      borderRadius="15px"
    >
      <Stack spacing={3}>
        {" "}
        <Flex>
          <Box>
            <Text fontWeight={600} fontSize="18px">
              {props.title}
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box>
            <Text fontWeight="bold" color={props.color} fontSize="22px">
              {props.subTitle}
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default CardCobranca;
