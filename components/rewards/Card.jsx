import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'

export const Card = () => (
  <Box
    as='section'
    py={{
      base: '4',
      md: '8',
    }}
  >
    <Container maxW='3xl'>
      <Box
        bg='bg-surface'
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius='lg'
        p={{
          base: '4',
          md: '6',
        }}
      >
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={{
            base: '5',
            md: '6',
          }}
          justify='space-between'
        >
          <Stack spacing='1'>
            <Text fontSize='lg' fontWeight='medium'>
              2000 Points Available
            </Text>
            <Text fontSize='sm' color='muted'>
              You have accumulated 2000 points from your efforts in recycling!
            </Text>
          </Stack>
          <Box>
            <Button>Check</Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  </Box>
)
