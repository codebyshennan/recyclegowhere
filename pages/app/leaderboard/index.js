import React from 'react'
import Layout from '../../../components/Layout'
import DataTable from '../../../components/leaderboard/DataTable'

const Leaderboard = () => {
  return <DataTable />
}

Leaderboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Leaderboard
