import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChakraProvider, theme } from "@chakra-ui/react";

import Home from "./pages/Home/home";
import Settings from "./pages/Settings/settings";
import Transferencia from "./pages/Transferencia/transferencia";
import TransferenciaP2P from "./components/TransferenciaP2P/transferenciaP2P";
import Pix from "./pages/Pix/pix";
import Deposito from "./pages/Deposito/deposito";
import NovoDeposito from "./components/NovoDeposito/novoDeposito";
import Cobranca from "./pages/Cobranca/cobranca";
import Pagamento from "./pages/Pagamento/pagamento";
import TransferenciaPIX from "./components/TransferenciaPIX/transferenciaPix";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transferencias" element={<Transferencia />} />
        <Route path="/transferenciaS/p2p" element={<TransferenciaP2P />} />
        <Route path="/transferenciaS/ted" element={<TransferenciaPIX />} />
        <Route path="/pix/realizar-pix" element={<TransferenciaPIX />} />
        <Route path="/pix" element={<Pix />} />
        <Route path="/deposito" element={<Deposito />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/cobranca" element={<Cobranca />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
