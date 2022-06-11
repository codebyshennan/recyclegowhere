import React from 'react'
import Layout from '../../components/layout'

const help = () => {
  return <div>help</div>
}

help.getLayout = function getLayout(page) {
  return (
    <Layout
      links={[
        {
          name: 'test',
          link: '/app',
        },
      ]}
    >
      {page}
    </Layout>
  )
}

export default help
