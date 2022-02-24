import * as React from "react";
import LazyLoad from 'react-lazyload';
import * as Constants from "~/common/constants";

import { Flex, Box } from '@chakra-ui/react'

import { Navbar, Footer } from '~/components/Controller'

import FeaturesLarge from "~/components/Features/Large"
import Contact from "~/components/Contact/Color"

import { Header } from '#text'
import { Container } from '#layout'
import { css } from "@emotion/react";
import Meta from "~/components/Meta"

const FeaturesPage = (props) => {
  return (
      <React.Fragment>
        <Meta title={`Features`}>
          <Box
            as="section"
            minH="100vh"
            bg="#EFF1F0"
          >
    
            <Navbar />
            <Container bg="secondary">
              <Header
                header="A fully managed website,"
                headerSecond="one afforable subscription."
                subHeader="Every AlpineUX website includes:"
              />
            </Container>

            <FeaturesLarge />

            <LazyLoad height={200} once>
              <Contact />
            </LazyLoad>

            <LazyLoad height={200} once>
              <Footer />
            </LazyLoad>
        </Box>
      </Meta>
    </React.Fragment>
  );
}

export default FeaturesPage;