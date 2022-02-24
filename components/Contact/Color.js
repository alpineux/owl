import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    chakra,
    useDisclosure,
    Slide,
    VStack,
    Textarea,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

import { Container } from '#layout'

import { GrFormSearch } from "react-icons/gr"
import { HiOutlineMail, HiOutlineMap } from "react-icons/hi"

export default function Contact() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Container>
      <Box
        as={SimpleGrid}
        w="full"
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 60 }}
      >
        <Stack spacing={{ base: 10, md: 8 }} textAlign="left">
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          >
            Book a {' '}
            <Text
              as={'VStack'}
              bgGradient="linear(to-r, #304528,#8D9D94)"
              bgClip="text"
            >
              <chakra.span onMouseOver={onToggle}>
                discovery
              </chakra.span>
            </Text>{' '}
            call with us.
          </Heading>

          <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg', md: 'lg', lg: 'lg' }}>
            Have any more questions? Book a 1-on-1 call to disscuss how AlpineUX
            can help improve your website. 
          </Text>

          <Stack direction='row' spacing={4}>
            <Button 
              leftIcon={<HiOutlineMail />} 
              size="lg" variant="link" 
              style={{ textDecoration: 'none', pointer: 'default' }}
              href="mailto:someone@yoursite.com"
            >
              book@alpineux.com
            </Button>
          </Stack>

          <Stack direction='row' spacing={4}>
            <Button 
              leftIcon={<HiOutlineMap />} 
              size="lg" 
              variant="link"
              style={{ textDecoration: 'none', pointer: 'default' }}
            >
              Canmore, Canada
            </Button>
          </Stack>

        </Stack>

        <Stack
          bg="primary.100"
          rounded={'xl'}
          border="1px" 
          borderColor="gray.200"
          shadow="lg"
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={4} textAlign="left">
            <Heading
              color="primary.500"
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Free 1-on-1 call
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'lg', md: 'lg', lg: 'lg' }}>
            We will contact you through email to set up a time to talk about your website needs.
          </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor='name'>Full name</FormLabel>
                <Input
                  size="lg"
                  bg="background.100"
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  name="name"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input
                  size="lg"
                  bg="background.100"
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  type="email"
                  name="email"
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor='comments'>Additional comments</FormLabel>
                <Textarea
                  name="comments"
                  size="lg"
                  bg="background.100"
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
              </FormControl>

            </Stack>
            <Button
              variant="primary"              
              mt={8}
              w={'full'}
            >
              Book a call
            </Button>
          </Box>
          form
        </Stack>
        </Box>
      </Container>
    );
}