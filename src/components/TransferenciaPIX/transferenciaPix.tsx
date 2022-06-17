import { Box, Flex, Input, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../Sidebar/sidebar";

const TransferenciaPIX = () => {
  return (
    <SidebarWithHeader>
      <Box p={14}>
        <Text pb={10} fontWeight={600} fontSize="22px">
          Transferência - PIX
        </Text>
        <Text pb={2} fontWeight={600} fontSize="22px">
          Transferir para:
        </Text>

        <Flex
          flexDir="column"
          justifyContent="space-around"
          p={6}
          boxShadow="lg"
          bg="white"
          w="833px"
          h="242px"
          borderRadius="15px"
        >
          <Stack spacing={3}>
            {" "}
            <Flex pt={4}>
              <Text w="200px" fontWeight="semibold" fontSize="14px">
                Tipo de Chave
              </Text>
              <Input w="300px" placeholder="Nome" size="sm" />
            </Flex>
            <Flex>
              <Text w="200px" fontWeight="semibold" fontSize="14px">
                Chave Pix
              </Text>
              <Input w="300px" placeholder="CPF/CNPJ" size="sm" />
            </Flex>
            <Flex>
              <Text w="200px" fontWeight="semibold" fontSize="14px">
                Valor da Transferência:
              </Text>
              <Input w="300px" placeholder="R$ Valor" size="sm" />
            </Flex>
          </Stack>
        </Flex>
        <Flex justifyContent="flex-end" pr="27.5%">
          <Flex
            color="#7f7f7f"
            m={4}
            alignItems="center"
            justifyContent="center"
            bg="#EDF2F7"
            w="164px"
            h="49px"
            cursor="pointer"
          >
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              _focus={{ boxShadow: "none" }}
              href="/pix"
            >
              Voltar
            </Link>
          </Flex>
          <Flex
            color="white"
            mt={4}
            alignItems="center"
            justifyContent="center"
            bg="#5A32EA"
            w="164px"
            h="49px"
            boxShadow="lg"
            borderRadius="15px"
            _hover={{
              opacity: "0.9",
            }}
            cursor="pointer"
          >
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              _focus={{ boxShadow: "none" }}
              href="/pix/realizar-pix"
            >
              Realizar Transferência
            </Link>
          </Flex>
        </Flex>
      </Box>
    </SidebarWithHeader>
  );
};

export default TransferenciaPIX;
