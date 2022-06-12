import { Box } from '@chakra-ui/react'
import React from 'react'
import Config from '../../components/Config'
import Layout from '../../components/Layout'

const config = () => {
  return (
    <Box>
      <Config />
    </Box>
  )
}

config.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default config
