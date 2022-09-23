import { Box } from '@chakra-ui/layout'
import { ChatState } from "../context/chatpro";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/Mychats";
import SideDrawer from "../components/miscellan/SideDrawer";
import { useState } from "react";


const Chatpa = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
     const { user } = ChatState();
  
    return( 
        <div style={{ width: "100%" }}>
         { user &&  <SideDrawer/>} 
        <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        </Box>
      </div>
    );
};

export default Chatpa;