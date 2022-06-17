import { Box, Center, Flex, Image, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import info from "../../assets/ICON_INFO.png";
import FinalizarPagamento from "../../components/FinalizarPagamento/finalizarPagamento";

const Pagamento = () => {
  const [finalizarPagamento, setFinalizarPagamento] = useState(false);

  if (finalizarPagamento) {
    return <FinalizarPagamento />;
  }
  return (
    <SidebarWithHeader>
      <Box p={14}>
        <Text pb={10} fontWeight={600} fontSize="22px">
          Realizar Pagamento de Boleto
        </Text>

        <Flex
          flexDir="column"
          justifyContent="space-around"
          p={6}
          boxShadow="lg"
          bg="white"
          w="845px"
          h="117px"
          borderRadius="15px"
        >
          <Stack spacing={3}>
            {" "}
            <Flex pt={4}>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Código de Barras
              </Text>
              <Input
                w="600px"
                placeholder="Linha digitável do boleto"
                size="sm"
              />
            </Flex>
          </Stack>
        </Flex>

        <Flex justifyContent="flex-end" pr="26.6%">
          <Flex
            onClick={() => setFinalizarPagamento(!finalizarPagamento)}
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
            <Text>Continuar</Text>
          </Flex>
        </Flex>
      </Box>
    </SidebarWithHeader>
  );
};

export default Pagamento;
