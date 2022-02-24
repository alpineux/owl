import React from "react";
import { 
	Box,
	chakra,
	Stack,
	VStack, 
	Grid, 
	GridItem,
	Stat,
	StatHelpText,
	StatArrow,
	CircularProgress,
	CircularProgressLabel
} from '@chakra-ui/react';

import { FadeMap, Hover } from '#animation'

const Performance = (props) => {
	return(
		<Box mb={40}>
          <chakra.h1 
            fontWeight="bold" 
            fontSize="40px" 
            textAlign="left"
            mb={4}
          >
            <Stack direction={['column', 'row']} spacing="16px">
              <Box pt={3}>
                {props.data.icon}
              </Box>
              <Box>
                {props.data.title}
              </Box>
            </Stack>
          </chakra.h1>

          <Grid
            h='auto'
            w="100%"
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(4, 1fr)'
            gap={4}
          >

            <GridItem colSpan={1} p={8} align="center" bg='background.200' borderRadius="lg" shadow="md">
              <VStack
                spacing={4}
                align='stretch'
              >
                <chakra.h2 fontWeight="bold">Your {props.data.short}</chakra.h2>

                <Hover>
	                <CircularProgress value={props.data.myScore} color='#F5624D' size="100px">
	                  <CircularProgressLabel>{props.data.myScore}</CircularProgressLabel>
	                </CircularProgress>
                </Hover>
                {/* <Stat>
                  <StatHelpText>
                    <StatArrow type='decrease' />
                    25%
                  </StatHelpText>
                </Stat> */}
              </VStack>
            </GridItem>


            <GridItem colSpan={1} p={8} align="center"  bg='background.200' borderRadius="lg" shadow="md">
              <VStack
                spacing={4}
                align='stretch'
              >
                <chakra.h2 fontWeight="bold">Compeitors {props.data.short}</chakra.h2>

                <Hover>
	                <CircularProgress value={props.data.compScore} color='alert.success' size="100px">
	                  <CircularProgressLabel>{props.data.compScore}</CircularProgressLabel>
	                </CircularProgress>
                </Hover>
              </VStack>
            </GridItem>

            <GridItem 
              colSpan={2} 
              textAlign="left" 
              p={8} 
              bg='background.100' 
            >
              <chakra.p fontWeight="noraml" fontSize="xl">
                {props.data.description}
                <Stat fontSize="lg" mt={8}>
                  <StatHelpText>
                    Difference: {` `} 
                    <StatArrow type='decrease' />
                    {props.data.difference}%
                  </StatHelpText>
                </Stat>
              </chakra.p>
            </GridItem>
          </Grid>

          <chakra.p textAlign="left" fontSize="lg" fontWeight="light" color="black.100" mt={6}>
            We can increase your {props.data.short} to over 90. Contact us
          </chakra.p>
        </Box>
	);
}

export default Performance;

