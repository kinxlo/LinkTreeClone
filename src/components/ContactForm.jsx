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
  FormErrorMessage,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ContactForm = ({ name }) => {
  // const [inValid, setinValid] = useState(true);
  // const [errors] = useState([
  //   {
  //     name: `first_name`,
  //     error: false,
  //     errorMessage: ``,
  //   },
  //   {
  //     name: `last_name`,
  //     error: false,
  //     errorMessage: ``,
  //   },
  //   {
  //     name: `email`,
  //     error: false,
  //     errorMessage: ``,
  //   },
  //   {
  //     name: `message`,
  //     error: false,
  //     errorMessage: ``,
  //   },
  // ]);

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

  // const handleError = input => {
  //   if (input.target.value === '') {
  //     errors.forEach(err => {
  //       if (err.name === input.target.id) {
  //         err.error = true;
  //         err.errorMessage = `is required`;
  //       }
  //     });
  //   } else {
  //     errors.forEach(err => {
  //       if (err.name === input.target.id) {
  //         err.error = false;
  //         err.errorMessage = ``;
  //       }
  //     });
  //   }
  // };

  // useEffect(() => {
  //   for (const prop in input) {
  //     if (prop === `checkbox`) continue;
  //     if (!input[prop]) {
  //       setinValid(true);
  //     } else {
  //       setinValid(false);
  //     }
  //   }
  // }, [input]);

  const handleForm = e => {
    e.preventDefault();
    console.log(input);
    // handle form clear
  };

  return (
    <FormControl onSubmit={handleForm} as={`form`}>
      <SimpleGrid columns={{ md: 2 }} gap={6} my={6}>
        <FormControl>
          <FormLabel for="first_name" fontSize={`sm`}>
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
          />
          {/* <FormErrorMessage>{`First name ${errors[0].errorMessage}`}</FormErrorMessage> */}
        </FormControl>
        <FormControl>
          <FormLabel for="last_name"fontSize={`sm`}>
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
          />
          {/* <FormErrorMessage></FormErrorMessage> */}
        </FormControl>
      </SimpleGrid>
      <SimpleGrid>
        <FormControl>
          <FormLabel for="email"  fontSize={`sm`}>
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
          />
          {/* <FormErrorMessage></FormErrorMessage> */}
        </FormControl>
        <FormControl my={5}>
          <FormLabel for="message" fontSize={`sm`}>
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
          />
          <FormErrorMessage></FormErrorMessage>
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
          _hover={{ background: `#175CD3` }}
        >
          Send message
        </Button>
      </SimpleGrid>
    </FormControl>
  );
};

export default ContactForm;
