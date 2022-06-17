import { Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import ChartLine from "../../components/ChatLine.tsx/chartLine";
import ListExtratos from "../../components/ListExtratos/listExtratos";
import ad from "../../assets/AD_HOME.png";
import SidebarWithHeader from "../../components/Sidebar/sidebar";

const Home = () => {
  return (
    <SidebarWithHeader>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={8}
        ml="50px"
        w="75vw"
        h="1200px"
        borderRadius="30px"
      >
        <GridItem
          boxShadow="lg"
          p={10}
          borderRadius="30px"
          bg="white"
          w="870px"
          h="370px"
        >
          <ChartLine />
        </GridItem>
        <GridItem boxShadow="lg" borderRadius="30px" bg="white" h="370px">
          <Image src={ad} borderRadius="5px" h="370px" objectFit="contain" />
        </GridItem>
        <GridItem
          pl={24}
          boxShadow="lg"
          borderRadius="30px"
          colSpan={2}
          bg="white"
        >
          <ListExtratos />
        </GridItem>
      </Grid>
    </SidebarWithHeader>
  );
};

export default Home;
