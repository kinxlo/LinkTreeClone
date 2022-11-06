import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Center,
  Text,
  Flex,
  Image,
  Link,
  Container,
} from '@chakra-ui/react';
// import { RiShareForwardLine } from 'react-icons/ri';
// import { AiOutlineEllipsis } from 'react-icons/ai';
import { Link as RRouterLink } from 'react-router-dom';

function Index() {
  const [user] = useState({
    name: 'Kingsley Solomon',
    img: 'https://res.cloudinary.com/kingsleysolomon/image/upload/v1630322773/hng/profile1_wqaris.jpg',
  });
  //   const [btn] = useState([
  //     {
  //       name: `@Kinxlo`,
  //       link: 'https://twitter.com/kinxlo',
  //       id: `twitter`,
  //       isExternal: true,
  //     },
  //     {
  //       name: `Zuri Team`,
  //       link: 'https://training.zuri.team/',
  //       id: `btn__zuri`,
  //       isExternal: true,
  //     },
  //     {
  //       name: `Zuri Books`,
  //       link: 'https://books.zuri.team',
  //       id: `books`,
  //       title: 'Zuri Books!... My one stop shop for Designers and Programmers',
  //     },
  //     {
  //       name: `Python Books`,
  //       link: `https://books.zuri.team/python-for-beginners?ref_id=Bug`,
  //       id: `book__python`,
  //       title:
  //         'The only Python Book you will ever need! save up to a wooping $10.00 !',
  //     },
  //     {
  //       name: `Background Check for Coders`,
  //       link: 'https://backgroundcheck.zuri.team',
  //       id: `pitch`,
  //       title:
  //         'Learn about your Devs, you know what they do, \n now you can know who they are. \n Allow us to assist you in making more informed hiring selections.',
  //     },
  //     {
  //       name: `Design Books`,
  //       link: 'https://books.zuri.team/design-rules',
  //       id: `book__design`,
  //       title: 'Start your design Journey with Zuri Design books...FREE!',
  //     },
  //     {
  //       name: `Contact`,
  //       link: `/contact`,
  //       id: `contact`,
  //       title: 'Start your design Journey with Zuri Design books...FREE!',
  //       isExternal: false,
  //     },
  //   ]);

  //   const ButtonLinks = btn.map((btn, index) => {
  //     return (
  //       <Link
  //         key={index}
  //         as={btn.isExternal ? null : RRouterLink}
  //         href={btn.link}
  //         to={btn.link}
  //         state={user}
  //         isExternal={btn.isExternal}
  //         id={btn.id}
  //         // border={`1px solid red`}
  //         h={`76px`}
  //         mb="15px"
  //         width={`100%`}
  //         display={`flex`}
  //         alignItems={`center`}
  //         justifyContent={`center`}
  //         borderRadius={12}
  //         bgColor={`#EAECF0`}
  //         fontWeight={500}
  //         _hover={{ bgColor: `#EAECF090` }}
  //       >
  //         {btn.name}
  //       </Link>
  //     );
  //   });

  //   const style = {
  //     height: `76px`,
  //     marginBottom: '15px',
  //     width: `100%`,
  //     display: `flex`,
  //     alignItems: `center`,
  //     justifyContent: `center`,
  //     borderRadius: 12,
  //     bgColor: `#EAECF0`,
  //     fontWeight: 500,
  //   };

  const style = {
    backgroundColor: `#EAECF0`,
    height: '76px',
    marginBottom: '15px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    bgColor: '#EAECF0',
    fontWeight: 500,
  };

  return (
    <Container
      maxW={`992px`}
      pos={`relative`}
      display={`flex`}
      flexDir={`column`}
      p="5"
      mt={16}
    >
      <Center flexDir={`column`}>
        <Box
          display={{ md: `none` }}
          cursor={`pointer`}
          border={`1px dotted grey`}
          py={4}
          px={2}
          color={`grey`}
          borderRadius={`100%`}
          position={`absolute`}
          top={{ base: `3rem` }}
          right={{ base: `2.5rem`, md: `15rem` }}
        >
          <Image
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1667749910/hng/Icon_1_wwrqm4.png`}
          />
        </Box>
        <Box
          display={{ base: `none`, md: `initial` }}
          cursor={`pointer`}
          border={`1px dotted grey`}
          p={4}
          color={`grey`}
          borderRadius={`100%`}
          position={`absolute`}
          top={{ base: `3rem` }}
          right={{ base: `2.5rem`, md: `15rem` }}
        >
          <Image
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1667749811/hng/Icon_exohvo.png`}
          />
        </Box>
        <Avatar id="profile__img" size="2xl" name={user.name} src={user.img} />
        <Text fontSize={`20px`} mt="24px" fontWeight="700">
          {user.name}
        </Text>
        <Text id="slack" hidden color={`red`} fontWeight={`500`}>
          @Bug
        </Text>
      </Center>

      <Box mt="56px" w={`1oo%`}>
        {/* {ButtonLinks} */}
        <Link
          href={`https://twitter.com/kinxlo`}
          id={`twitter`}
          isExternal={`76px`}
          style={style}
          _hover={{ bgColor: `#EAECF090 !` }}
        >
          @Kinxlo
        </Link>
        <Link
          title="Start your design Journey with Zuri Design books...FREE!"
          href={`https://training.zuri.team/`}
          isExternal
          id={`btn__zuri`}
          style={style}
          _hover={{ bgColor: `#EAECF090 !` }}
        >
          Zuri Team
        </Link>
        <Link
          title="Zuri Books!... My one stop shop for Designers and Programmers"
          href={`https://books.zuri.team/`}
          isExternal
          id={`books`}
          style={style}
          _hover={{ bgColor: `#EAECF090 !` }}
        >
          Zuri Books
        </Link>
        <Link
          title="The only Python Book you will ever need! save up to a wooping $10.00 !"
          href={`https://books.zuri.team/python-for-beginners?ref_id=Bug/`}
          isExternal
          id={`book__python`}
          style={style}
          _hover={{ bgColor: `#EAECF090 !` }}
        >
          Python Books
        </Link>
        <Link
          title="Learn about your Devs, you know what they do, \n now you can know who they are. \n Allow us to assist you in making more informed hiring selections."
          href={`https://backgroundcheck.zuri.team`}
          isExternal
          id={`pitch`}
          style={style}
          _hover={{ bgColor: `#EAECF090 !` }}
        >
          Background Check for Coders
        </Link>
        <Link
          title="Start your design Journey with Zuri Design books...FREE!"
          href={`https://books.zuri.team/design-rules`}
          isExternal
          id={`book__design`}
          style={style}
          _hover={{ bgColor: `#EAECF090 !` }}
        >
          Design Books
        </Link>
        <Link
          title="Contact me"
          as={RRouterLink}
          to={`/contact`}
          state={user}
          id={`contact`}
          style={style}
          _hover={{ bgColor: `#EAECF090 !` }}
        >
          Contact
        </Link>
      </Box>
      <Flex my="5" gap={5} justifyContent={`center`}>
        <Link href="hng9.slack.com">
          <Image
            title="@Bug"
            id="slack"
            src="https://img.icons8.com/color/24/000000/slack-new.png"
            alt="slack"
          />
        </Link>
        <Link href="https://github.com/kinxlo">
          <Image
            title="@Kinxlo"
            id="github"
            src="https://img.icons8.com/material-sharp/24/000000/github.png"
            alt="github"
          />
        </Link>
      </Flex>
    </Container>
  );
}

export default Index;
