import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import dynamic from 'next/dynamic'

// disable server side rendering
// https://github.com/vercel/next.js/discussions/35773#discussioncomment-2840696
const MemberTable = dynamic(() => import('./MemberTable.js'), {
  ssr: false,
})

const DataTable = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  })

  return (
    <Container
      py={{
        base: 4,
        md: 8,
      }}
      px={{
        base: 0,
        md: 8,
      }}
      maxW='100vw'
    >
      <Box
        bg='bg-surface'
        boxShadow={{
          base: 'none',
          md: 'sm',
        }}
        borderRadius={useBreakpointValue({
          base: 'none',
          md: 'lg',
        })}
        width='100%'
      >
        <Stack spacing='5'>
          <Box
            px={{
              base: '4',
              md: '6',
            }}
            pt='5'
          >
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
            >
              <InputGroup maxW='xs'>
                <InputLeftElement pointerEvents='none'>
                  <Icon as={FiSearch} color='muted' boxSize='5' />
                </InputLeftElement>
                <Input placeholder='Search' />
              </InputGroup>
            </Stack>
          </Box>
          <Box overflowX='auto'>
            <MemberTable />
          </Box>
          <Box
            px={{
              base: '4',
              md: '6',
            }}
            pb='5'
          >
            <HStack spacing='3' justify='space-between'>
              {!isMobile && (
                <Text color='muted' fontSize='sm'>
                  Showing 1 to 5 of 1 result(s)
                </Text>
              )}
              <ButtonGroup
                spacing='3'
                justifyContent='space-between'
                width={{
                  base: 'full',
                  md: 'auto',
                }}
                variant='secondary'
              >
                <Button>Previous</Button>
                <Button>Next</Button>
              </ButtonGroup>
            </HStack>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default DataTable
