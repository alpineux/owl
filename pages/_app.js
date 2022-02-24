import * as React from "react";

import { Global } from "@emotion/react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { themes, components } from "~/theme"
import App from "next/app";

function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
          <ChakraProvider theme={extendTheme(themes, components)}>
            <Component {...pageProps} />
          </ChakraProvider>
        </React.Fragment>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
};

export default MyApp;