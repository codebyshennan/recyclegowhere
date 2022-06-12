import {
  Box,
  Button,
  HStack,
  Icon,
  Square,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { FiFileText } from 'react-icons/fi'

const FocusedReportCell = ({ file }) => {
  return (
    <Stack spacing='5'>
      <Stack spacing='1'>
        <Text fontSize='lg' fontWeight='medium'>
          {file.title}
        </Text>
        <Text fontSize='sm' color='muted'>
          Month of {file.subtitle}
        </Text>
      </Stack>
      <Box
        borderWidth={{ base: '0', md: '1px' }}
        p={{ base: '0', md: '4' }}
        borderRadius='lg'
      >
        <Stack
          justify='space-between'
          direction={{ base: 'column', md: 'row' }}
          spacing='5'
        >
          <HStack spacing='3'>
            <Square size='10' bg='bg-subtle' borderRadius='lg'>
              <Icon as={FiFileText} boxSize='5' />
            </Square>
            <Box fontSize='sm'>
              <Text color='empahsized' fontWeight='medium'>
                {file.fileName}
              </Text>
              <Text color='muted'>{file.fileSize}</Text>
            </Box>
          </HStack>
          <Stack spacing='3' direction={{ base: 'column-reverse', md: 'row' }}>
            <Button variant='secondary'>Download</Button>
            <Button variant='primary'>View</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

export default FocusedReportCell
