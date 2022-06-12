import { Box, Container, Divider, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { QnA } from './QnA'

const HelpPage = () => (
  <Box
    as='section'
    bg='bg-surface'
    pt={{ base: '4', md: '8' }}
    pb={{ base: '12', md: '24' }}
  >
    <Container>
      <Stack spacing='5'>
        <Image src='/recyclegowhere.png' alt='Logo' />
        {QnA.map((obj) => {
          return (
            <>
              <Text fontSize='lg' fontWeight='medium'>
                {obj.q}
              </Text>

              <Text fontSize='xs'>{obj.a}</Text>

              <Divider />
            </>
          )
        })}
      </Stack>
    </Container>
  </Box>
)

export default HelpPage
