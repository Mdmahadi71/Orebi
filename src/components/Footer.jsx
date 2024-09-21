import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ftrlogo from '../assets/footerlogo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import ScrollBackTotop from './ScrollBackTotop';

const Footer = () => {
    return (
        <div className="py-[50px] bg-[#F5F5F3]">
            <Container >
                <div className=" lg:flex justify-between">

                    <div className="lg:w-[50%]">
                        <div className="flex justify-between">
                            <div className="">
                                <ul>
                                    <li className=' font-dm font-bold text-[16px] text-[#262626] py-1'>MENU</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Home</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Shop</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>About</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Contact</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Journal</li>
                                </ul>
                            </div>
                            <div className="">
                                <ul>
                                    <li className=' font-dm font-bold text-[16px] text-[#262626] py-1'>SHOP</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Category 1</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Category 2</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Category 3</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Category 4</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Category 5</li>
                                </ul>
                            </div>
                            <div className="">
                                <ul>
                                    <li className=' font-dm font-bold text-[16px] text-[#262626] py-1'>HELP</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Privacy Policy</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Terms & Conditions</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Special E-shop</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Shipping</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>Secure Payments</li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    <div className=" lg:w-[40%]">
                        <div className=" lg:flex justify-between lg:text-start text-center lg:py-0 py-6">
                            <div className=" ">
                                <ul>
                                    <li className=' font-dm font-bold text-[16px] text-[#262626] py-1'>(052) 611-5711</li>
                                    <li className=' font-dm font-bold text-[16px] text-[#262626] py-1'>company@domain.com</li>
                                    <li className=' font-dm font-medium text-[14px] text-[#6D6D6D] py-1'>575 Crescent Ave. Quakertown, PA 18951</li>
                                </ul>
                            </div>
                                <div className=" inline-block text-center lg:text-start lg:py-0 py-6">
                                <img src={ftrlogo}  alt="" />
                                </div>

                        </div>
                    </div>
                </div>
                <div className="lg:flex lg:justify-between">
                    <div className="flex lg:justify-between gap-3 py-5 justify-center">
                        <div className=" ">
                            <a href="#" target='blank'>
                                <FaFacebookSquare />
                            </a>
                        </div>
                        <div className="">
                            <a href="#" target='blank'>
                                <FaLinkedin />
                            </a>
                        </div>
                        <div className="">
                            <a href="#" target='blank'>
                                <FaInstagramSquare />
                            </a>
                        </div>
                    </div>
                    <div className=" text-center lg:text-start">
                        <h2 className=' font-dm font-medium text-[14px] text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h2>
                    </div>
                </div>
                <ScrollBackTotop/>
            </Container>
        </div>
    )
}

export default Footer
