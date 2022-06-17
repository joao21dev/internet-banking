import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CardCobranca from "../../components/CardCobranca/cardCobranca";
import ListCobrancas from "../../components/ListCobrancas/listCobranca";
import NovaCobranca from "../../components/NovaCobranca/novaCobranca";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

const Cobranca = () => {
  const [novaCobranca, setNovaCobranca] = useState(false);
  if (novaCobranca) {
    return <NovaCobranca />;
  }
  return (
    <SidebarWithHeader>
      <Box p={14}>
        <Flex justifyContent="space-around">
          <CardCobranca title="Pagos" subTitle="R$ 79,90" color="#0A793D" />
          <CardCobranca
            title="Atrasados"
            subTitle="R$ 159,60"
            color="#E71D36"
          />
          <CardCobranca title="Pendentes" subTitle="R$ 55,90" color="#F29339" />
        </Flex>
        <Flex justifyContent="flex-end">
          <Flex
            onClick={() => setNovaCobranca(!novaCobranca)}
            color="white"
            mt={20}
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
            <Text>Nova Cobrança</Text>
          </Flex>
        </Flex>
        <Box mt={20} pl={28} boxShadow="lg" borderRadius="30px" bg="white">
          <ListCobrancas />
        </Box>
      </Box>
    </SidebarWithHeader>
  );
};

export default Cobranca;
