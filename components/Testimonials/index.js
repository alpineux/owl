import Image from "next/image"

import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  box
} from '@chakra-ui/react';

import Carousel from "~/components/Carousel"

const testimonials = [
  {
    name: 'Amazon',
    content: 'Amazon sees a 1% decrease in revenue for every 100ms increase in website load time.',
    content: 'For every 100ms of increased website load time, Amazon sees a 1% decrease in revenue.',
    avatar: 'https://wpostats.com/img/amazon-logo.png',
  },
  {
    name: 'Google',
    content:
      "When comparing websites that load in 5 seconds to sites that load in 19 seconds, the faster sites had 70% longer average session.",
    avatar:
      'https://wpostats.com/img/google-logo.png',
  }
];

function TestmonialCard(props) {
  const { name, role, content, avatar, index } = props;
  return (
    <Flex
      boxShadow={'lg'}

      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px'
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
      }}
      >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
      >
        <chakra.p
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontWeight={'bold'} fontSize={14}>
          {name}          
        </chakra.p>
      </Flex>
      {/* <Avatar
        src={avatar}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      /> */}
      <Box
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
        alignSelf={'center'}
      >
        <Image
          src={avatar}
          alt={name}
          width="80px"
          height="80px"
          layout="responsive"
        />
      </Box>

    </Flex>
  );
}

export default function Testimonials() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      pb={16}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}>
      <Box margin={'auto'}>
        <chakra.h1
          py={5}
          fontSize={48}
          fontWeight={'bold'}
          lineHeight="1.2"
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          Why is website <br /> performance important?
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          See why large companies prioritize their <br /> website performance for higher profits and conversions.
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 1 }}
        spacing={'20'}
        mt={16}
        mx={'auto'}
      >
        <Carousel />
      </SimpleGrid>
    </Flex>
  );
}