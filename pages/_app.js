import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
// import { theme } from '@chakra-ui/pro-theme'
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
    <ChakraProvider theme={extendedTheme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default App
