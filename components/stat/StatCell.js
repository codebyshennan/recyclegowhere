import {
  Badge,
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'

const StatCell = (props) => {
  const { label, value, delta, ...boxProps } = props
  return (
    <Box
      px={{ base: '4', md: '6' }}
      py={{ base: '5', md: '6' }}
      bg='bg-surface'
      borderRadius='lg'
      boxShadow={useColorModeValue('sm', 'sm-dark')}
      {...boxProps}
    >
      <Stack>
        <HStack justify='space-between'>
          <Text fontSize='sm' color='muted'>
            {label}
          </Text>
        </HStack>
        <HStack justify='space-between'>
          <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
            {value}
          </Heading>
          <Badge
            variant='subtle'
            colorScheme={delta.isUpwardsTrend ? 'green' : 'red'}
          >
            <HStack spacing='1'>
              <Icon
                as={delta.isUpwardsTrend ? FiArrowUpRight : FiArrowDownRight}
              />
              <Text>{delta.value}</Text>
            </HStack>
          </Badge>
        </HStack>
      </Stack>
    </Box>
  )
}

export default StatCell
