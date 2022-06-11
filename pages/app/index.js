import React from 'react'
import Layout from '../../components/layout'

const index = () => {
  return <div>index</div>
}

index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default index
