import React from 'react'
import Layout from '../../components/layout'

const GovApp = () => {
  return <div>GovApp</div>
}

GovApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default GovApp
