import React from "react";
import LazyLoad from 'react-lazyload';

import {
    Box,
    Button,
    chakra,
    Flex,
    SimpleGrid,
    useColorModeValue,
    Text,
    Image
} from "@chakra-ui/react";

import { FcSearch, FcPositiveDynamic } from "react-icons/fc";
import { HiCode } from "react-icons/hi";
import { GrDashboard, GrBarChart, GrSearchAdvanced } from "react-icons/gr";
import { MdSavedSearch } from "react-icons/md";

import { Container } from '#layout'

const FeatureLeft = (props) => {
    return (
        <SimpleGrid
      alignItems="center"
      columns={{ base: 1, md: 2 }}
      flexDirection="column-reverse"
      mb={24}
      spacingY={{ base: 10, md: 32 }}
      spacingX={{ base: 10, md: 24 }}
    >
      <Box order={{ base: "none", md: 2 }}>
        <chakra.h2
          mb={4}
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          textAlign={{ base: "center", sm: 'left', md: "left" }}
          color={useColorModeValue("gray.900", "gray.400")}
          lineHeight={{ md: "shorter" }}
        >
          {props.data.title}
        </chakra.h2>
        <chakra.p
          mb={5}
          textAlign={{ base: "center", sm: "left" }}
          color={useColorModeValue("gray.600", "gray.400")}
          fontSize={{ md: "lg" }}
        >
          <div dangerouslySetInnerHTML={{__html: props.data.description}} />
        </chakra.p>
        <br />
        {props.data.button &&
          <Button bg="#5C7366" color="white">{props.data.button}</Button>
        }

      </Box>
      <img
        w="full"
        h="full"
        py={24}
        src={props.data.image}
      />
      {/* <Box
        w="full"
        h="full"
        py={48}
        bg={useColorModeValue("gray.200", "gray.700")}
      ></Box> */}
    </SimpleGrid>
    )
}

const FeatureRight = (props) => {
    return (
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: 'left', md: "left" }}
              color={useColorModeValue("gray.900", "gray.400")}
              lineHeight={{ md: "shorter" }}
            >
              {props.data.title}
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              <div dangerouslySetInnerHTML={{__html: props.data.description}} />
            </chakra.p>
            <br />
            {props.data.button &&
              <Button varient="primary">{props.data.button}</Button>
            }
          </Box>

          <Image
            w="full"
            h="full"
            py={24}
            src={props.data.image}
          />

        </SimpleGrid>
    )
}

export default function FeaturesLarge() {

    const features = [{
            title: 'Hand coded website',
            description: "Get a custom designed website based on your current branding. We use an in-house content management system so your website does not use a generic template.",
            image: 'https://miro.medium.com/max/1400/0*J88dBnBsh_EhzoEx.jpeg',
            icon: <HiCode color="#5C7366" />
        },
        {
            title: 'Admin dashboard',
            description: "Add, edit and delete many of your hotels features, including: <ul> <li style='margin-left:32px'>Rooms</li> <li style='margin-left:32px'>Specials & deals</li> <li style='margin-left:32px'>Nearby attractions</li> <li style='margin-left:32px'>Many more</li>",
            image: 'https://luna1.co/26100b.png',
            button: 'View Admin demo',
            path: 'https://demo.alpineux.com/admin',
            icon: <GrDashboard color="#5C7366" />
        },
        {
            title: 'Custom analytics dashboard',
            description: "<p>Go to this <a href='https://google.com'>website </b></p>",
            image: 'https://luna1.co/26100b.png',
            icon: <GrBarChart color="#5C7366" />
        },
        {
            title: 'Weekly SEO audits',
            description: "SEO requires regular audits and updates. Leave it to us to analyze your SEO score and make updates to ensure you're capturing every search opportunity.",
            image: 'https://luna1.co/26100b.png',
            icon: <MdSavedSearch color="#5C7366" />
        },
        {
            title: 'Free website migration',
            description: "We will migrate your current websites data, images and domain name to your brand new AlpineUX website for <u>free</u>.",
            image: 'https://luna1.co/26100b.png',
            icon: <MdSavedSearch color="#5C7366" />
        }
    ];

    return (
        <Container>

        {/* <Box w="full" mx="auto" align={['left', , 'center']} pb={32}>
          <Text
            mb={4}
            fontSize="5xl"
            fontWeight="bold"
            lineHeight="tight"
            color="black"
          >
            A fully managed website, <br /> one afforable subscription.
          </Text>
          <chakra.p
            fontSize={["lg", , "xl"]}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Every AlpineUX website includes:
          </chakra.p>
        </Box> */}

        {features.map((feature, index) => {
          return (
            <LazyLoad height={200} once>
              {index % 2 ? 
                <FeatureLeft data={feature} />
              :
                <FeatureRight data={feature}  />
              }
            </LazyLoad>
          )
        })}

      </Container>
    );
}