import {
  AspectRatio,
  Box,
  Button,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import Orchestrator from '../Orchestrator'
import { FavouriteButton } from './FavouriteButton'
import { PriceTag } from './PriceTag'

export const ProductCard = (props) => {
  const { product, rootProps } = props
  const { name, imageUrl, price, salePrice } = product

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOrchestrator = () => {
    onOpen()
  }

  const eventList = [
    'Loading...',
    'Connecting to Rewards Gateway...',
    'Synchronizing...',
    'Exchanging Reward Points...',
    'Ensuring Transaction Success...',
    'Terminating Connection...',
    'Cleaning up...',
    'Exchange Successful!',
  ]

  return (
    <>
      <Stack
        spacing={useBreakpointValue({
          base: '4',
          md: '5',
        })}
        {...rootProps}
      >
        <Box position='relative'>
          <AspectRatio ratio={4 / 3}>
            <Image
              src={imageUrl}
              alt={name}
              draggable='false'
              fallback={<Skeleton />}
              borderRadius={useBreakpointValue({
                base: 'md',
                md: 'xl',
              })}
            />
          </AspectRatio>
          <FavouriteButton
            position='absolute'
            top='4'
            right='4'
            aria-label={`Add ${name} to your favourites`}
          />
        </Box>
        <Stack>
          <Stack spacing='1'>
            <Text
              fontWeight='medium'
              color={useColorModeValue('gray.700', 'gray.400')}
            >
              {name}
            </Text>
            <PriceTag price={price} salePrice={salePrice} currency='USD' />
          </Stack>
          {/* <HStack>
            <Rating defaultValue={rating} size="sm" />
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              12 Reviews
            </Text>
          </HStack> */}
        </Stack>
        <Stack align='center'>
          <Button colorScheme='blue' onClick={handleOrchestrator}>
            Claim with Points
          </Button>
          {/* <Link
            textDecoration="underline"
            fontWeight="medium"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            Quick shop
          </Link> */}
        </Stack>
      </Stack>
      <Orchestrator
        title={'Processing Rewards'}
        eventList={eventList}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}
