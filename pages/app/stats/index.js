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
} from '@chakra-ui/react'
import StatCell from '../../../components/stat/StatCell'
import { StatMembers } from '../../../components/stat/StatMembers'

const stats = [
  {
    label: 'Lifetime Carbon Offsets',
    value: '71,887 tonnes',
    delta: { value: '320', isUpwardsTrend: true },
  },
  {
    label: 'Avg. Offsets / month',
    value: '56.87 tonnes',
    delta: { value: '2.3%', isUpwardsTrend: true },
  },
  {
    label: 'Avg. Pts Earned / month',
    value: '12.87 pts',
    delta: { value: '0.1%', isUpwardsTrend: true },
  },
]

const Stats = () => {
  return (
    <Stack spacing={{ base: '8', lg: '6' }} maxWidth={'3xl'}>
      <Stack
        spacing='4'
        direction={{ base: 'column', lg: 'row' }}
        justify='space-between'
      ></Stack>
      <Stack spacing={{ base: '5', lg: '6' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} mx='20' gap='6'>
          {stats.map((stat, id) => (
            <StatCell key={id} {...stat} />
          ))}
        </SimpleGrid>
        <Center>
          <StatMembers />
        </Center>
      </Stack>
      <Box
        minH='36'
        bg='bg-surface'
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius='lg'
      />
    </Stack>
  )
}

Stats.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Stats
