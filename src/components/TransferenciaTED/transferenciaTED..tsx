import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SidebarWithHeader from "../../components/Sidebar/sidebar";
import info from "../../assets/ICON_INFO.png";

const TransferenciaTED = () => {
  return (
    <SidebarWithHeader>
      <Box p={14}>
        <Text pb={10} fontWeight={600} fontSize="22px">
          Transferência para outros bancos - TED
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
              <Text w="180px" fontWeight="semibold" fontSize="14px">
                Nome do Favorecido
              </Text>
              <Input w="300px" placeholder="Nome" size="sm" />
            </Flex>
            <Flex>
              <Text w="180px" fontWeight="semibold" fontSize="14px">
                CPF/CNPJ do favorecido
              </Text>
              <Input w="300px" placeholder="CPF/CNPJ" size="sm" />
            </Flex>
            <Flex>
              <Text w="180px" fontWeight="semibold" fontSize="14px">
                Valor da Transferência?
              </Text>
              <Input w="300px" placeholder="R$ Valor" size="sm" />
            </Flex>
          </Stack>
        </Flex>

        <Text pt={8} pb={2} fontWeight={600} fontSize="22px">
          Dados Bancários:
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
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Banco
              </Text>
              <Input w="300px" placeholder="Banco" size="sm" />
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Agência (sem dígito)
              </Text>
              <Input w="300px" placeholder="Agência" size="sm" />
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Conta
              </Text>
              <Input w="300px" placeholder="Conta" size="sm" />
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Dígito
              </Text>
              <Input w="300px" placeholder="Conta" size="sm" />
            </Flex>
          </Stack>
        </Flex>

        <Flex justifyContent="flex-end" pr="26.6%">
          {" "}
          <Box p={4}>
            <Center borderRadius="8px" w="300px" h="51px" bg="#F7F8FC">
              <Image src={info} />
              <Text fontWeight="light" fontSize="12px" mx={4}>
                Transferências solicitadas para outros bancos são processadas em
                até 1 dia útil.{" "}
              </Text>
            </Center>
          </Box>
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
              href="/transferencias"
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
            <Text>Realizar Transferência</Text>
          </Flex>
        </Flex>
      </Box>
    </SidebarWithHeader>
  );
};

export default TransferenciaTED;
