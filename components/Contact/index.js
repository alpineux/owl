import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  SimpleGrid,
  chakra,
  FormHelperText
} from '@chakra-ui/react';

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';

import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function Contact() {
  return (
        <Flex
          px={[8, , 36]}
          w="full"
          justifyContent="center"
          alignItems="center"
          bg="#5C7366"
        >

          <Box
            mx="auto"
          >
            <SimpleGrid
              alignItems="center"
              columns={{ base: 1, md: 2 }}
              spacingY={{ base: 10, md: 32 }}
              spacingX={{ base: 10, md: 24 }}
            >
              <Box>
                <chakra.h2
                  mb={4}
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="extrabold"
                  textAlign={{ base: "center", sm: 'left', md: "left" }}
                  color="white"
                  lineHeight={{ md: "shorter" }}
                >
                  Book a free discovery call
                </chakra.h2>
                <chakra.p
                  mb={5}
                  textAlign={{ base: "center", sm: "left" }}
                  color="white"
                  fontSize={{ md: "lg" }}
                >
                  Interested in learning more about a AlpineUX website? <br />
                  Book a free discovery call with us if you have any more questions.
                </chakra.p>
              </Box>
              <Box
                w="full"
                h="full"
                py={48}
                color="white"
              >
                <FormControl mb={8}>
                  <FormLabel htmlFor='name'>Full name</FormLabel>
                  <Input 
                    id='name' 
                    type='text' 
                    placeholder="Name"
                    bg="white" 
                    color="black" 
                  />
                </FormControl>

                <FormControl mb={8}>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input 
                    id='email' 
                    type='email'
                    placeholder="Email" 
                    bg="white" 
                    color="black"  
                  />
                </FormControl>

                <FormControl mb={8}>
                  <FormLabel htmlFor='comments'>Comments</FormLabel>
                  <Textarea 
                    id='comments' 
                    placeholder="Add any extra comments"
                    bg="white" 
                    color="black" 
                  />
                </FormControl>

              </Box>
            </SimpleGrid>
          </Box>
        </Flex>
  );
}