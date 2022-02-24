import {
    Flex,
    Box
} from "@chakra-ui/react";

import { Padding } from '#spacing'

const Container = (props) => {

    let bg = "background.100";

    if (props.bg === 'secondary') {
        bg = "background.200"
    }

    return (
        <Flex
	      alignItems="center"
	      justifyContent="center"
	      bg={bg}
	      w="auto"
	    >
			<Box
				mx="auto"
				textAlign={{ base: "left", md: "center" }}
				rounded="md"
				w="full"
				px={Padding.container.px}
	      		py={Padding.container.py}
			>
				{props.children}
			</Box>
	    </Flex>
    )
}

export default Container;