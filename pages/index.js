import * as React from "react";
import * as Constants from "~/common/constants";

import {
    Container,
    Flex,
    Box
} from '@chakra-ui/react'

import LazyLoad from 'react-lazyload';

import { Navbar, Footer } from '~/components/Controller'

import Hero from "~/components/Hero"
import Pricing from "~/components/Pricing"
import Features from "~/components/Features"
import Testimonials from "~/components/Testimonials"
import Three from "~/components/Testimonials/Three"

import Carousel from "~/components/Carousel"
import Contact from "~/components/Contact/Color"

import { css } from "@emotion/react";
import Meta from "~/components/Meta"

const IndexPage = (props) => {
  return (
      <React.Fragment>
        <Meta title={`An all in one website management service`}>
          <Box
            as="section"
            minH="100vh"
            bg="#EFF1F0"
          >
            <Navbar />

            <Hero />

            <LazyLoad height={200} once>
              <Features />
            </LazyLoad>

            <LazyLoad height={200} once>
              <Pricing />
            </LazyLoad>

             <LazyLoad height={200} once>
              <Three />
            </LazyLoad>

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

export default IndexPage;