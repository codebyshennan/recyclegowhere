import React from 'react'
import Layout from '../../components/Layout'

const FMCGApp = () => {
  return <div>FMCGApp</div>
}

FMCGApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default FMCGApp
