import React from 'react'
import Layout from '../../components/Layout'

const GrabApp = () => {
  return <div>GrabApp</div>
}

GrabApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default GrabApp
