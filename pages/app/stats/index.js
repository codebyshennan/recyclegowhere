import React from 'react'
import Layout from '../../../components/Layout'
import {
  Text,
  Heading,
  Box,
  SimpleGrid,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import StatCell from '../../../components/stat/StatCell'

const stats = [
  {
    label: 'Total Subscribers',
    value: '71,887',
    delta: { value: '320', isUpwardsTrend: true },
  },
  {
    label: 'Avg. Open Rate',
    value: '56.87%',
    delta: { value: '2.3%', isUpwardsTrend: true },
  },
  {
    label: 'Avg. Click Rate',
    value: '12.87%',
    delta: { value: '0.1%', isUpwardsTrend: false },
  },
]

const Stats = () => {
  return (
    <Stack spacing={{ base: '8', lg: '6' }}>
      <Stack
        spacing='4'
        direction={{ base: 'column', lg: 'row' }}
        justify='space-between'
      >
        <Stack spacing='1'>
          <Heading
            size={useBreakpointValue({ base: 'xs', lg: 'sm' })}
            fontWeight='medium'
          >
            Statistics
          </Heading>
          <Text color='muted'>All important metrics at a glance</Text>
        </Stack>
      </Stack>
      <Stack spacing={{ base: '5', lg: '6' }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap='6'>
          {stats.map((stat, id) => (
            <StatCell key={id} {...stat} />
          ))}
        </SimpleGrid>
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
