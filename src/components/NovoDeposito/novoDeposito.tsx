import { Box, Center, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import info from "../../assets/ICON_INFO.png";

const NovoDeposito = () => {
  return (
    <SidebarWithHeader>
      <Box p={14}>
        <Text pb={10} fontWeight={600} fontSize="22px">
          Novo boleto de depósito
        </Text>

        <Flex
          flexDir="column"
          justifyContent="space-around"
          p={6}
          boxShadow="lg"
          bg="white"
          w="845px"
          h="204px"
          borderRadius="15px"
        >
          <Stack spacing={3}>
            {" "}
            <Flex pt={4}>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Valor de depósito
              </Text>
              <Input w="300px" placeholder="R$ Valor" size="sm" />
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Data de Vencimento
              </Text>
              <Input w="150px" type="date" placeholder="Agência" size="sm" />
            </Flex>
          </Stack>
        </Flex>

        <Flex justifyContent="flex-end" pr="26.6%">
          <Box p={4}>
            <Center borderRadius="8px" w="300px" h="51px" bg="#F7F8FC">
              <Image src={info} />
              <Text fontWeight="light" fontSize="12px" mx={4}>
                O boleto poderá ser compensado em até três dias úteis.
              </Text>
            </Center>
          </Box>

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
            <Text>Gerar Boleto</Text>
          </Flex>
        </Flex>
      </Box>
    </SidebarWithHeader>
  );
};

export default NovoDeposito;
