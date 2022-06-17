import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import SidebarWithHeader from "../Sidebar/sidebar";

const NovaCobranca = () => {
  return (
    <SidebarWithHeader>
      <Box p={14}>
        <Text pb={10} fontWeight={600} fontSize="22px">
          Nova Cobrança
        </Text>
        <Text pb={2} fontWeight={600} fontSize="22px">
          Informações do Pagador
        </Text>

        <Flex
          flexDir="column"
          justifyContent="space-around"
          p={6}
          boxShadow="lg"
          bg="white"
          w="833px"
          h="560px"
          borderRadius="15px"
        >
          <Stack spacing={3}>
            {" "}
            <Flex pt={4}>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Nome/Razão Social
              </Text>
              <Input w="300px" size="sm" />
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                CPF/CNPJ
              </Text>
              <Input w="300px" placeholder="" size="sm" />
            </Flex>
            <Flex>
              <Text w="184px" fontWeight="semibold" fontSize="14px">
                CEP
              </Text>
              <InputGroup>
                <InputLeftElement
                pb={2}
                  pointerEvents="none"
                  children={<FiSearch color="gray.300" />}
                />
                <Input w="300px" placeholder="Pesquisar" size="sm" />
              </InputGroup>
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Rua/Avenida
              </Text>
              <Input w="300px" placeholder="" size="sm" />
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Número
              </Text>
              <Input w="300px" placeholder="" size="sm" />
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Bairro
              </Text>
              <Input w="300px" placeholder="" size="sm" />
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Cidade
              </Text>
              <Input w="300px" placeholder="" size="sm" />
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Estado
              </Text>
              <Input w="300px" placeholder="" size="sm" />
            </Flex>
            <Flex>
              <Text w="200px" fontWeight="semibold" fontSize="14px">
                E-mail para envio do boleto
              </Text>
              <Input w="300px" placeholder="" size="sm" />
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Valor a cobrar
              </Text>
              <Input w="300px" placeholder="R$ Valor" size="sm" />
            </Flex>
            <Flex>
              <Text w="150px" fontWeight="semibold" fontSize="14px">
                Data de Vencimento
              </Text>
              <Input w="150px" type="date" placeholder="" size="sm" />
            </Flex>
          </Stack>
        </Flex>
        <Flex justifyContent="flex-end" pr="27.5%">
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

export default NovaCobranca;
