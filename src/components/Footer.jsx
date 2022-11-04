import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box mt={24} mb={5} w="100%" p="5">
      <hr
        style={{
          height: '1px',
          borderWidth: 0,
          backgroundColor: 'lightgray',
          marginBottom: '2rem',
        }}
      />
      <Flex
        gap={{ base: 5, md: `initial` }}
        flexDir={{ base: `column`, md: `row` }}
        alignItems={{ md: `center` }}
        justifyContent={`space-between`}
      >
        <Image
          w={`10rem`}
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1666874529/hng/Zuri.Internship_Logo_gszpnt.png"
          alt="github"
        />
        <Text color={`grey`}>HNG Internship 9 Frontend Task</Text>
        <Image
          w={`10rem`}
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1666874533/hng/I4G_abnqbn.png"
          alt="IN4G"
        />
      </Flex>
    </Box>
  );
};

export default Footer;
