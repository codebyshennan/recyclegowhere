import {
    Box,
    Container,
    HStack,
    IconButton,
    Text,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiMoreVertical } from 'react-icons/fi'
  
  export const Banner = () => (
    <Box as="section" pt={{ base: '4', md: '8' }} >
      <Container>
        <Box
          bg="bg-surface"
          px={{ base: '4', md: '6' }}
          py="5"
          boxShadow={useColorModeValue('sm', 'sm-dark')}
          borderTopWidth="4px"
          borderColor="accent"
        >
          <HStack spacing="4" direction="row" justify="space-between">
            <Text fontSize="lg" fontWeight="medium">
              Leaderboard of Top Members
            </Text>
            {/* <IconButton
              size={useBreakpointValue({ base: 'sm', sm: 'md' })}
              variant="ghost"
              icon={<FiMoreVertical fontSize="1.25rem" />}
              aria-label="Open context menu"
            /> */}
          </HStack>
        </Box>
      </Container>
    </Box>
  )