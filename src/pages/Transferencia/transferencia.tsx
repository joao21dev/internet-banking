import { Box, Center, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ListTransferencias from "../../components/ListTransferencias/listTransferencias";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table/CustomTable";
import TransferenciaP2P from "../../components/TransferenciaP2P/transferenciaP2P";
import TransferenciaTED from "../../components/TransferenciaTED/transferenciaTED.";
import info from "../../assets/ICON_INFO.png";

const Transferencia = () => {
  return (
    <SidebarWithHeader>
      <Box p={14}>
        <Flex>
          <Box>
            <Box
              mr={20}
              boxShadow="lg"
              borderRadius="15px"
              p={6}
              w="400px"
              h="160px"
              bg="white"
            >
              <Box>
                <Text>Transferências entre contas Hiperbanco - P2P</Text>
              </Box>
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
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                _focus={{ boxShadow: "none" }}
                href="/transferencias/p2p"
              >
                Nova Transferência
              </Link>
            </Flex>
          </Box>

          <Box>
            <Box
              boxShadow="lg"
              borderRadius="15px"
              p={6}
              w="400px"
              h="160px"
              bg="white"
            >
              <Box>
                <Text>Transferências para outros bancos - TED </Text>
              </Box>
              <Box p={4}>
                <Center borderRadius="8px" w="320" h="51px" bg="#F7F8FC">
                  <Image src={info} />
                  <Text fontWeight="light" fontSize="12px" mx={4}>
                    Transferências solicitadas para outros bancos são
                    processadas em até 1 dia útil.
                  </Text>
                </Center>
              </Box>
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
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                _focus={{ boxShadow: "none" }}
                href="/transferencias/ted"
              >
                Nova Transferência
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Box mt={20} pl={28} boxShadow="lg" borderRadius="30px" bg="white">
          {" "}
          <ListTransferencias />
        </Box>
      </Box>
    </SidebarWithHeader>
  );
};

export default Transferencia;
