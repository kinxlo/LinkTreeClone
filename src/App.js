import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Center,
  Text,
  Button,
  Flex,
  Image,
  Link,
} from '@chakra-ui/react';
import './App.css';

function App() {
  const [user] = useState({
    name: 'Kingsley Solomon',
    img: 'https://res.cloudinary.com/kingsleysolomon/image/upload/v1630322773/hng/profile1_wqaris.jpg',
  });
  const [btn] = useState([
    {
      name: `@Kinxlo`,
      link: 'https://twitter.com/kinxlo',
      id: `twitter`,
    },
    {
      name: `Zuri Team`,
      link: 'https://training.zuri.team/',
      id: `btn__zuri`,
    },
    {
      name: `Zuri Books`,
      link: 'https://books.zuri.team',
      id: `books`,
      title: 'My Zuri Books for Designers and Programmers',
    },
    {
      name: `Python Books`,
      link: `https://books.zuri.team/python-for-beginners?ref_id=KingsleySolomon`,
      id: `book__python`,
      title:
        'The only Python Book you will ever need! save up to a wooping $10.00 !',
    },
    {
      name: `Background Check for Coders`,
      link: 'https://backgroundcheck.zuri.team',
      id: `pitch`,
      title:
        'Learn about your Devs, you know what they do, \n now you can know who they are. \n Allow us to assist you in making more informed hiring selections.',
    },
    {
      name: `Design Books`,
      link: 'https://books.zuri.team/design-rules',
      id: `book__design`,
      title: 'Start your design Journey with Zuri Design books...FREE!',
    },
  ]);

  const ButtonLinks = btn.map((btn, index) => {
    return (
      <Link key={index} href={btn.link} isExternal>
        <Button
          title={btn.title}
          id={btn.id}
          h={`76px`}
          mb="15px"
          width={`100%`}
        >
          {btn.name}
        </Button>
      </Link>
    );
  });

  return (
    <Center display={`flex`} flexDir={`column`} p="10" className="cc-container">
      <Center flexDir={`column`}>
        <Avatar id="profile__img" size="2xl" name={user.name} src={user.img} />
        <Text fontSize={`20px`} mt="24px" fontWeight="700">
          {user.name}
        </Text>
      </Center>
      <Box mt="56px" w={`1oo%`}>
        {ButtonLinks}
      </Box>
      <Flex my="5" gap={5}>
        <Image
          id="slack"
          src="https://img.icons8.com/color/24/000000/slack-new.png"
          alt="slack"
        />
        <Image
          id="github"
          src="https://img.icons8.com/material-sharp/24/000000/github.png"
          alt="github"
        />
      </Flex>
      <Box mt="10rem" w="100%" borderTop={`1px solid lightgrey`} py="10">
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
    </Center>
  );
}

export default App;
