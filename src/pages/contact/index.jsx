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
      <Box>
        <Heading>Contact Me</Heading>
        <Text>
          Hi there, contact me to ask me about anything you have in mind.
        </Text>
      </Box>
      <FormControl isRequired as={`form`}>
        <SimpleGrid columns={2} gap={5}>
          <Box>
            <FormLabel>First name</FormLabel>
            <Input size={`lg`} placeholder="Enter your first name" />
          </Box>
          <Box>
            <FormLabel>Last name</FormLabel>
            <Input size={`lg`} placeholder="Enter your last name" />
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={1}>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input type="email" size={`lg`} placeholder="yourname@email.com" />
          </Box>
          <Box>
            <FormLabel>Message</FormLabel>
            <Textarea
              size={`lg`}
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </Box>
          <Box>
            <Checkbox defaultChecked>
              You agree to providing your data to {name} who may contact you.
            </Checkbox>
          </Box>
          <Button type="submit" color={`white`} bgColor={`#1570EF`}>
            Send message
          </Button>
        </SimpleGrid>
      </FormControl>
    </Container>
  );
};

export default index;
