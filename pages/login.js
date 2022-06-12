import {
  Input,
  Badge,
  Box,
  Button,
  Heading,
  Img,
  Image,
  Stack,
  HStack,
  useBreakpointValue,
  useColorModeValue as mode,
  Select,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { METAINFO } from '../utils/identity'
import DemoBanner from '../components/Banner'

const Login = () => {
  const [email, setEmail] = useState('')
  const router = useRouter()
  const [_, setCookie] = useCookies(['type'])

  const handleLogin = () => {
    // find email match
    const identities = Object.values(METAINFO)
    const matchedIdentity = identities.filter((id) => id.email === email)

    if (!matchedIdentity || matchedIdentity.length === 0) return
    const identifier = matchedIdentity[0]

    setCookie('type', identifier.type, { path: '/' })
    router.push(identifier.baseUrl)
  }

  return (
    <>
      <DemoBanner />
      <Box
        as='section'
        bg={mode('gray.50', 'gray.800')}
        pb='12'
        pos='relative'
        px={{ base: '6', lg: '12' }}
        height='93vh'
      >
        <Box maxW='7xl' mx='auto'>
          <Box
            maxW={{ lg: 'md', xl: 'xl' }}
            pt={{ base: '20', lg: '40' }}
            pb={{ base: '16', lg: '24' }}
          >
            <HStack
              className='group'
              as='a'
              href='#'
              px='2'
              py='1'
              rounded='full'
              fontSize='sm'
              mb='8'
              display='inline-flex'
              minW='18rem'
            >
              <Badge
                colorScheme='teal'
                alignSelf='start'
                size={useBreakpointValue({ base: 'md', md: 'lg' })}
              >
                RGW x GrabHackForGood
              </Badge>
            </HStack>
            <Stack
              spacing={{ base: '4', md: '6' }}
              maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}
            >
              <Heading size={useBreakpointValue({ base: 'md', md: 'xl' })}>
                <Image src='recyclegowhere.png' width='50%' alt='logo' />
              </Heading>
              {/* <Input
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
              /> */}
              <Select
                placeholder='Select Role'
                color='#319795'
                onChange={(e) => setEmail(e.target.value)}
              >
                {Object.entries(METAINFO).map(([key, val]) => (
                  <option key={key} value={val.email}>
                    {key}
                  </option>
                ))}
              </Select>
            </Stack>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing='4' mt='8'>
              <Button bg={'#319795'} color='white' onClick={handleLogin}>
                Log In
              </Button>
              {/* <Button
                variant='secondary'
                size={useBreakpointValue({ base: 'lg', md: 'xl' })}
              >
                Register
              </Button> */}
            </Stack>
          </Box>

          <Box
            pos={{ lg: 'absolute' }}
            right='0'
            bottom='0'
            w={{ base: 'full', lg: '50%' }}
            height={{ base: '96', lg: 'full' }}
            sx={{
              clipPath: { lg: 'polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)' },
            }}
          >
            <Img
              boxSize='full'
              objectFit='cover'
              src='https://static.thehoneycombers.com/wp-content/uploads/sites/2/2019/07/recycling-in-singapore-main-image.png'
              alt='Recycling Bins'
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Login
