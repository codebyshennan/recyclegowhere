import React from 'react'
import Layout from '../../../components/Layout'
import { Box } from '@chakra-ui/react'
import Calendar from 'react-calendar'

const Schedule = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Calendar />
    </Box>
  )
}

Schedule.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Schedule
