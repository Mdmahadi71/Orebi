import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';

const Myaccount = () => {
    return (
        <div>
            <Container>
                <div className="py-[30px] ">
                    <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>My Account</h2>
                    <div className="">
                        <h2 className=' font-dm font-medium text-[12px] text-[#767676]'><Link to='/'>Home</Link> &gt; <Link to='/Myaccount'>My Account</Link></h2>
                    </div>
                </div>
                <div className=" py-[40px]">
                    <div className="flex gap-x-[40px] ">
                        <div className="">
                            <div className="">
                                <div className=" border-b-2 border-[#767676] py-3">
                                    <div className="">
                                        <div className="">
                                            <h2 className=' font-dm font-bold text-[16px] text-[#767676] hover:text-[#262626] duration-300 py-4'>Dashboard</h2>
                                        </div>
                                        <div className=""></div>
                                    </div>
                                </div>
                                <div className="border-b-2 border-[#767676] py-3">
                                    <h2 className=' font-dm font-bold text-[16px] text-[#767676] hover:text-[#262626] duration-300 py-4'>Others</h2>
                                </div>
                                <div className="border-b-2 border-[#767676] py-3">
                                    <h2 className=' font-dm font-bold text-[16px] text-[#767676] hover:text-[#262626] duration-300 py-4'>Donwloads</h2>
                                </div>
                                <div className="border-b-2 border-[#767676] py-3">
                                    <h2 className=' font-dm font-bold text-[16px] text-[#767676] hover:text-[#262626] duration-300 py-4'>Addresses</h2>
                                </div>
                                <div className="border-b-2 border-[#767676] py-3">
                                    <h2 className=' font-dm font-bold text-[16px] text-[#767676] hover:text-[#262626] duration-300 py-4'>Account details</h2>
                                </div>
                                <div className="border-b-2 border-[#767676] py-3">
                                    <h2 className=' font-dm font-bold text-[16px] text-[#767676] hover:text-[#262626] duration-300 py-4'>Logout</h2>
                                </div>
                            </div>
                        </div>
                        <div className=" pt-[30px]">
                            <h2 className='font-dm font-bold text-[16px] text-[#767676]'>Hello admin (not admin? Log out)</h2>
                            <h2 className='font-dm font-bold text-[16px] text-[#767676]'>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</h2>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Myaccount
