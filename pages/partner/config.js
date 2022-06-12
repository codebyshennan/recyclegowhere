import { Box } from '@chakra-ui/react'
import React from 'react'
import Configurations from '../../components/Configurations'
import Layout from '../../components/Layout'

const Config = () => {
  return (
    <Box>
      <Configurations />
    </Box>
  )
}

Config.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Config
