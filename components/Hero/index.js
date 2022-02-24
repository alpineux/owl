import React, { useEffect } from "react";
import Image from "next/image";

import {
    chakra,
    Box,
    useColorModeValue,
    Button,
    Stack,
    Text,
    Icon,
    Center
} from "@chakra-ui/react";

import { Container } from '#layout'
import { Parallax, TextTransition } from "#animation"

import heroImage from '../../public/static/hero-min(1).jpg'

export default function Hero() {
    return (
        <Container bg="secondary">
        <Box
          w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
          mx="auto"
          mt={10}
          textAlign={{ base: "center", md: "center" }}
        >
          <chakra.h1
            mb={10}
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="normal"
            lineHeight="normal"
            color="primary.500"
          >
            <Center>
              <TextTransition 
                text={[
                  "Fill more rooms",
                  "Improve your SEO",
                  "Get more customers",
                ]}
              />
            </Center>
          </chakra.h1>

          <chakra.h2
            mb={12}
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="light"
            lineHeight="normal"
            color="primary.500"
          >
            with a high performace website.
          </chakra.h2>

          <chakra.p
            px={{ base: 0, lg: 24 }}
            my={12}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="light"
            color="primary.500"
          >
            {/* No page builders or WordPress. <br /> */} 100% hand-coded websites with superior results.
          </chakra.p>
          <Stack
            direction={{ base:"column",sm:"row" }}
            mb={{ base: 4, md: 18 }}
            spacing={4}
            justifyContent={{ sm: "center", md: "center" }}
          >
            <Button
              variant="primary"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
            >
              Starting at $249
            </Button>
            <Button
              variant="primary-nooutline"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
            >
              View live demo
            </Button>
          </Stack>
        </Box> 
          <Parallax>
          <Box
              w={{ base: "full", md: 10 / 12 }}
              mx="auto"
              mt={20}
              pos="relative"
            >
              <Image
                src={heroImage}
                alt="AlpineUX demo"
                layout="fill"
                layout="responsive"
                placeholder="blur"
                priority
              />
            </Box> 
          </Parallax> 
      </Container>
    );
};