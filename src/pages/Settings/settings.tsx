import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import InfoAccountForm from "../../components/InfoAccountForm/infoAccountForm";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

const Settings = () => {
  const [form, setForm] = useState(false);

  const handleForm = () => {
    setForm(!form);
  };
  return (
    <SidebarWithHeader>
      <Box p={14}>
        <Text pb={10} fontWeight={600} fontSize="22px">
          Informações da Conta
        </Text>
        <Text pb={2} fontWeight={600} fontSize="22px">
          Visualize e gerencie as informações da sua conta
        </Text>

        <Flex
          flexDir="column"
          justifyContent="space-around"
          p={6}
          boxShadow="lg"
          bg="white"
          w="833px"
          h="238px"
          borderRadius="15px"
        >
          {form ? (
            <InfoAccountForm />
          ) : (
            <>
              <Flex>
                <Text pt={4} w="90%" fontWeight="semibold" fontSize="14px">
                  Nome
                </Text>
                <Button
                mr={10}
                  bg="#F29339"
                  colorScheme="#F29339"
                  color="white"
                  fontSize="12px"
                  fontWeight="semibold"
                  onClick={handleForm}
                  rightIcon={<FiEdit2 />}
                >
                  Edtar
                </Button>
              </Flex>

              <Text fontWeight="semibold" fontSize="14px">
                CPF/CNPJ
              </Text>
              <Text fontWeight="semibold" fontSize="14px">
                E-mail
              </Text>
              <Text fontWeight="semibold" fontSize="14px">
                Telefone
              </Text>
            </>
          )}
        </Flex>
        <Text pt={10} pb={2} fontWeight={600} fontSize="22px">
          Dados Bancários
        </Text>
        <Flex
          flexDir="column"
          justifyContent="space-around"
          p={6}
          boxShadow="lg"
          bg="white"
          w="833px"
          h="176px"
          borderRadius="15px"
        >
          <Text fontWeight={600} fontSize="14px">
            Banco
          </Text>
          <Text fontWeight={600} fontSize="14px">
            Agência
          </Text>
          <Text fontWeight={600} fontSize="14px">
            Conta Corrente
          </Text>
        </Flex>
        <Text pt={10} fontWeight={600} fontSize="22px">
          Termos e Condições
        </Text>
        <Text pb={6} fontWeight="light" fontSize="12px">
          Baixe os termos e condições em PDF
        </Text>
        <Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            bg="white"
            w="164px"
            h="49px"
            boxShadow="lg"
            borderRadius="15px"
            mx={4}
            _hover={{
              bg: "#5A32EA",
              color: "white",
            }}
            cursor="pointer"
          >
            <Text fontWeight={500} fontSize="14px">
              Termos de uso
            </Text>
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            w="203px"
            bg="white"
            h="49px"
            boxShadow="lg"
            borderRadius="15px"
            _hover={{
              bg: "#5A32EA",
              color: "white",
            }}
            cursor="pointer"
          >
            <Text fontWeight={500} fontSize="14px">
              Política de Privacidade
            </Text>
          </Flex>
        </Flex>
        <Text pt={10} fontWeight={600} fontSize="22px">
          Controle de Conta
        </Text>
        <Text pb={6} fontWeight="light" fontSize="12px">
          Ações referentes à sua conta
        </Text>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="221px"
          bg="white"
          h="49px"
          boxShadow="lg"
          borderRadius="15px"
          ml={4}
          _hover={{
            bg: "#5A32EA",
            color: "white",
          }}
          cursor="pointer"
        >
          <Text fontWeight={500} fontSize="14px">
            Solicitar Cancelamento
          </Text>
        </Flex>
      </Box>
    </SidebarWithHeader>
  );
};

export default Settings;
