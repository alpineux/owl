import * as React from "react";
import * as Constants from "~/common/constants";
import Meta from "~/components/Meta"

import { 
  Box,
  Text,
  chakra
} from '@chakra-ui/react'

import { 
  RiTimerFlashLine, 
  RiFileSearchLine, 
  RiSmartphoneLine, 
  RiComputerLine 
} from "react-icons/ri"

import { Navbar, Footer } from '~/components/Controller'
import Contact from "~/components/Contact/Color"
import Performance from "~/components/Performance"

import { Header } from '#text'
import { Container } from '#layout'
import { FadeMap } from '#animation'

import LazyLoad from 'react-lazyload';

import * as Get from "~/lib/data/fetch"

const ReportPage = (props) => {

  function diffCalculator(A, B) {
    let percDiff =  100 * Math.abs( (A - B) / ( (A+B)/2 ) );
    let rounded = Math.round(percDiff * 10) / 10
    return rounded;
  }

  let report = {
    speed: props.report.categories.performance.score*100,
    seo: props.report.categories.seo.score*100,
    practices: props.report.categories["best-practices"].score*100,
  }

  let competitor = {
    speed: 90,
    seo: 95,
    practices: 98
  }

  let diff = {
    speed: diffCalculator(competitor.speed, report.speed),
    seo: diffCalculator(competitor.seo, report.seo),
    practices: diffCalculator(competitor.practices, report.practices),
  }

  let charts = [
    {
      title: "Page speed",
      score: report.speed,
      diff: diff.speed
    },
    {
      title: "SEO score",
      score: report.seo,
      diff: diff.seo
    },
    {
      title: "Best practices",
      score: report.practices,
      diff: diff.practices
    }
  ]

  let section = [
    {
      title: "Desktop performance",
      short: "performance",
      icon: <RiComputerLine />,
      description: "A measurment of how long it takes a page to become fully interactive. Sites performing in the ninety-ninth percentile render in about 2.2 seconds.",
      difference: 24,
      myScore: 52,
      compScore: 98
    },
    {
      title: "Mobile performance",
      short: "performance",
      icon: <RiSmartphoneLine />,
      description: "A measurment of how long it takes a page to become fully interactive. Sites performing in the ninety-ninth percentile render in about 2.2 seconds.",
      difference: 59,
      myScore: 32,
      compScore: 87
    },
    {
      title: "SEO score",
      short: "SEO",
      icon: <RiFileSearchLine />,
      description: "A measurment of how long it takes a page to become fully interactive. Sites performing in the ninety-ninth percentile render in about 2.2 seconds.",
      difference: 15,
      myScore: 62,
      compScore: 92
    }
  ]

  return (
    <React.Fragment>
      <Meta title={`Performance report for Banff Lodging Company`}>
        <Box
          as="section"
          minH="100vh"
          bg="#EFF1F0"
        >
          <Navbar />

          <Container bg="secondary">
            <Header
              header="Performance report for"
              headerSecond="Banff Lodging Company."
              subHeader="Website compairson between your nearest compeitor."
            />
          </Container>

          <Container>
            {section.map((item, index) => (
              <LazyLoad height={200} once>
                <FadeMap index={index}>
                  <Performance data={item} last={section.length} index={index+1} />
                </FadeMap>
              </LazyLoad>
            ))}
          </Container>

          <LazyLoad height={200} once>
            <Contact />
          </LazyLoad>

          <Footer />

        </Box>
      </Meta>
    </React.Fragment>
  );
}

ReportPage.getInitialProps = async () => {
  const report = await Get.Report({ slug: 'banff-lodging-company' });

  return { 
    report: report
  };
};

export default ReportPage;
