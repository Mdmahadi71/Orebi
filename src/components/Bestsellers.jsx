import React from 'react'
import Container from './Container'
import bestImg from '../assets/bast.png'
import { FaHeart } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { FaCartArrowDown } from "react-icons/fa";
import clockImg from '../assets/Ads_2.png'

const Bestsellers = () => {
    return (
        <div className='py-[50px]'>
            <Container>
                <div className=" py-3">
                    <h2 className=' font-dm font-bold text-[36px] text-[#262626]'>Bestsellers</h2>
                </div>
                <div className=" sm:flex justify-between sm:flex-wrap sm:justify-between">
                    <div className="sm:w-[49%] lg:w-[24%] ">
                        <div className=" my-[30px]">
                            <div className="relative group overflow-hidden">
                                <img src={bestImg} alt="" />
                                <div className=" w-full h-[-150px] bg-white  absolute bottom-[-150px] right-0 py-2 
                                  group-hover:h-[-150px] group-hover:bottom-0 duration-300">
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Add to Wish List</h2>
                                        <FaHeart />
                                    </div>
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Compare</h2>
                                        <TfiReload />
                                    </div>
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Add to Cart</h2>
                                        <FaCartArrowDown />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-between">
                                <h2 className=' font-dm font-medium text-[20px] text-[#262626]'>Basic Crew Neck Tee</h2>
                                <p className=' font-dm font-medium text-[20px] text-[#767676]'>$44.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[49%] lg:w-[24%] ">
                        <div className="my-[30px] ">
                            <div className="relative group overflow-hidden">
                                <img src={bestImg} alt="" />
                                <div className=" w-full h-[-150px] bg-white  absolute bottom-[-150px] right-0 py-2 
                    group-hover:h-[-150px] group-hover:bottom-0 duration-300">
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Add to Wish List</h2>
                                        <FaHeart />
                                    </div>
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Compare</h2>
                                        <TfiReload />
                                    </div>
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Add to Cart</h2>
                                        <FaCartArrowDown />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-between">
                                <h2 className=' font-dm font-medium text-[20px] text-[#262626]'>Basic Crew Neck Tee</h2>
                                <p className=' font-dm font-medium text-[20px] text-[#767676]'>$44.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[49%] lg:w-[24%] ">
                        <div className="my-[30px] ">
                            <div className="relative group overflow-hidden">
                                <img src={bestImg} alt="" />
                                <div className=" w-full h-[-150px] bg-white  absolute bottom-[-150px] right-0 py-2 
                    group-hover:h-[-150px] group-hover:bottom-0 duration-300">
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Add to Wish List</h2>
                                        <FaHeart />
                                    </div>
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Compare</h2>
                                        <TfiReload />
                                    </div>
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Add to Cart</h2>
                                        <FaCartArrowDown />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-between">
                                <h2 className=' font-dm font-medium text-[20px] text-[#262626]'>Basic Crew Neck Tee</h2>
                                <p className=' font-dm font-medium text-[20px] text-[#767676]'>$44.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[49%] lg:w-[24%]">
                        <div className=" my-[30px]">
                            <div className="relative group overflow-hidden">
                                <img src={bestImg} alt="" />
                                <div className=" w-full h-[-150px] bg-white  absolute bottom-[-150px] right-0 py-2 
                    group-hover:h-[-150px] group-hover:bottom-0 duration-300">
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Add to Wish List</h2>
                                        <FaHeart />
                                    </div>
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Compare</h2>
                                        <TfiReload />
                                    </div>
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Add to Cart</h2>
                                        <FaCartArrowDown />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-between">
                                <h2 className=' font-dm font-medium text-[20px] text-[#262626]'>Basic Crew Neck Tee</h2>
                                <p className=' font-dm font-medium text-[20px] text-[#767676]'>$44.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[100px]">
                    <img src={clockImg} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Bestsellers
