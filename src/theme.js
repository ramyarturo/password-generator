// 1. Import the extendTheme function
import {extendTheme} from "@chakra-ui/react"
import {mode} from "@chakra-ui/theme-tools";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
        100: "#d01616"
    },
}

const theme = extendTheme({
    colors,
    styles: {
        global: (props) => ({
                body: {
                    backgroundColor: mode("white.100", "gray.800")(props)
                },
                ".card": {
                    backgroundColor: mode("blue.50", "gray.700")(props),
                },
                ".chakra-slider": {
                    color: mode("black", "white")
                }
            }
        )
    },

})

export default theme