import {
  Box,
  Container,
  Stack,
  StackDivider,
  Switch,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

export const notifications = [
  {
    type: 'Email',
    description: 'Receive email updates on comments you followed',
    isActive: true,
  },
  {
    type: 'Text messages',
    description: 'Receive updates by SMS',
    isActive: false,
  },
  {
    type: 'Browser',
    description: "We'll send via our desktop or mobile app",
    isActive: true,
  },
]

const Config = () => (
  <Box as='section' py={{ base: '4', md: '8' }}>
    <Container maxW='3xl'>
      <Box
        bg='bg-surface'
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius='lg'
        p={{ base: '4', md: '6' }}
      >
        <Stack spacing='5' divider={<StackDivider />}>
          <Stack spacing='1'>
            <Text fontSize='lg' fontWeight='medium'>
              Notifications
            </Text>
            <Text fontSize='sm' color='muted'>
              Receive notifications about Chakra UI updates.
            </Text>
          </Stack>
          {notifications.map((notifcation, id) => (
            <Stack key={id} justify='space-between' direction='row' spacing='4'>
              <Stack spacing='0.5' fontSize='sm'>
                <Text color='emphasized' fontWeight='medium'>
                  {notifcation.type}
                </Text>
                <Text color='muted'>{notifcation.description}</Text>
              </Stack>
              <Switch defaultChecked={notifcation.isActive} />
            </Stack>
          ))}
        </Stack>
      </Box>
    </Container>
  </Box>
)

export default Config
