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
  Flex,
  HStack,
  IconButton,
  List,
  ListItem,
  ListIcon,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiHelpCircle, FiMenu, FiSettings } from 'react-icons/fi'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { MdCheckCircle, MdSettings } from 'react-icons/md'
import { useCookies } from 'react-cookie'
import { LINKS } from '../utils/links'
import { METAINFO } from '../data/mockUserData'

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [cookie] = useCookies(['type'])
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

  const handleMenuOpen = () => {
    onOpen()
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
                    {LINKS[cookie.type].map((link) => (
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
                    name={METAINFO[cookie.type].name}
                    // src={METAINFO[cookie.type].img}
                  />
                </HStack>
              ) : (
                <>
                  <IconButton
                    variant='ghost'
                    icon={<FiMenu fontSize='1.25rem' />}
                    aria-label='Open Menu'
                    onClick={handleMenuOpen}
                  />
                  <Drawer onClose={onClose} isOpen={isOpen} size='full'>
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader>RecycleGoWhere</DrawerHeader>
                      <DrawerBody>
                        <List spacing={10}>
                          {LINKS[cookie.type].map((link) => (
                            <Link
                              key={link.name}
                              href={`${basePath}/${link.path}`}
                            >
                              <ListItem
                                key={link.name}
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='lg'
                                onClick={onClose}
                                _hover={{
                                  background: 'white',
                                  color: 'teal.500',
                                }}
                              >
                                <ListIcon as={link.icon} />
                                {link.name}
                              </ListItem>
                            </Link>
                          ))}
                        </List>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </>
              )}
            </Flex>
          </Container>
        </Box>
      </Box>
      <Box
        as='main'
        display='flex'
        height='90vh'
        width='100vw'
        justifyContent='center'
        alignItems='center'
      >
        {children}
      </Box>
    </>
  )
}

export default Layout;
