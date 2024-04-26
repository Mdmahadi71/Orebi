import React from 'react'
import Container from './Container'
import Flex from './Flex'
import saleone from '../assets/saleone.png'
import saletwo from '../assets/saletwo.png'
import salethree from '../assets/salethree.png'

const Sale = () => {
  return (
    <div className='py-4'>
      <Container>
        <div className=" lg:flex lg:justify-between">
        <div className="lg:w-[49%]">
                <img src={saleone} alt="saleone" />
            </div>
            <div className="lg:w-[49%]">
                <div className=" lg:pt-0 pt-[20px]">
                <img src={saletwo} alt="" />
                </div>
                <div className="lg:pt-[35px] pt-2">
                <img src={salethree} alt="" />
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Sale
