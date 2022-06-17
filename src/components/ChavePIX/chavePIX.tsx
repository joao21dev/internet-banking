import { Box, Flex, Input, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../Sidebar/sidebar";

const ChavePIX = () => {
  return (
    <SidebarWithHeader>
      <Box p={14}>
        <Text pb={10} fontWeight={600} fontSize="22px">
          Minhas Chaves - PIX
        </Text>

        <Flex
          my={4}
          flexDir="column"
          justifyContent="space-around"
          p={6}
          bg="white"
          w="327px"
          h="60px"
          borderRadius="15px"
          border="2px solid #D7D7D7"
        >
          <Text color="#6a6a6a" fontSize="12px">
            Chave de celular
          </Text>
          <Flex>
            <Text fontWeight="semibold" fontSize="14px">
              Chave:
            </Text>
            <Text m="3px" color="#6a6a6a" fontSize="12px">
              (71) 99252-5841
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          justifyContent="space-around"
          p={6}
          bg="white"
          w="327px"
          h="60px"
          borderRadius="15px"
          border="2px solid #D7D7D7"
        >
          <Text fontWeight="light" fontSize="12px">
            Chave de E-mail
          </Text>
          <Flex>
            <Text fontWeight="semibold" fontSize="14px">
              Chave:
            </Text>
            <Text m="3px" fontWeight="light" fontSize="12px">
              joao21dev@gmail.com
            </Text>
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          bg="white"
          w="164px"
          h="49px"
          boxShadow="lg"
          borderRadius="15px"
          my={10}
          _hover={{
            bg: "#5A32EA",
            color: "white",
          }}
          cursor="pointer"
        >
          <Link
            href="/pix"
            style={{ textDecoration: "none", color: "inherit" }}
            _focus={{ boxShadow: "none" }}
            fontWeight={500}
            fontSize="14px"
          >
            Voltar
          </Link>
        </Flex>
      </Box>
    </SidebarWithHeader>
  );
};

export default ChavePIX;
