import  {React, createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


const chatcon = createContext();

const Chatpro = ({children})=>{
        const [selectedChat, setSelectedChat] = useState();
        const [user, setUser] = useState();
        const [notification, setNotification] = useState([]);
        const [chats, setChats] = useState();
        const history = useHistory();

    
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo){ history.push("/");}
  }, [history]);



return (
<chatcon.Provider
     value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}>{children}</chatcon.Provider>
)
}
export const ChatState = () => {
    return useContext(chatcon);
  };

export default Chatpro;