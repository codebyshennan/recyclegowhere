import React from 'react'
import Layout from '../../components/Layout'

const Help = () => {
  return <div>Help</div>
}

Help.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Help
