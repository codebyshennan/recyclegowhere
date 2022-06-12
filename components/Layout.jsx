import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  HStack,
  Image,
  IconButton,
  Link,
  List,
  Stack,
  Icon,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  AvatarBadge,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FiHelpCircle, FiMenu, FiSettings } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { LINKS } from '../utils/links'
import { METAINFO } from '../utils/identity'

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [cookies] = useCookies(['type'])
  const [userLinks, setUserLinks] = useState([])
  const [metaInfo, setMetaInfo] = useState({})
  const router = useRouter()
  const basePath = `/${router.pathname.split('/')[1]}`
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })

  useEffect(() => {
    setUserLinks(LINKS[cookies.type])
    setMetaInfo(METAINFO[cookies.type])

    return () => {
      setUserLinks([])
      setMetaInfo({})
    }
  }, [cookies])

  const handleLinkClick = (e, url) => {
    e.preventDefault()
    return router.push(`${basePath}/${url}`)
  }

  const handleMenuOpen = () => {
    onOpen()
  }

  return (
    <>
      <Box
        as='section'
        pb={{
          base: '1',
          md: '3',
        }}
      >
        <Box
          as='nav'
          bg={metaInfo.bg}
          boxShadow={useColorModeValue('sm', 'sm-dark')}
        >
          <Container
            py={{
              base: '2',
              lg: '3',
            }}
          >
            <HStack spacing='8' justify='space-around'>
              <Image
                src='/unclesemakau.png'
                alt='Uncle Semakau'
                boxSize='50px'
                objectFit='cover'
              />
              {isDesktop && (
                <ButtonGroup variant='ghost' spacing='8'>
                  {userLinks.map((link) => (
                    <Link key={link.name} href={`${basePath}/${link.path}`}>
                      <Button>{link.name}</Button>
                    </Link>
                  ))}
                </ButtonGroup>
              )}
              {isDesktop ? (
                <HStack spacing='8' justify='space-between'>
                  <ButtonGroup variant='ghost' spacing='3'>
                    <IconButton
                      icon={<FiSettings fontSize='1.25rem' />}
                      aria-label='Settings'
                      onClick={(e) => handleLinkClick(e, 'config')}
                    />
                    <IconButton
                      icon={<FiHelpCircle fontSize='1.25rem' />}
                      aria-label='Help Center'
                      onClick={(e) => handleLinkClick(e, 'help')}
                    />
                  </ButtonGroup>
                  <Avatar
                    boxSize='10'
                    name={METAINFO[cookies.type].name}
                    onClick={() => router.push('profile')}
                  >
                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                  </Avatar>
                </HStack>
              ) : (
                <>
                  <IconButton
                    variant='ghost'
                    icon={<FiMenu fontSize='1.25rem' />}
                    aria-label='Open Menu'
                    onClick={handleMenuOpen}
                  />
                  <Drawer onClose={onClose} isOpen={isOpen} size='xs'>
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>RecycleGoWhere</DrawerHeader>
                      <DrawerBody>
                        <List spacing={10}>
                          {userLinks.map((link) => (
                            <Link
                              variant='menu'
                              href={`${basePath}/${link.path}`}
                              key={link.name}
                            >
                              <Stack spacing='4' direction='row' p='3'>
                                <Icon
                                  as={link.icon}
                                  boxSize='6'
                                  color='accent'
                                />
                                <Stack spacing='1'>
                                  <Text fontWeight='medium'>{link.name}</Text>
                                  <Text fontSize='sm' color='muted'>
                                    {/* {link.description} */}
                                  </Text>
                                </Stack>
                              </Stack>
                            </Link>
                          ))}
                        </List>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </>
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
      <Box as='main' display='flex' width='100vw' justifyContent='center'>
        {children}
      </Box>
    </>
  )
}

export default Layout
