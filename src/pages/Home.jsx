import React from 'react'
import Banner from '../components/Banner'
import Sale from '../components/Sale'
import Arrivals from '../components/Arrivals'
import Bestsellers from '../components/Bestsellers'
import Special from '../components/Special'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Sale/>
      <Arrivals/>
      <Bestsellers/>
      <Special/>
    </div>
  )
}

export default Home
