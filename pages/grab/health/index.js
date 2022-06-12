import React from 'react'
import Layout from '../../../components/Layout'
import {
  Text,
  Center,
  Heading,
  Box,
  SimpleGrid,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Button,
  Progress,
} from '@chakra-ui/react'
import StatCell from '../../../components/stat/StatCell'

const stats = [
  {
    label: 'Status',
    value: 'Healthy',
    delta: { value: 'OK', isUpwardsTrend: true },
  },
]

const Health = () => {
  return (
    <Stack spacing={{ base: '8', lg: '6' }} maxWidth={'3xl'}>
      <Stack
        spacing='4'
        direction={{ base: 'column', lg: 'row' }}
        justify='space-between'
        mt={10}
      ></Stack>
      <Stack spacing={{ base: '5', lg: '6' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} mx='20' gap='6'>
          {stats.map((stat, id) => (
            <StatCell key={id} {...stat} />
          ))}
          <Stack spacing={5} justify='center'>
            <Text fontSize='xs' py='0'>
              GrabExpress Integration
            </Text>
            <Progress colorScheme='green' size='lg' value={100} />
            <Text fontSize='xs' py='0'>
              Uptime
            </Text>
            <Progress colorScheme='green' size='lg' value={99} />
          </Stack>
        </SimpleGrid>
      </Stack>
    </Stack>
  )
}

Health.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Health
