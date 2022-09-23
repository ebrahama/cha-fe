import React from "react";
import {  Box,Container,Tab,TabList,TabPanel,TabPanels,Tabs,Text,} from "@chakra-ui/react"
import Login from "../components/authen/Login";
import Signup from "../components/authen/Signup";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Homepa = () => {

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);


    return( 
    <Container maxW='xl' mt="20" centerContent >
   
      <Box 
      bg="white"
      w="100%"
      p={4}
      borderRadius="lg"
      borderWidth="1px"
      >
     <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
         <Login/>
    </TabPanel>
    <TabPanel>
         <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
     </Container> 
    )
}

export default Homepa;