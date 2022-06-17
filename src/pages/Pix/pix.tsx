import { Box, Center, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import ListTransferencias from "../../components/ListTransferencias/listTransferencias";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import { CustomTable } from "../../components/Table/CustomTable";
import info from "../../assets/ICON_INFO.png";
import TransferenciaPIX from "../../components/TransferenciaPIX/transferenciaPix";
import ChavePIX from "../../components/ChavePIX/chavePIX";

const Pix = () => {
  const [renderPIX, setRenderPIX] = useState(false);
  const [renderChavePIX, setRenderChavePIX] = useState(false);

  if (renderPIX) {
    return <TransferenciaPIX />;
  } else if (renderChavePIX) {
    return <ChavePIX />;
  } else {
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
                  <Text>Transferência - PIX</Text>
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
                onClick={() => setRenderPIX(!renderPIX)}
              >
                <Text>Nova Transferência</Text>
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
                  <Text>Minhas Chaves </Text>
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
                onClick={() => setRenderChavePIX(!renderChavePIX)}
              >
                <Text>Nova Transferência</Text>
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
  }
};

export default Pix;
