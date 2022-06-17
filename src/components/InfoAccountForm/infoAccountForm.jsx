import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiSave } from "react-icons/fi";

const InfoAccountForm = (props) => {
  return (
    <Stack spacing={3}>
      {" "}
      <Flex>
        <Center>
          <Flex pt={4}>
            <Text w="70px" fontWeight="semibold" fontSize="14px">
              Nome
            </Text>
            <Input w="300px" placeholder="Nome" size="sm" />
          </Flex>

          <Link href="/settings" ml="300px">
            <Button
              bg="green"
              color="white"
              fontSize="12px"
              fontWeight="semibold"
              colorScheme="green"
              rightIcon={<FiSave />}
              type="submit"
            >
              Salvar
            </Button>
          </Link>
        </Center>
      </Flex>
      <Flex>
        <Text w="70px" fontWeight="semibold" fontSize="14px">
          CPF/CNPJ
        </Text>
        <Input w="300px" placeholder="CPF/CNPJ" size="sm" />
      </Flex>
      <Flex>
        <Text w="70px" fontWeight="semibold" fontSize="14px">
          E-mail
        </Text>
        <Input w="300px" placeholder="E-mail" size="sm" />
      </Flex>
      <Flex>
        <Text w="70px" fontWeight="semibold" fontSize="14px">
          Telefone
        </Text>
        <Input w="300px" placeholder="Telefone" size="sm" />
      </Flex>
    </Stack>
  );
};

export default InfoAccountForm;
