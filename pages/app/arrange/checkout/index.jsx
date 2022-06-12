import {
  Box,
  Flex,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Center,
  Container,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import React from 'react'
import { PaymentInformation } from '../../../../components/checkout/PaymentInformation'
import { ShippingInformation } from '../../../../components/checkout/ShippingInformation'
import { ShippingMethod } from '../../../../components/checkout/ShippingMethod'
import { OrderSummary } from '../../../../components/checkout/OrderSummary'
import Layout from '../../../../components/Layout'
import Calendar from 'react-calendar'

const Checkout = () => {
  // const [items, setItems] = useState({id: 0, description: 'Bodywash Bottle', category: 'Container for Contents', bluebinrecyclable: 0, isCleaned: true})
  // const [latlng, setLatlng] = useState([0,0])
  const [value, setValue] = useState(new Date())
  const router = useRouter()
  const encode = router.query.code
  console.log(encode)
  let items = [
    {
      id: 0,
      description: 'Null',
      category: 'Null',
      bluebinrecyclable: 0,
      isCleaned: true,
    },
  ]
  let latlng = [0, 0]
  if (encode == undefined) {
    console.log('no')
  } else {
    items = JSON.parse(atob(router.query.item))
    latlng = router.query.code
  }

  return (
    <Box
      height='100%'
      bgGradient={useColorModeValue(
        'linear(to-l, gray.50 50%, white 50%)',
        'linear(to-l, gray.700 50%, gray.800 50%)'
      )}
    >
      <Flex maxW='8xl' mx='auto' direction={{ base: 'column', md: 'row' }}>
        <Box
          flex='1'
          bg={useColorModeValue('white', 'gray.800')}
          px={{ base: '4', md: '8', lg: '12', xl: '20' }}
        >
          <Center>
            <Stack spacing={{ base: '16', lg: '20' }} textAlign={'center'}>
              {/* <ShippingInformation />
              <ShippingMethod />
              <PaymentInformation /> */}

              <Box>
                <div
                  as='section'
                  pt={{ base: '4', md: '8' }}
                  pb={{ base: '12', md: '24' }}
                >
                  <Container my={5}>
                    <Box
                      bg='bg-surface'
                      px={{ base: '4', md: '6' }}
                      py='5'
                      boxShadow={useColorModeValue('sm', 'sm-dark')}
                      borderTopWidth='4px'
                      borderColor='accent'
                    >
                      <Stack spacing='1'>
                        <Text fontSize='lg' fontWeight='medium'>
                          Delivery overview
                        </Text>
                        <Text color='muted' fontSize='sm'>
                          Summary of your delivery
                        </Text>
                      </Stack>
                    </Box>
                  </Container>
                </div>{' '}
                <div>
                  <strong>Your location:</strong> <br /> Lat: {latlng[0]} <br />{' '}
                  Long: {latlng[1]}
                  <br />
                  <br />
                  {items.map((ite, idx) => (
                    <div key={`${ite.category}-${idx}`}>
                      <p>
                        <strong>Your Items:</strong>
                      </p>
                      <p>Description: {ite.description}</p>
                      <p>Category: {ite.category}</p>
                      <p>-</p>
                    </div>
                  ))}
                </div>
                <br />
                <div>
                  <span>
                    <strong>Date of collection:</strong>
                  </span>
                  <Calendar onChange={setValue} value={value} />
                </div>
              </Box>
            </Stack>
          </Center>
        </Box>
        <Box
          flex='1'
          maxW={{ lg: 'md', xl: '40rem' }}
          bg={useBreakpointValue({
            base: useColorModeValue('white', 'gray.800'),
            md: 'inherit',
          })}
          px={{ base: '4', md: '8', lg: '12', xl: '20' }}
          py={{ base: '6', md: '8', lg: '12', xl: '20' }}
        >
          <OrderSummary />
        </Box>
      </Flex>
    </Box>
  )
}

Checkout.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Checkout
