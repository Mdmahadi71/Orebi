import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from '../assets/Logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let [show , setShow] = useState(false)
    let hendelshow = () =>{
        setShow(!show)
    }
  return (
    <div>
      <Container className='py-7'>
        <Flex className=' lg:items-center justify-between '>
            <div className="lg:w-[15%]">
                <img src={logo} alt="" />
            </div>
            <div className="lg:w-[85%] z-50">
                <ul className={`lg:flex justify-center text-center items-center  absolute lg:static duration-300 ${show == true?'  top-[70px] bg-[#d8d8d89c] w-full left-0  ' 
                :' top-[70px] left-[-200px]  '}`}>
                    <li className=' font-dm text-[#262626] font-bold text-[16px] px-5 lg:py-0 py-2'>Home</li>
                    <li className=' font-dm text-[#262626] font-bold text-[16px] px-5 lg:py-0 py-2'>Shop</li>
                    <li className=' font-dm text-[#262626] font-bold text-[16px] px-5 lg:py-0 py-2'>About</li>
                    <li className=' font-dm text-[#262626] font-bold text-[16px] px-5 lg:py-0 py-2'>Contacts</li>
                    <li className=' font-dm text-[#262626] font-bold text-[16px] px-5 lg:py-0 py-2'>Journal</li>
                </ul>
            </div>
            <div className="lg:hidden " onClick={hendelshow}>
                {show ?<RxCross2/> :<FaBars/>}
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Navbar