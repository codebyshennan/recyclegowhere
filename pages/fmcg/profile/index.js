import { Box } from '@chakra-ui/react'
import React from 'react'
import Layout from '../../../components/Layout'
import ProfileCard from '../../../components/profile/ProfileCard'
import { METAINFO } from '../../../utils/identity'

const Profile = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' mt={10}>
      <ProfileCard profile={METAINFO['FMCG']} />
    </Box>
  )
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Profile
