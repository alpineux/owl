import React from "react";

import {
    Button,
    Box,
    SimpleGrid,
    Flex,
    Center,
    chakra,
    HStack
} from "@chakra-ui/react";

import { FadeMap, Hover } from '#animation'
import { Container } from '#layout'
import { Header } from '#text'

const testimonials = [{
        name: 'Amazon',
        content: 'For every 100ms of website load time, Amazon sees a 1% decrease in revenue.',
        avatar: 'https://wpostats.com/img/amazon-logo.png',
    },
    {
        name: 'Google',
        content: "Websites that load in 5 seconds compared to 19 seconds, have a 70% longer average session.",
        avatar: 'https://icons-for-free.com/iconfiles/png/512/google+plus+social+icon-1320192247806987255.png',
    },
    {
        name: 'Shopzilla',
        content: "Shopzilla decreased load time by 5 seconds and saw a 12% increase in conversion rates.",
        avatar: 'https://wpostats.com/img/shopzilla-logo.png',
    },
    {
        name: 'Pinterest',
        content: "Rebuilding Pinterest pages for performance resulted in a 15% increase in SEO traffic.",
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
    },
    {
        name: 'Pinterest',
        content: "Rebuilding Pinterest pages for performance resulted in a 15% increase in SEO traffic.",
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
    },
    {
        name: 'Pinterest',
        content: "Rebuilding Pinterest pages for performance resulted in a 15% increase in SEO traffic.",
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
    }
];

const Three = (props) => {
    return (
        <Container>
      <Header 
        header="Website performance"
        subHeader="See why large companies prioritize their website performance."
      />

      <Box>
        <Center>
          <SimpleGrid columns={[1, 1, 3]} spacing={10}>
            {testimonials.map((testimonial, index) => (
              <FadeMap index={index}>
                <Hover>
                  <Box
                    bg="white.100"
                    border="1px"
                    borderColor="border.100"
                    borderRadius="lg"
                    shadow="lg"
                    p={8}
                    style={{ 
                      mozUserSelect: 'none', 
                      webkitUserSelect: 'none', 
                      msUserSelect: 'none',
                      userSelect: 'none',
                      oUserSelect: 'none'
                    }}
                  >
                    <HStack>
                      <img src={testimonial.avatar} width="24px" />
                      <chakra.h1
                        fontSize="20px"
                        fontWeight="bold"
                      >
                        {testimonial.name}
                      </chakra.h1>
                    </HStack>

                    <chakra.p
                      fontSize="18px"
                      mt={2}
                      textAlign="left"
                    >
                      {testimonial.content}
                    </chakra.p>
                  </Box>

                </Hover>
              </FadeMap>
            ))}
                
          </SimpleGrid>
        </Center>
      </Box>
    </Container>
    )
}

export default Three;