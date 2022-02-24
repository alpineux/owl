import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  HStack,
  chakra,
  Center,
  Avatar
} from "@chakra-ui/react";

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
        top: '-10px',
        backgroundSize: 'cover',
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%5C7366'/%3E%3C/svg%3E")`,
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
      }}>
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
        <chakra.p
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}>
          {props.data.content}
        </chakra.p>
        <chakra.p fontWeight={'bold'} fontSize={14}>
          {props.data.name}          
        </chakra.p>
      </Flex>
      <Avatar
        src={props.data.avatar}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
  );
}

export default function Carousel(){
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "40%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "black",
    opacity: 0.8,
    fontWeight: "bold",
    fontSize: "18px",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
      color: 'white'
    },
  };

const testimonials = [
  {
    name: 'Amazon',
    content: 'For every 100ms of website load time, Amazon sees a 1% decrease in revenue.',
    avatar: 'https://wpostats.com/img/amazon-logo.png',
  },
  {
    name: 'Google',
    content:
      "Websites that load in 5 seconds compared to sites that load in 19 seconds, have a 70% longer average session.",
    avatar:
      'https://wpostats.com/img/google-logo.png',
  },
  {
    name: 'Shopzilla',
    content:
      "Shopzilla decreased load time by 5 seconds and saw a 12% increase in conversion rates.",
    avatar:
      'https://wpostats.com/img/shopzilla-logo.png',
  },
  {
    name: 'Pinterest',
    content:
      "Rebuilding Pinterest pages for performance resulted in a 15% increase in SEO traffic.",
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
  }
];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = testimonials.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      px={44}
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="224px" w="full" {...carouselStyle}>
          {testimonials.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
        
              <Center mb={8}>
                <TestmonialCard data={slide} />
              </Center>

            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", , "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};
