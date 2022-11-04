import {
  Box,
  Container,
  FormControl,
  Heading,
  SimpleGrid,
  Text,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const index = ({ name }) => {
  return (
    <Container
      display={`flex`}
      flexDir={`column`}
      p="10"
      className="cc-container"
    >
      <Box my={12}>
        <Heading my={5} fontSize={`4xl`}>
          Contact Me
        </Heading>
        <Text fontSize={`xl`}>
          Hi there, contact me to ask me about anything you have in mind.
        </Text>
      </Box>
      <FormControl isRequired as={`form`}>
        <SimpleGrid columns={{ md: 2 }} gap={6} my={6}>
          <Box>
            <FormLabel fontSize={`sm`}>First name</FormLabel>
            <Input
              type={`text`}
              fontSize={`md`}
              size={`lg`}
              placeholder="Enter your first name"
            />
          </Box>
          <Box>
            <FormLabel fontSize={`sm`}>Last name</FormLabel>
            <Input
              type={`text`}
              fontSize={`md`}
              size={`lg`}
              placeholder="Enter your last name"
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={1} gap={6}>
          <Box>
            <FormLabel fontSize={`sm`}>Email</FormLabel>
            <Input
              fontSize={`md`}
              type="email"
              size={`lg`}
              placeholder="yourname@email.com"
            />
          </Box>
          <Box>
            <FormLabel fontSize={`sm`}>Message</FormLabel>
            <Textarea
              fontSize={`md`}
              size={`lg`}
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </Box>
          <Box>
            <Checkbox size={`lg`} defaultValue>
              You agree to providing your data to {name} who may contact you.
            </Checkbox>
          </Box>
          <Button
            my={8}
            size={`lg`}
            fontSize={`md`}
            type="submit"
            color={`white`}
            bgColor={`#1570EF`}
          >
            Send message
          </Button>
        </SimpleGrid>
      </FormControl>
    </Container>
  );
};

export default index;
