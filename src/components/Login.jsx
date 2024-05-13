import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Container>
                <div className="py-[30px] ">
                    <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>Login</h2>
                    <div className="">
                        <h2 className=' font-dm font-medium text-[12px] text-[#767676]'><Link to='/'>Home</Link> &gt; <Link to='/Singup'>Sing Up</Link></h2>
                    </div>
                </div>
                <div className=" lg:w-[50%] ">
                    <p className=' font-dm font-bold text-[16px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                </div>
                <div className=" border-b-2 border-[#D8D8D8] py-[20px]"></div>
                <div className=" py-[40px]">
                    <h2 className=' font-dm font-bold text-[30px] text-[#262626] lg:text-start text-center'>Returning Customer</h2>
                    <div className=" flex justify-between items-center ">
                        <div className="w-[48%] border-b-2 border-[#D8D8D8] py-[20px] ">
                            <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Email address</h2>
                            <input type="email" className=' font-dm font-light text-[16px] text-[#767676]' placeholder='company@domain.com' />
                        </div>
                        <div className="w-[48%] border-b-2 border-[#D8D8D8] py-[20px]">
                            <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Password</h2>
                            <input type="password" placeholder='......' />
                        </div>
                    </div>
                    <div className="py-[20px] ">
                        <div className=" border-2 border-[#767676]  py-2 px-5 inline-block
                text-[#262626] bg-white hover:bg-black hover:text-white duration-500 ">
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

export default Login
