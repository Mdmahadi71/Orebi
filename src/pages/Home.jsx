import React from 'react'
import Manu from '../components/Manu'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Sale from '../components/Sale'
import Arrivals from '../components/Arrivals'
import Bestsellers from '../components/Bestsellers'
import Special from '../components/Special'
import Footer from '../components/Footer'

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
