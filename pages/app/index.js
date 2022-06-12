import React from 'react'
import Layout from '../../components/Layout'

const CustomerApp = () => {
  return <div>CustomerApp</div>
}

CustomerApp.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default CustomerApp
