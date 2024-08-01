// import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

const SignUpModal = ({ isOpen, onClose }) => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = values => {
    console.log(values);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="md" boxShadow="lg">
        <ModalHeader textAlign="center">Sign in to MovieStreamer</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl isInvalid={errors.username}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="username"
                  placeholder="Username"
                  {...register('username', { required: 'This is required' })}
                  bg="gray.100"
                  borderRadius="md"
                />
              </FormControl>
              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  placeholder="Email"
                  {...register('email', { required: 'This is required' })}
                  bg="gray.100"
                  borderRadius="md"
                />
              </FormControl>
              <FormControl isInvalid={errors.number}>
                <FormLabel htmlFor="number">Number</FormLabel>
                <Input
                  id="number"
                  placeholder="Number"
                  {...register('number', { required: 'This is required' })}
                  bg="gray.100"
                  borderRadius="md"
                />
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  {...register('password', { required: 'This is required' })}
                  bg="gray.100"
                  borderRadius="md"
                />
              </FormControl>
              <FormControl isInvalid={errors.confirmPassword}>
                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                <Input
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  {...register('confirmPassword', { required: 'This is required' })}
                  bg="gray.100"
                  borderRadius="md"
                />
              </FormControl>
              <Button mt={4} colorScheme="gray" variant="solid" w="full" type="submit">
                Sign In
              </Button>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

SignUpModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignUpModal;
