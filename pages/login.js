import { Button, Container, Divider, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Logo } from '../components/Logo'
import { GoogleIcon } from '../components/ProviderIcons'
import { useRouter } from 'next/router'

const Login = () => {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    switch (email) {
      case 'consumer@demo.com':
        router.push('/app')
        break

      case 'grab@demo.com':
        router.push('/grab')
        break

      case 'gov@demo.com':
        router.push('/gov')
        break

      case 'fmcg@demo.com':
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
          <Logo />
        </Stack>
        <Stack spacing='6'>
          <Stack spacing='4'>
            <Input
              placeholder='Enter your email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant='primary' onClick={handleLogin}>
              Continue with email
            </Button>
          </Stack>

          <Divider />

          <Button
            variant='secondary'
            leftIcon={<GoogleIcon boxSize='5' />}
            iconSpacing='3'
          >
            Continue with Google
          </Button>
        </Stack>
        {/* <Button variant='link' colorScheme='blue' size='sm'>
        Register
      </Button> */}
      </Stack>
    </Container>
  )
}

export default Login
