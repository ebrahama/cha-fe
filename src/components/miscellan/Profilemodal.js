import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
      
        <ModalOverlay />
        <ModalContent h="410px">
    
          <ModalHeader
            fontSize="50px"
            fontFamily="Work sans"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >    <Image
              borderRadius="full"
              boxSize="100px"
              src={user.pic}
              alt={user.name}
            />
           {user.name}
          </ModalHeader>
 
          <ModalCloseButton />

          
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            // justifyContent="space-between"
          >
            <Text
              fontSize={{ base: "25px", md: "20px" }}
            >
              Email: {user.email}
            </Text>
            <Text
              fontSize={{ base: "25px", md: "20px" }}
            >
              user id: {user._id}
            </Text>
          </ModalBody>

          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;