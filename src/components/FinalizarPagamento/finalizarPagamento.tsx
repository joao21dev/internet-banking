import { Box, Center, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import info from "../../assets/ICON_INFO.png";

const FinalizarPagamento = () => {
  return (
    <SidebarWithHeader>
      <Box p={14}>
        <Text pb={10} fontWeight={600} fontSize="22px">
          Verifique se os dados estão corretos
        </Text>

        <Flex
          flexDir="column"
          justifyContent="space-around"
          p={6}
          boxShadow="lg"
          bg="white"
          w="845px"
          h="248px"
          borderRadius="15px"
        >
          <Stack spacing={3}>
            {" "}
            <Flex pt={4}>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Nome
              </Text>
            </Flex>
            <Flex pt={4}>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Código de Barras
              </Text>
            </Flex>
            <Flex pt={4}>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Valor
              </Text>
            </Flex>
            <Flex pt={4}>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Data de Vencimento
              </Text>
            </Flex>
          </Stack>
        </Flex>

        <Flex justifyContent="flex-end" pr="26.6%">
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
            <Text>Pagar </Text>
          </Flex>
        </Flex>
      </Box>
    </SidebarWithHeader>
  );
};

export default FinalizarPagamento;
