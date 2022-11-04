import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import ContactForm from '../../components/ContactForm';

const index = () => {
  return (
    <Container
      display={`flex`}
      flexDir={`column`}
      //   p="10"
      mt={{ base: 16, md: 36 }}
      className="cc-container"
    >
      <Container px={{ base: 0, md: 4 }} maxW={`45rem`}>
        <Box mb={12}>
          <Heading my={5} fontSize={`4xl`}>
            Contact Me
          </Heading>
          <Text fontSize={`lg`}>
            Hi there, contact me to ask me about anything you have in mind.
          </Text>
        </Box>
        <ContactForm />
      </Container>
    </Container>
  );
};

export default index;
