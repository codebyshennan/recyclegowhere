import React from 'react'
import Layout from '../../../components/Layout'
import DataTable from '../../../components/database/DataTable'
import { Box } from '@chakra-ui/react'

const Database = () => {
  return (
    <Box mt={10}>
      <DataTable />
    </Box>
  )
}

Database.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Database
