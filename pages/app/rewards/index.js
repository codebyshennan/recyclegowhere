import React from 'react'
import Layout from '../../../components/Layout'
import { Box, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { HiPencilAlt } from 'react-icons/hi'
import { CardContent } from '../../../components/profile/CardContent'
import { CardWithAvatar } from '../../../components/profile/CardWithAvatar'
import { UserInfo } from '../../../components/profile/UserInfo'
import { ProductCard } from '../../../components/rewards/ProductCard'
import { products } from '../../../components/rewards/_data'
import { ProductGrid } from '../../../components/rewards/ProductGrid'
import { Card } from '../../../components/rewards/Card'

const Rewards = () => {
  return (
    <Box as='section' pb='12' position='relative' width='100%'>
      <Box position='absolute' inset='0' height='32' />
      <Box
        maxW='7xl'
        mx='auto'
        px={{ base: '4', md: '8', lg: '12' }}
        pb={{ base: '6', md: '8', lg: '12' }}
      >
        <Card />
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Box>
    </Box>
  )
}

Rewards.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default Rewards
