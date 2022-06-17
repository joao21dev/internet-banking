import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ListDepositos from "../../components/ListDepositos/listDepositos";
import NovoDeposito from "../../components/NovoDeposito/novoDeposito";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

const Depositos = () => {
  const [novoDeposito, setNovoDeposito] = useState(false);
  if (novoDeposito) {
    return <NovoDeposito />;
  }
  return (
    <SidebarWithHeader>
      <Flex justifyContent="flex-end">
        <Flex
          onClick={() => setNovoDeposito(!novoDeposito)}
          color="white"
          mt={4}
          mr={14}
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
          <Text>Novo Depósito</Text>
        </Flex>
      </Flex>
      <Box p={14}>
        <Box pl={28} boxShadow="lg" borderRadius="30px" bg="white">
          <ListDepositos />
        </Box>
      </Box>
    </SidebarWithHeader>
  );
};

export default Depositos;
