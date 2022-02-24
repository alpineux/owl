import React from "react";
import Link from "next/link"
import {
    chakra,
    Box,
    SimpleGrid,
    Flex,
    useColorModeValue,
    Icon,
    Text,
    forwardRef
} from "@chakra-ui/react";

import { motion, isValidMotionProp } from 'framer-motion'
import { FadeMap } from '#animation'
import { Header } from '#text'
import { Container } from '#layout'

import {
    AiOutlineMobile,
    AiOutlineLineChart,
    AiOutlineGoogle
} from "react-icons/ai";

const featureList = [{
        title: 'Optimized for every screen',
        icon: <AiOutlineMobile bg="primary.300" />,
        description: 'From mobile to tablets, desktops to monitors - our websites are optimized for screens of all sizes so your visitors can access your site from anywhere.'
    },
    {
        title: 'Blazing fast speeds',
        icon: <AiOutlineLineChart color="alert.warning" />,
        description: "Why lose customers due to slow performance? Your website is built and regularly monitored to achieve the highest speed and performance rate."
    },
    {
        title: 'Rank higher on Google',
        icon: <AiOutlineGoogle color="alert.info" />,
        description: "Stay on top of search engine results with our regularly monitored and updated SEO. We do the research and make updates automatically every week."
    },
]

export default function Features() {

    const Feature = (props) => {
        return (
            <Box>
              <Icon
                boxSize={12}
                color={useColorModeValue("brand.700")}
                mb={4}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {props.icon}
              </Icon>
              <chakra.h3
                mb={3}
                mb={3}
                fontSize="lg"
                lineHeight="shorter"
                fontWeight="bold"
                color={useColorModeValue("gray.900")}
              >
                {props.title}
              </chakra.h3>
              <chakra.p
                lineHeight="tall"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {props.children}
              </chakra.p>
            </Box>
        );
    };

    return (
        <Container id="why-us">

          <Header 
            header="Why choose us?"
            subHeader="Get a custom built website, that's fully managed by us."
          />

          <Box>
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={20}
              px={{ base: 4, lg: 16, xl: 24 }}
              py={14}
              mx="auto"
              bg={useColorModeValue("white", "gray.800")}
              shadow="xl"
              border="1px"
              borderColor="#EFF1F0"
              rounded="lg"
            >
              {featureList.map((feature, index) => (
                <FadeMap>
                  <Feature
                    title={feature.title}
                    icon={feature.icon}
                  >
                    {feature.description}
                  </Feature>
                </FadeMap>
              ))}
            </SimpleGrid>
          </Box>
        </Container>
    );
}