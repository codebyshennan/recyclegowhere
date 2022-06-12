import { Flex } from '@chakra-ui/react'

export const StepsLayout = ({ children }) => (
  <Flex
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
    width='100%'
  >
    {children}
  </Flex>
)
