import {
  Button,
  Container,
  Divider,
  Input,
  Stack,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { GoogleIcon } from '../components/ProviderIcons'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

const Login = () => {
  const [email, setEmail] = useState('')
  const router = useRouter()
  const [_, setCookie] = useCookies(['type'])

  const handleLogin = () => {
    switch (email) {
      case 'consumer@demo.com':
        setCookie('type', 'USER', { path: '/' })
        router.push('/app')
        break

      case 'grab@demo.com':
        setCookie('type', 'GRAB', { path: '/' })
        router.push('/grab')
        break

      case 'gov@demo.com':
        setCookie('type', 'GOV', { path: '/' })
        router.push('/gov')
        break

      case 'fmcg@demo.com':
        setCookie('type', 'FMCG', { path: '/' })
        router.push('/fmcg')
        break

      default:
        break
    }
  }

  return (
    <Container maxW='md' py={{ base: '12', md: '24' }}>
      <Stack spacing='8'>
        <Stack spacing='6' align='center'>
          {"logo{' '}"}
        </Stack>

        <Input
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant='secondary' onClick={handleLogin}>
          Continue with email
        </Button>

        <Divider />

        {/* <Button
          variant='secondary'
          leftIcon={<GoogleIcon boxSize='5' />}
          iconSpacing='3'
        >
          Continue with Google
        </Button> */}
        {/* <Button variant='link' colorScheme='blue' size='sm'>
        Register
      </Button> */}
      </Stack>
    </Container>
  )
}

export default Login
