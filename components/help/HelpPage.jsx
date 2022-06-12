import { Box, Container, Divider, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const HelpPage = () => (
  <Box
    as='section'
    bg='bg-surface'
    pt={{ base: '4', md: '8' }}
    pb={{ base: '12', md: '24' }}
  >
    <Container>
      <Stack spacing='5'>
        <Text fontSize='lg' fontWeight='medium'>
          Member overview
        </Text>

        <Text fontSize='xs'>some lorem</Text>

        <Divider />
      </Stack>
    </Container>
  </Box>
)

export default HelpPage
