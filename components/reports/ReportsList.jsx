import { Box, Center, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'

const ReportsList = ({ data, setFileInfo }) => {
  const handleFileSelect = (file) => {
    setFileInfo(file)
  }

  return (
    <Center maxW='sm' mx='auto' py={{ base: '4', md: '8' }}>
      <Box bg='bg-surface' py='4'>
        <Stack divider={<StackDivider />} spacing='4'>
          {data.map((file) => (
            <Stack
              key={file.id}
              fontSize='sm'
              px='4'
              spacing='0.5'
              onClick={() => handleFileSelect(file)}
            >
              <Box>
                <Text fontWeight='medium' color='emphasized'>
                  {file.title}
                </Text>
                <Text color='subtle'>Published {file.subtitle}</Text>
              </Box>
              <Text
                color='muted'
                sx={{
                  '-webkit-box-orient': 'vertical',
                  '-webkit-line-clamp': '2',
                  overflow: 'hidden',
                  display: '-webkit-box',
                }}
              >
                {file.description}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Center>
  )
}

export default ReportsList
