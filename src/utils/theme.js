import { extendTheme } from "@chakra-ui/react";
import '@fontsource/anton';
// Supports weights 100-900
import '@fontsource-variable/montserrat';

const theme = extendTheme({
  components: {
    Heading: {
      // 1. We can update the base styles
      baseStyle: {
        letterSpacing: '0.15rem'
      },
    },
  },
    styles: {
      global: {
        // styles for the `span`
        span: {
          color: 'teal.500',
          fontWeight: 'medium'
        },
        body: {
          // letterSpacing: '0.1rem'
        }
      },
    },
    fonts: {
      heading: `'Anton', sans-serif`,
      body: `'Montserrat Variable', sans-serif`,
    },
  })

export default theme