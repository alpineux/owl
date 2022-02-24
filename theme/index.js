export const themes = {

    fonts: {
        heading: 'Helvetica Neue',
        body: "Helvetica Neue"
    },

    colors: {

        background: {
            100: "#fff",
            200: "#EFF1F0"
        },

        primary: {
            100: "#EFF1F0",
            200: "#8D9D94",
            300: "#5C7366",
            400: "#37453D",
            500: "#252E29"
        },

        white: {
            100: "#ffffff",
            200: "#eaecea",
            300: "#d6dad4",
            400: "#c1c7bf",
            500: "#acb5a9"
        },

        black: {
            100: "#0f1210",
            200: "#0b0e0c",
            300: "#070908",
            400: "#040504",
            500: "#000000",
        },

        border: {
            100: "#eff1f0",
            200: "#bfc1c0",
            300: "#8f9190",
            400: "#606060",
            500: "#303030",
        },

        alert: {
            "warning": "#9e5c4d",
            "info": "#4185f4",
            "success": "#00C67A"
        },
    }
}

export const components = {
    components: {

        Button: {
            variants: {
                "primary": {
                    bg: "primary.300",
                    color: "primary.100",
                    _hover: {
                        bg: "primary.400"
                    }
                },

                "secondary": {
                    bg: "primary.500",
                    color: "primary.100",
                    _hover: {
                        bg: "black.100"
                    }
                },

                "primary-outline": {
                    bg: "primary.100",
                    color: "primary.500",
                    border: "1px",
                    borderColor: "primary.500",
                },

                "primary-nooutline": {
                    bg: "transparent",
                    color: "primary.500",
                    _hover: {
                        color: "primary.400"
                    }
                },

            },
        },

    },
}