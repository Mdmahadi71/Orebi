import React, { useState } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const auth = getAuth();
    let [email,setemail]= useState("")
    let [password ,setpassword]= useState("")


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            const errorCode = error.code;
         
            if (errorCode.includes('auth/email-already-in-use')) {
                // const notify = () => toast('email-already-in-use');
                console.log('email-already-in-use');
            } else {

            }

  });
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
                    <div className="w-[31%] border-b-2 border-[#D8D8D8] py-[20px] ">
                            <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Your Name</h2>
                            <input type=" text" className=' font-dm font-light text-[16px] text-[#767676]' placeholder='Your Name' />
                        </div>
                        <div className="w-[31%] border-b-2 border-[#D8D8D8] py-[20px] ">
                            <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Email address</h2>
                            <input onChange={(e)=>setemail(e.target.value)} type="email" className=' font-dm font-light text-[16px] text-[#767676]' placeholder='company@domain.com' />
                        </div>
                        <div className="w-[31%] border-b-2 border-[#D8D8D8] py-[20px]">
                            <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Password</h2>
                            <input onChange={(e)=>setpassword(e.target.value)} type="password" placeholder='......' />
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
                {/* <ToastContainer /> */}
            </Container>
        </div>
    )
}

export default Login
