import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { CookiesProvider } from 'react-cookie'
import '@fontsource/inter/variable.css'

// add layout

export const extendedTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
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
