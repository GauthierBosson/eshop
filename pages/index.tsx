import type { NextPage } from 'next'

import Hero from '@/components/hero'
import { ProductsList } from '@/components/products'
import { BaseButton } from '@/components/primitives/buttons'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <ProductsList />
    </>
  )
}

export default Home
