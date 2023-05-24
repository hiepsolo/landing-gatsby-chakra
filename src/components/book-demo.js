import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import './book-demo.css';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const BookDemoForm = ({ onClose }) => {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'bookdemo',
        ...data,
      }),
    })
      .then(() => {
        onClose();
        toast({
          title: `Request sent.`,
          description:
            "Thanks for submitting the form. We'll contact you by email shortly.",
          status: 'success',
          position: 'bottom',
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: `Request failed.`,
          description: 'Something went wrong, please try again later.',
          status: 'error',
          position: 'bottom',
          isClosable: true,
        });
      });
  };

  return (
    <Box w={{ base: '100%', md: '600px' }}>
      <form
        name="bookdemo"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        action="/"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <Input type="hidden" name="form-name" value="bookdemo" />
        <Input type="hidden" name="bot-field" />
        <VStack
          w={{ base: '100%', md: '488px' }}
          mx={{ base: 0, md: '56px' }}
          gap={4}
        >
          <HStack
            flexDirection={{ base: 'column', md: 'row' }}
            spacing={{ base: '0', md: '24px' }}
            gap={{ base: '20px', md: '0px' }}
            alignItems={'flex-start'}
            width={'100%'}
          >
            <FormControl isInvalid={errors.firstName}>
              <FormLabel htmlFor="fName">First name</FormLabel>
              <Input
                id="fName"
                {...register('firstName', {
                  required: 'First name is required',
                  maxLength: {
                    value: 40,
                    message: 'Maximum length should be 40',
                  },
                })}
              />
              {errors.firstName && (
                <FormErrorMessage>{errors.firstName.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.lastName}>
              <FormLabel htmlFor="lName">Last name</FormLabel>
              <Input
                id="lName"
                {...register('lastName', {
                  required: 'Last name is required',
                  maxLength: {
                    value: 40,
                    message: 'Maximum length should be 40',
                  },
                })}
              />
              {errors.lastName && (
                <FormErrorMessage>{errors.lastName.message}</FormErrorMessage>
              )}
            </FormControl>
          </HStack>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              {...register('email', {
                required: 'Email is required',
                maxLength: {
                  value: 100,
                  message: 'Maximum length should be 100',
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Email is invalid',
                },
              })}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.phone}>
            <FormLabel htmlFor="phone">Phone number</FormLabel>
            <Input
              id="phone"
              {...register('phone', {
                required: 'Phone number is required',
                maxLength: {
                  value: 20,
                  message: 'Maximum length should be 20',
                },
                pattern: {
                  value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/,
                  message: 'Phone is invalid',
                },
              })}
            />
            {errors.phone && (
              <FormErrorMessage>{errors.phone.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.company}>
            <FormLabel htmlFor="company">Company</FormLabel>
            <Input
              id="company"
              {...register('company', {
                maxLength: {
                  value: 100,
                  message: 'Maximum length should be 100',
                },
              })}
            />
            {errors.company && (
              <FormErrorMessage>{errors.company.message}</FormErrorMessage>
            )}
          </FormControl>
          <Box
            width={'100%'}
            mt="20px !important"
            mb={{ base: '20px !important', md: '40px !important' }}
          >
            <Button
              type="submit"
              isLoading={isSubmitting}
              h={{ base: '40px', md: '48px', xl: '56px' }}
              variant={'light-blue'}
              isFullWidth
            >
              Submit
            </Button>
          </Box>
        </VStack>
      </form>
    </Box>
  );
};

const BookDemo = ({ title, isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => onClose()}>
        <ModalOverlay />
        <ModalContent overflow={{base: 'auto', md: 'inherit'}} maxWidth={{ base: '90%', md: '600px' }}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mt={{ base: 8, md: 14 }} display={'flex'}>
            <Center width="100%">
              <BookDemoForm onClose={onClose} />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookDemo;
