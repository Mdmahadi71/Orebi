import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div>
            <Container>
                <div className="py-[30px] ">
                    <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>Sign up</h2>
                    <div className="">
                        <h2 className=' font-dm font-medium text-[12px] text-[#767676]'><Link to='/'>Home</Link> &gt; <Link to='/Myaccount'>My Account</Link></h2>
                    </div>
                </div>
                <div className="lg:w-[50%]">
                    <p className=' font-dm font-light text-[16px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                </div>
                <div className=" border-b-2 border-[#F0F0F0] py-[20px]"></div>
                <div className="lg:w-[70%] py-[40px]">
                    <h2 className=' font-dm font-bold text-[49px] text-[#262626] lg:text-start text-center'>Your Personal Details</h2>
                    <div className=" flex justify-between gap-x-5">
                        <div className="w-[50%]">
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>First Name</h2>
                                <input type="text" placeholder='First Name' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div>
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Email address</h2>
                                <input type="email" placeholder='company@domain.com' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Last Name</h2>
                                <input type="text" placeholder='Last Name' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div><div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Telephone</h2>
                                <input type="number" placeholder='Telephone' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[70%] py-[40px]">
                    <h2 className=' font-dm font-bold text-[49px] text-[#262626] lg:text-start text-center'>New Customer</h2>
                    <div className=" flex justify-between gap-x-5">
                        <div className="w-[50%]">
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Address 1</h2>
                                <input type="text" placeholder='4279 Zboncak Port Suite 6212' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div>
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>City</h2>
                                <input type="text" placeholder='Your city' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div>
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Division</h2>
                                <input type="text" placeholder='Please select' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Address 2</h2>
                                <input type="text" placeholder='----' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div>
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Post Code</h2>
                                <input type="number" placeholder='06759' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div>
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>District</h2>
                                <input type="text" placeholder='Please select' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className='font-dm font-bold text-[49px] text-[#262626]'>Your Password</h2>
                        <div className=" flex justify-between lg:gap-x-5 gap-x-2">
                            <div className="w-[50%]">
                                <h3 className=' font-dm font-bold text-[20px] text-[#262626]'>Password</h3>
                                <input type="password" placeholder='Password' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div>

                            <div className="w-[50%]">
                                <h3 className=' font-dm font-bold text-[20px] text-[#262626]'>Repeat Pass</h3>
                                <input type="password" placeholder='Repeat password' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" border-b-2 border-[#F0F0F0] py-[20px]"></div>
                <div className=" py-[50px]">
                    <div className=" flex gap-x-[20px]">
                        <div className="">
                            <input type="checkbox" />
                        </div>
                        <div className="">
                            <h2 className=' font-dm font-light text-[14px] text-[#767676]'>I have read and agree to the Privacy Policy</h2>
                        </div>
                    </div>
                    <div className=" flex gap-x-[30px] py-[20px]">
                        <h2 className=' font-dm font-light text-[14px] text-[#767676]'>Subscribe Newsletter</h2>
                        <div className=" flex gap-x-4">
                            <input type="checkbox" />
                            <h2 className=' font-dm font-light text-[14px] text-[#767676]'>Yes</h2>
                        </div>
                        <div className=" flex gap-x-4">
                            <input type="checkbox" />
                            <h2 className=' font-dm font-light text-[14px] text-[#767676]'>Yes</h2>
                        </div>
                    </div>
                    <div className="py-[20px] ">
                        <div className=" border-2 border-black py-2 px-8 bg-black text-white  inline-block
                     hover:bg-white hover:text-[#262626] duration-300 ">
                            <form>
                                <input type="submit" className=' font-dm font-bold text-[16px] ' value="Log in"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingUp
