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
import React from 'react';

const ContactForm = ({ name }) => {
  return (
    <FormControl isRequired as={`form`}>
      <SimpleGrid columns={{ md: 2 }} gap={6} my={6}>
        <Box>
          <FormLabel fontSize={`sm`}>First name</FormLabel>
          <Input
            borderRadius={8}
            type={`text`}
            fontSize={`md`}
            size={`lg`}
            placeholder="Enter your first name"
          />
        </Box>
        <Box>
          <FormLabel fontSize={`sm`}>Last name</FormLabel>
          <Input
            borderRadius={8}
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
            borderRadius={8}
            fontSize={`md`}
            type="email"
            size={`lg`}
            placeholder="yourname@email.com"
          />
        </Box>
        <Box>
          <FormLabel fontSize={`sm`}>Message</FormLabel>
          <Textarea
            borderRadius={8}
            h={`8rem`}
            fontSize={`md`}
            size={`lg`}
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </Box>
        <Box>
          <Checkbox
            colorScheme={`white`}
            size={`lg`}
            display={`flex`}
            alignItems={{ base: `top` }}
          >
            <Text fontSize={`md`} fontWeight={400} color={`gray.500`}>
              You agree to providing your data to {name} who may contact you.
            </Text>
          </Checkbox>
        </Box>
        <Button
          borderRadius={8}
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
  );
};

export default ContactForm;
