import React from 'react'
import Layout from '../../components/Layout'
import HelpPage from '../../components/help/HelpPage'

const Help = () => {
  return <HelpPage />
}

Help.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Help
