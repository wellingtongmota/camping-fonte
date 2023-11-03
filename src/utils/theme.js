import { extendTheme } from "@chakra-ui/react";
import '@fontsource/anton';
// Supports weights 100-900
import '@fontsource-variable/montserrat';
import '@fontsource/poppins';

const theme = extendTheme({
  components: {
    Heading: {
      // 1. We can update the base styles
      baseStyle: {
        letterSpacing: '0.15rem'
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
    },
    Badge: {
      baseStyle: {
        color: 'teal.600',
        bgColor: 'teal.50',
        letterSpacing: '0.05rem',
        borderRadius: 'full',
        paddingInline: '1.25rem',
        paddingBlock: '1rem',
        width: 'fit-content',
        fontFamily: `'Poppins', sans-serif`,
      }
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
      button: `'Montserrat Variable', sans-serif`,
      // badge: `'Poppins', sans-serif`,
    },
  })

export default theme