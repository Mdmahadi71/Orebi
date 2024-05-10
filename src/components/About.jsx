import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';
import ProductImg from '../assets/prd1.png'
import ProductImg2 from '../assets/prd2.png'

const About = () => {
  return (
      <div>
          <Container>
              <div className="py-[30px]">
                  <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>About</h2>
                  <div className="">
                      <h2 className=' font-dm font-medium text-[12px] text-[#767676]'><Link to='/'>Home</Link> 	&gt; <Link to='/About'>About</Link></h2>
                  </div>
              </div>
              <div className=" lg:flex justify-between py-[30px]">
                <div className="lg:w-[49%]">
                    <div className=" relative">
                      <img src={ProductImg} alt="" />
                      <div className=" border-2 border-black py-2 px-4 bg-black 
                       inline-block absolute left-[50%] translate-x-[-50%] bottom-[30px] text-white hover:bg-white hover:text-black duration-500">
                        <h2 className=' font-dm font-semibold text-[16px]'>Our Brands</h2>
                      </div>
                    </div>
                </div>
                <div className="lg:w-[49%]">
                    <div className=" relative">
                    <img src={ProductImg2} alt="" />
                    <div className=" border-2 border-black py-2 px-4 bg-black 
                       inline-block absolute left-[50%] translate-x-[-50%] bottom-[30px] text-white hover:bg-white hover:text-black duration-500">
                        <h2 className=' font-dm font-semibold text-[16px]'>Our Brands</h2>
                      </div>
                    </div>
                </div>
              </div>
              <div className="py-[30px]">
                <p className=' font-dm font-semibold lg:text-[39px] text-[22px] text-[#262626] lg:text-start text-center'>Orebi is one of the world’s leading ecommerce brands and is internationally
                 recognized for celebrating the essence of classic Worldwide cool looking style.</p>
              </div>
              <div className=" lg:flex justify-between py-[30px]">
                <div className="lg:w-[32%] lg:py-0 py-3">
                    <h2 className=' font-dm font-semibold text-[20px] text-[#262626] lg:text-start text-center '>Our Vision</h2>
                    <p className=' font-dm font-semibold text-[16px] text-[#262626] lg:text-start text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                      printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="lg:w-[32%] lg:py-0 py-3">
                    <h2 className=' font-dm font-semibold text-[20px] text-[#262626] lg:text-start text-center '>Our Vision</h2>
                    <p className=' font-dm font-semibold text-[16px] text-[#262626] lg:text-start text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                      printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="lg:w-[32%] lg:py-0 py-3">
                    <h2 className=' font-dm font-semibold text-[20px] text-[#262626] lg:text-start text-center '>Our Vision</h2>
                    <p className=' font-dm font-semibold text-[16px] text-[#262626] lg:text-start text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                      printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
              </div>
          </Container>
      </div>
  )
}

export default About
