import React, { ReactNode, useState } from "react";
import saldo from "../../assets/SALDO_CENSORED.png";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  InputLeftElement,
  Input,
  Stack,
  InputGroup,
  Center,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiBox,
  FiUser,
  FiClipboard,
  FiBriefcase,
  FiMenu,
  FiChevronDown,
  FiDisc,
  FiMessageCircle,
  FiSearch,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { AiFillEye } from "react-icons/ai";

interface LinkItemProps {
  name: string;
  icon: IconType;
  routh: string;
}

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="14" alignItems="center" mx="8">
        <FiDisc />
        <Text ml="15px" fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Sua Marca
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} routh={link.routh}>
          {link.name}
        </NavItem>
      ))}
      <Center mt={10} mb={5}>
        <Box p={5} w="196px" h="120px" borderRadius="10px" background="#f7f8fc">
          <Text fontSize="10px" mb={4} fontWeight={400}>
            Dados para Depósito
          </Text>
          <Text fontSize="9px" fontWeight={300}>
            CPF: 123.123.456.89
          </Text>
          <Text fontSize="9px" fontWeight={300}>
            Agência: 0001
          </Text>
          <Text fontSize="9px" fontWeight={300}>
            Conta: 123456-7
          </Text>
          <Text fontSize="9px" fontWeight={300}>
            Banco: Acesso Bank - 332
          </Text>
        </Box>
      </Center>
      <Center>
        <Box p={5} w="196px" h="140px" borderRadius="10px" background="#f7f8fc">
          <Text fontSize="10px" mb={4} fontWeight={400}>
            Hiperbanco
          </Text>
          <Text fontSize="9px" fontWeight={300}>
            CNPJ: 32.895.677/0001 - 21
          </Text>
          <Text fontSize="9px" fontWeight={300}>
            atendimento@hiperbanco.com.br
          </Text>
          <Text fontSize="9px" fontWeight={300}>
            0800 000 00 00
          </Text>
          <Text fontSize="9px" fontWeight={300}>
            Rua mundo 121 - Parque Tecnológico da Bahia
          </Text>
          <Text fontSize="9px" fontWeight={300}>
            Salvador - Bahia
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  routh: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, routh: "/home" },
  { name: "Transferência", icon: FiUser, routh: "/transferencias" },
  { name: "Pix", icon: FiUser, routh: "/pix" },
  { name: "Depósito", icon: FiClipboard, routh: "/deposito" },
  { name: "Cobrança", icon: FiBriefcase, routh: "/cobranca" },
  { name: "Pagamento", icon: FiMessageCircle, routh: "/pagamento" },
  { name: "Fale Conosco", icon: FiMessageCircle, routh: "/agencias" },
];

const NavItem = ({ icon, children, routh, ...rest }: NavItemProps) => {
  return (
    <Link
      href={routh}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="2"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#5A32EA",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const [showBalance, setShowBalance] = useState(false);
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        justifyContent={{ base: "space-between" }}
        {...rest}
      >
        <Flex>
          <Box>
            <Text fontWeight="bold" m="15">
              Olá, Carlos Ivan
            </Text>
          </Box>
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <HStack spacing={{ base: "0", md: "6" }}>
          <Flex>
            <HStack>
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                {showBalance ? (
                  <Text mr={2} fontWeight={600} fontSize="sm">
                    R$198,00
                  </Text>
                ) : (
                  <Box>
                    <Image w="70px" h="25px" src={saldo} />
                  </Box>
                )}

                <Text fontSize="xs" color="gray.600">
                  Saldo Disponível
                </Text>
              </VStack>
              <Box
                onClick={() => setShowBalance(!showBalance)}
                display={{ base: "none", md: "flex" }}
                cursor="pointer"
              >
                <AiFillEye color="#B5b5b5" fontSize="22px" />
              </Box>
            </HStack>
          </Flex>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Minha Conta</Text>
                    <Text fontSize="xs" color="gray.600">
                      Banco
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    _focus={{ boxShadow: "none" }}
                    href="/settings"
                  >
                    {" "}
                    Configrações
                  </Link>
                </MenuItem>
                <MenuItem>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
};
