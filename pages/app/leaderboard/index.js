import React from 'react'
import Layout from '../../../components/Layout'
import { Box } from '@chakra-ui/react'
import DataTable from '../../../components/leaderboard/DataTable'

const Leaderboard = () => {
  return (
    <Box mt={10}>
      <DataTable />
    </Box>
  )
}

Leaderboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Leaderboard
