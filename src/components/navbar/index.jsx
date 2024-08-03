import { useState } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import SearchBar from '../searchbar';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Flex as="nav" bg="white" p={4} align="center" justify="space-between" position="fixed" w="100%" zIndex="1000" px={10}>
      <RouterLink to="/">
        <Box fontSize="21px" fontWeight="extrabold" color="black" fontFamily="Lato">
          MovieStreamer
        </Box>
      </RouterLink>
      <Flex align="center" gap={8} fontFamily="Segoe UI" fontSize="20px" fontWeight="400">
        <Box>Movies</Box>
        <Box>Series</Box>
        <Box>Contact</Box>
        <Box>About Us</Box>
      </Flex>
      <Flex align="center" gap={4}>
        <SearchBar />
        <Button 
          onClick={openModal} 
          width="85px" 
          height="44px" 
          fontFamily="Lato" 
          fontSize="20px" 
          fontWeight="400" 
          lineHeight="24px" 
          textAlign="left"
          border="1px solid black"
          bg="white"
          color="black"
          borderRadius="10px"
          _hover={{ bg: 'gray.100' }}
        >
          Sign up
        </Button>
      </Flex>
      <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="md" p={6} boxShadow="lg" maxWidth="600px" backgroundColor="#fff">
          <ModalHeader textAlign="center" fontSize="lg" fontWeight="bold" color="#000">
            Sign in to MovieStreamer
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" flexDirection="column" gap={4}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder="" borderRadius="md" bg="#f7f7f7" _placeholder={{ color: "#bfbfbf" }} />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input placeholder="" borderRadius="md" bg="#f7f7f7" _placeholder={{ color: "#bfbfbf" }} />
              </FormControl>
              <FormControl>
                <FormLabel>Number</FormLabel>
                <Input placeholder="" borderRadius="md" bg="#f7f7f7" _placeholder={{ color: "#bfbfbf" }} />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input placeholder="" borderRadius="md" bg="#f7f7f7" _placeholder={{ color: "#bfbfbf" }} />
              </FormControl>
              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input placeholder="" borderRadius="md" bg="#f7f7f7" _placeholder={{ color: "#bfbfbf" }} />
              </FormControl>
              <Button width="full" maxWidth="150px" colorScheme="gray" bg="#d9d9d9" borderRadius="md" color="black" mt={4} alignSelf="center" height="40px">
                Sign In
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default Navbar;
