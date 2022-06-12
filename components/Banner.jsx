import {
  Box,
  CloseButton,
  Container,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const DemoBanner = () => (
  <Box as='section'>
    <Box bg='teal' color='white' position='sticky'>
      <Container py={{ base: '4', md: '3.5' }}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify='center'
          spacing={{ base: '0.5', md: '1.5' }}
          pe={{ base: '4', sm: '0' }}
        >
          <Text fontWeight='medium'>This is a demo site.</Text>
        </Stack>
      </Container>
    </Box>
  </Box>
)

export default DemoBanner
