import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie'
import '@fontsource/inter/variable.css'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

// add layout

export const extendedTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  components:{
    Steps,
  }
  // colors: { ...theme.colors, brand: theme.colors.purple },
})

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <CookiesProvider>
      <ChakraProvider theme={extendedTheme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </CookiesProvider>
  )
}

export default App
