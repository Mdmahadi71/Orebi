import React, { useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaCartArrowDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useRef } from 'react';
import { ImCross } from "react-icons/im";

const Manu = () => {
    let [cateshow, catesetshow] = useState(false)
    let catemanu = useRef()
    let [logshow, logsetshow] = useState(false)
    let logmy = useRef()
    let [carshow, carsetshow] = useState(false)
    let carmanu = useRef()
    let [elecshow, elecsetshow] = useState(false)
    let elecmanu = useRef()
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (catemanu.current.contains(e.target) == true) {
                catesetshow(!cateshow)
            } else {
                catesetshow(false)
            }
            if (logmy.current.contains(e.target) == true) {
                logsetshow(!logshow)
            } else {
                logsetshow(false)
            }
            if (carmanu.current.contains(e.target) == true) {
                carsetshow(!carshow)
            } else {
                carsetshow(false)
            }
            if (elecmanu.current.contains(e.target) == true) {
                elecsetshow(true)
            } else {
                carsetshow(false)
            }
        })
    }, [cateshow, logshow, carshow, elecshow])

    return (
        <div>
            <Container>
                <Flex className=' items-center justify-between'>
                    <div className="w-[30%] items-center  relative">
                        <div className="flex items-center gap-x-2" ref={catemanu} >
                            <FaBarsStaggered />
                            <h3 className='font-dm text-[#262626] font-bold text-[14px]'>Shop by  Category</h3>
                        </div>
                        {cateshow &&
                            <div className=" absolute lg:text-start text-center z-50 lg:top-[35px] top-[50px] left-0 lg:w-[300px] w-[200px] bg-[#262626] ">
                                <ul className='pl-2 '>
                                    <li className='font-dm text-[#FFFFFF70] font-bold text-[14px] py-4
                                     hover:text-[#FFFFFF] hover:pl-3 duration-200 '>Accesories</li>
                                    <li className='font-dm text-[#FFFFFF70] font-bold text-[14px] py-4 
                                    hover:text-[#FFFFFF] hover:pl-3 duration-200'>Furniture</li>
                                    <li className=' relative font-dm text-[#FFFFFF70] font-bold text-[14px] py-4
                                     hover:text-[#FFFFFF] hover:pl-3 duration-200' ref={elecmanu}>Electronics</li>
                                    <li className='font-dm text-[#FFFFFF70] font-bold text-[14px] py-4
                                     hover:text-[#FFFFFF] hover:pl-3 duration-200'>Clothes</li>
                                    <li className='font-dm text-[#FFFFFF70] font-bold text-[14px] py-4
                                     hover:text-[#FFFFFF] hover:pl-3 duration-200'>Bags</li>
                                    <li className='font-dm text-[#FFFFFF70] font-bold text-[14px] py-4
                                     hover:text-[#FFFFFF] hover:pl-3 duration-200'>Home appliances</li>
                                </ul>

                            </div>
                        }
                        {elecshow &&
                            <div className=" lg:w-[500px] w-[350px] lg:text-start text-center absolute z-50 lg:top-[35px] top-[50px] lg:left-[300px]  bg-[#F5F5F3] py-4 lg:px-4 px-2 ">
                                <ul className='lg:flex justify-between font-dm font-bold text-[#262626] text-[16x]'>
                                   <div className="flex gap-6">
                                   <li  >Phones
                                        <ul>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 1</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 2</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 3</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 4</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 5</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 6</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 7</li>
                                        </ul>
                                    </li>
                                    <li>Computers
                                        <ul>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 1</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 2</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 3</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 4</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 5</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 6</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 7</li>
                                        </ul>
                                    </li>
                                   </div>
                               <div className="flex  gap-6">
                               <li>Smart watches
                                        <ul>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 1</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 2</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 3</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 4</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 5</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 6</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 7</li>
                                        </ul>
                                    </li>
                                    <li>Cameras
                                        <ul className=''>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 1</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 2</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 3</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 4</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 5</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 6</li>
                                            <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 7</li>
                                        </ul>
                                    </li>
                               </div>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="w-[40%]  relative">
                        <input type="text" placeholder='Search Products' className=' border-2 border-[#222] h-12 w-full pl-2 ' />
                        <div className=" absolute  lg:right-[10px] right-0 top-[50%] translate-y-[-50%] ">
                            <IoSearch />
                        </div>
                    </div>
                    <div className="w-[30%] ">
                        <div className="flex justify-end gap-x-5">
                            <div className=" relative">
                                <div className="flex" ref={logmy}>
                                    <CiUser />
                                    <TiArrowSortedDown />
                                </div>
                                {logshow &&
                                    <div className=" w-[180px] absolute z-50 top-[35px] right-[10px] ">
                                        <h3 className='font-dm text-[#FFFFFF] font-bold text-[16px] bg-[#2B2B2B] 
                                        py-4 px-5 text-center '>My Account</h3>
                                        <h3 className='font-dm text-[#262626] font-bold text-[16px] py-4 px-3
                                         bg-[#F0F0F0] text-center '>Log Out</h3>
                                    </div>
                                }
                            </div>
                            <div className=" relative">
                                <div className="" ref={carmanu}>
                                    <FaCartArrowDown />
                                </div>
                                {carshow &&
                                    <div className=" w-[350px] border-2 border-[#F0F0F0] absolute z-50 top-[35px] right-0">
                                        <div className="">
                                            <div className="flex justify-between items-center gap-8 bg-[#F5F5F3] ">
                                                <div className="flex justify-between items-center gap-x-7 px-4 py-5">
                                                    <div className="border-1 h-[70px] w-[100px] bg-[#979797] "></div>
                                                    <div className=" w-full">
                                                        <h3 className=' font-dm text-black font-bold text-[14px]'>Black Smart Watch</h3>
                                                        <h3 className='font-dm text-black font-bold text-[16px]'>$44.00</h3>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-2">
                                                    <div className="font-dm text-black font-extrabold text-[24px]">
                                                        <ImCross />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-5 bg-[#FFFFFF]">
                                            <div className="">
                                                <h3 ><samp className='font-dm text-[#767676] font-bold text-[16px]'>Subtotal:</samp>
                                                    <samp className=' font-dm text-black  font-extrabold text-[16px]'>$44.00</samp></h3>
                                            </div>
                                            <div className="flex justify-between gap-1 pt-2">
                                                <div className="border-2 border-[#222] py-3 px-8 bg-black font-dm text-[14px] font-bold
                                                 text-white hover:bg-white hover:text-black duration-200">
                                                    <h2>View Cart</h2>
                                                </div>
                                                <div className="border-2 border-[#222] py-3 px-8 bg-black text-white font-dm text-[14px] 
                                                font-bold hover:bg-white hover:text-black duration-200">
                                                    <h3>Checkout</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Manu