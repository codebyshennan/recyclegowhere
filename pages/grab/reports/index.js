import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import FocusedReportCell from '../../../components/reports/FocusedReportCell'
import ReportsList from '../../../components/reports/ReportsList'
import { files } from '../../../components/reports/_data'

const Reports = () => {
  const [fileInfo, setFileInfo] = useState({})

  useEffect(() => {
    setFileInfo(files[0])
  }, [])

  return (
    <Box as='section' py={{ base: '4', md: '8' }}>
      <Container maxW='3xl'>
        <Box
          bg='bg-surface'
          boxShadow={useColorModeValue('sm', 'sm-dark')}
          borderRadius='lg'
          p={{ base: '4', md: '6' }}
        >
          <FocusedReportCell file={fileInfo} />
          <ReportsList data={files} setFileInfo={setFileInfo} />
        </Box>
      </Container>
    </Box>
  )
}

Reports.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Reports
