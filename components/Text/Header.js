import {
    chakra,
    Box,
    Text,
} from "@chakra-ui/react";

const Header = (props) => {
    return (
        <Box w={['full', , '750px']} mx="auto" align="center" py={14}>
          <Text
            mb={2}
            fontSize="5xl"
            fontWeight="bold"
            lineHeight="tight"
            color="primary.5000"
          >
            {props.header} 

            {props.headerSecond &&
              <span><br />{props.headerSecond}</span>
            }

          </Text>
          <chakra.p
            fontSize={["lg", , "xl"]}
            color="white.500"
          >
            {props.subHeader}
          </chakra.p>
        </Box>
    );
}

export default Header;