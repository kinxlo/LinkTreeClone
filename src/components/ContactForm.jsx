import {
  FormControl,
  SimpleGrid,
  Box,
  FormLabel,
  Input,
  Text,
  Textarea,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ContactForm = ({ name }) => {
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    checkbox: false,
  });

  const handleInputChange = e => {
    setInput(prevInput => {
      // handleError(e);
      return e.target.id === `checkbox`
        ? { ...prevInput, [e.target.id]: e.target.checked }
        : { ...prevInput, [e.target.id]: e.target.value };
    });
  };

  const handleForm = e => {
    e.preventDefault();
    console.log(input);
    // handle form clear
  };

  return (
    <FormControl onSubmit={handleForm} as={`form`}>
      <SimpleGrid columns={{ md: 2 }} gap={6} my={6}>
        <FormControl>
          <FormLabel htmlFor="first_name" fontSize={`sm`}>
            First name
          </FormLabel>
          <Input
            onChange={handleInputChange}
            id="first_name"
            borderRadius={8}
            type={`text`}
            fontSize={`md`}
            size={`lg`}
            placeholder="Enter your first name"
            _hover={{
              border: `1px solid #84CAFF`,
              boxShadow: `0px 0px 0px 4px #D1E9FF`,
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="last_name" fontSize={`sm`}>
            Last name
          </FormLabel>
          <Input
            onChange={handleInputChange}
            id="last_name"
            borderRadius={8}
            type={`text`}
            fontSize={`md`}
            size={`lg`}
            placeholder="Enter your last name"
            _hover={{
              border: `1px solid #84CAFF`,
              boxShadow: `0px 0px 0px 4px #D1E9FF`,
            }}
          />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid>
        <FormControl>
          <FormLabel htmlFor="email" fontSize={`sm`}>
            Email
          </FormLabel>
          <Input
            onChange={handleInputChange}
            id="email"
            borderRadius={8}
            fontSize={`md`}
            type="email"
            size={`lg`}
            placeholder="yourname@email.com"
            _hover={{
              border: `1px solid #84CAFF`,
              boxShadow: `0px 0px 0px 4px #D1E9FF`,
            }}
          />
        </FormControl>
        <FormControl my={5}>
          <FormLabel htmlFor="message" fontSize={`sm`}>
            Message
          </FormLabel>
          <Textarea
            onChange={handleInputChange}
            id="message"
            borderRadius={8}
            h={`8rem`}
            fontSize={`md`}
            size={`lg`}
            placeholder="Send me a message and I'll reply you as soon as possible..."
            _hover={{
              border: `1px solid #84CAFF`,
              boxShadow: `0px 0px 0px 4px #D1E9FF`,
            }}
          />
        </FormControl>
        <Box>
          <Checkbox
            id="checkbox"
            colorScheme={`white`}
            size={`lg`}
            display={`flex`}
            alignItems={{ base: `top` }}
            onChange={handleInputChange}
          >
            <Text fontSize={`md`} fontWeight={400} color={`gray.500`}>
              You agree to providing your data to {name} who may contact you.
            </Text>
          </Checkbox>
        </Box>
        <Button
          id="btn__submit"
          borderRadius={8}
          my={8}
          size={`lg`}
          fontSize={`md`}
          type="submit"
          color={`white`}
          bgColor={`#1570EF`}
          _hover={{
            border: `1px solid #84CAFF`,
            boxShadow: `0px 0px 0px 4px #D1E9FF`,
          }}
        >
          Send message
        </Button>
      </SimpleGrid>
    </FormControl>
  );
};

export default ContactForm;
