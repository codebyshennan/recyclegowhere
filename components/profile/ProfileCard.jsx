import React from 'react'
import { CardContent } from './CardContent'
import { CardWithAvatar } from './CardWithAvatar'
import { UserInfo } from './UserInfo'
import { HiPencilAlt } from 'react-icons/hi'
import { Button, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const ProfileCard = ({ profile }) => {
  return (
    <CardWithAvatar
      maxW='xl'
      avatarProps={{
        name: profile.name,
      }}
      action={
        <Button size='sm' leftIcon={<HiPencilAlt />}>
          Edit
        </Button>
      }
    >
      <CardContent>
        <Heading size='lg' fontWeight='extrabold' letterSpacing='tight'>
          {profile.name}
        </Heading>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>
          {profile.callsign}
        </Text>
        <UserInfo
          location={profile.location}
          website='27 kg^3 recycled'
          memberSince={profile.joinDate}
        />
      </CardContent>
    </CardWithAvatar>
  )
}

export default ProfileCard
