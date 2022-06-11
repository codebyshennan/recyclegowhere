import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiHelpCircle, FiMenu, FiSettings } from 'react-icons/fi'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Layout = ({ children }) => {
  const links = [
    {
      name: 'stats',
      path: 'stats',
    },
    {
      name: 'schedule',
      path: 'schedule',
    },
    {
      name: 'arrange',
      path: 'arrange',
    },
    {
      name: 'leaderboard',
      path: 'leaderboard',
    },
    {
      name: 'rewards',
      path: 'rewards',
    },
  ]
  const router = useRouter()
  const basePath = `/${router.pathname.split('/')[1]}`
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })

  const handleLinkClick = (e, url) => {
    e.preventDefault()
    return router.push(`${basePath}/${url}`)
  }

  return (
    <>
      <Box
        as='section'
        pb={{
          base: '2',
          md: '4',
        }}
      >
        <Box
          as='nav'
          bg='bg-surface'
          boxShadow={useColorModeValue('sm', 'sm-dark')}
        >
          <Container
            py={{
              base: '3',
              lg: '4',
            }}
          >
            <Flex justify='space-between'>
              <HStack spacing='4'>
                {isDesktop && (
                  <ButtonGroup variant='ghost' spacing='1'>
                    {links.map((link) => (
                      <Link key={link.name} href={`${basePath}/${link.path}`}>
                        <Button>{link.name}</Button>
                      </Link>
                    ))}
                  </ButtonGroup>
                )}
              </HStack>
              {isDesktop ? (
                <HStack spacing='4'>
                  <ButtonGroup variant='ghost' spacing='1'>
                    <IconButton
                      icon={<FiSettings fontSize='1.25rem' />}
                      aria-label='Settings'
                      onClick={(e) => handleLinkClick(e, 'help')}
                    />
                    <IconButton
                      icon={<FiHelpCircle fontSize='1.25rem' />}
                      aria-label='Help Center'
                      onClick={(e) => handleLinkClick(e, 'help')}
                    />
                  </ButtonGroup>
                  <Avatar
                    boxSize='10'
                    name='name'
                    // src='https://tinyurl.com/yhkm2ek8'
                  />
                </HStack>
              ) : (
                <IconButton
                  variant='ghost'
                  icon={<FiMenu fontSize='1.25rem' />}
                  aria-label='Open Menu'
                />
                // TODO: implement menu
              )}
            </Flex>
          </Container>
        </Box>
      </Box>
      <Box as='main' display='flex' height='90vh' width='100vw' padding='8'>
        {children}
      </Box>
    </>
  )
}

export default Layout
