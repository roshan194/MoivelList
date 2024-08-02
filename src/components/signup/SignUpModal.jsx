import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input, Button, Box, FormControl, FormLabel } from "@chakra-ui/react";

const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
  );
};

export default SignUpModal;
  