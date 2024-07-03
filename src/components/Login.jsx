import React, { useState } from 'react'
import Container from './Container'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const auth = getAuth();

    let [email,setemail]= useState("")
    let [password ,setpassword]= useState("")
    let [name , setName] = useState("")
    let navigate = useNavigate('')

    let handelInlog = ()=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast('Log in successfuly ! Go to Home Page ')
                setTimeout(() => {
                    navigate('/')
                },2000)
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }

   

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
                    <div className="w-[31%] py-[20px] ">
                            <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Your Name</h2>
                            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Your Name' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
                           
                        </div>
                        <div className="w-[31%]  py-[20px] ">
                            <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Email address</h2>
                            <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='habibalmasud@gmail.com' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
                        </div>
                        <div className="w-[31%]  py-[20px]">
                            <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Password</h2>
                            <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='*******' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
                        </div>
                    </div>
                    <div className="py-[20px] ">
                        <button onClick={handelInlog} className=" border-2 border-[#767676]  py-2 px-5 inline-block
                         text-[#262626] bg-white hover:bg-black hover:text-white duration-500 ">
                            <h5 className=' font-dm font-bold text-[16px] ' >Log in</h5>           
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Login
