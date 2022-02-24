import React from "react";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Text,
    Stack,
    SimpleGrid,
    Icon,
    Button,
    Center,
    Link
} from "@chakra-ui/react";

import { Container } from '#layout'
import { FadeMap, Hover } from '#animation'
import { Header } from '#text'

const list = [{
        title: '24/7 Customer Service'
    },
    {
        title: 'Unlimited visual edits'
    },
    {
        title: 'Hosting fees included'
    },
    {
        title: 'Guaranteed 90% SEO score'
    },
    {
        title: 'Free website transfer'
    },
    {
        title: 'Analytics dashboard'
    },
]

export default function Pricing() {

    const Feature = (props) => {
        return (
            <Flex align="center" style={{ cursor: 'default' }}>
              <Flex shrink={0}>
                <Icon
                  boxSize={5}
                  mt={1}
                  mr={1}
                  color="alert.success"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </Icon>
              </Flex>
              <Box ml={4}>
                <chakra.span mt={2} color={useColorModeValue("gray.500", "gray.400")}>
                  {props.children}
                </chakra.span>
              </Box>
            </Flex>
        );
    };

    return (
        <Container>

          <Header
            header="Simple, transparent pricing."
            subHeader="30 day trial period, no strings attached."
          />

          <Box>
            <Flex
              rounded="md"
              bg="white.100"
              shadow="xl"
              mb="100px"
              textAlign="left"
              direction={{ base: "column", lg: "row" }}
              border="1px"
              borderColor="border.100"
            >
              <Stack spacing={8} p="42px" flex="0.7">
                {/* <Text fontSize="3xl" fontWeight="bold" lineHeight="tight">
                  Monthly Membership
                </Text> */}
                <chakra.p
                  fontSize={["sm", , "lg"]}
                  fontWeight="normal"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  One plan for any accomodation - from hotels, to lodges and resorts.
                  We offer a fully managed website and custom designs for a flat monthly rate. 
                  <br /><br />
                  Contact us today for a <b>$0 setup fee</b> (regularly $300) 
                </chakra.p>
                <Flex align="center">
                  <Text
                    fontFamily="body"
                    whiteSpace="nowrap"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    color="brand.400"
                  >
                    What's included
                  </Text>
                  <Flex
                    ml="15px"
                    w="full"
                    h="3px"
                  />
                </Flex>
                <SimpleGrid columns={[1, , 2, 1, 2]} spacingY={4}>
                  {list.map((item, index) => (
                    <FadeMap index={index}>
                      <Hover>
                        <Feature>{item.title}</Feature>
                      </Hover>
                    </FadeMap>
                  ))}
                </SimpleGrid>

                <Link href="/features" w="auto">
                  <chakra.span fontWeight="bold">See +10 more features {`>`}</chakra.span>
                </Link>

              </Stack>
              <Stack
                p="45px"
                flex="0.3"
                justify="center"
                align="center"
                bg="#f1f1f1"
                /* backgroundImage="url('https://alpineux.s3.filebase.com/trees%2001-min.png')"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover" */
                borderRightRadius="md"
                borderLeft="0px"
                borderColor="primary.500"
              >
                <Flex
                  align="center"
                  fontSize="3xl"
                  fontWeight={["bold", , "extrabold"]}
                  lineHeight="tight"
                  color="primary.300"
                >
                  $0
                  <chakra.span
                    ml={2}
                    fontSize="18px"
                    fontWeight="normal"
                    color={useColorModeValue("gray.500", "gray.400")}
                  >
                    {" "}
                    SETUP FEE
                  </chakra.span>
                </Flex>

                <Flex
                  align="center"
                  fontSize="6xl"
                  fontWeight={["bold", , "extrabold"]}
                  lineHeight="tight"
                >
                  $249
                  <chakra.span
                    ml={2}
                    fontSize="2xl"
                    fontWeight="medium"
                    color={useColorModeValue("gray.500", "gray.400")}
                  >
                    {" "}
                    / MONTH
                  </chakra.span>
                </Flex>

                <Stack spacing={3} py={4}>
                  <Button 
                    variant='primary'
                    w="300px"
                  >
                    Contact us
                  </Button>
                  <Link href="https://demo.alpineux.com" target="_blank">
                    <Center textAlign="center" fontWeight="bold" style={{ cursor: 'pointer' }}>
                      View live demo
                    </Center>
                  </Link>
                </Stack>
              </Stack>
            </Flex>
          </Box>
      </Container>
    );
}