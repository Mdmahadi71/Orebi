import React, { useState } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Contact = () => {
    const auth = getAuth();

    let [email, setemail] = useState("")
    let [password , setpassword] = useState("")

    let handlesingIn=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            console.log('successfull');
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    }

    return (
        <div>
            <Container>
                <div className="py-[30px] ">
                    <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>Contacts</h2>
                    <div className="">
                        <h2 className=' font-dm font-medium text-[12px] text-[#767676]'><Link to='/'>Home</Link> &gt; <Link to='/Login'>Login</Link></h2>
                    </div>
                </div>
                <div className="lg:w-[50%] py-[40px] ">
                    <h2 className=' font-dm font-bold text-[25px] text-[#262626]'>Fill up a Form</h2>
                    <div className="">
                        <h2 className=' font-dm font-bold text-[19px] text-[#262626] py-4'>Name</h2>
                        <input  type="text" className='border-b-2 border-[#D8D8D8] w-full font-dm font-light text-[14px]
                             text-[#262626]' placeholder='Your name here' />
                        <h2 className=' font-dm font-bold text-[19px] text-[#262626] py-4'>Email</h2>
                        <input onChange={(e)=>setemail(e.target.value)} type="text" className='border-b-2 border-[#D8D8D8] w-full font-dm font-light text-[14px]
                             text-[#262626]' placeholder='Your email here' />
                             <h2 className=' font-dm font-bold text-[19px] text-[#262626] py-4'>Password</h2>
                        <input onChange={(e)=>setpassword(e.target.value)} type="password" className='border-b-2 border-[#D8D8D8] w-full font-dm font-light text-[14px]
                             text-[#262626]' placeholder='Password' />
                        <h2 className=' font-dm font-bold text-[19px] text-[#262626] py-4'>Message</h2>
                        <input type="text" className='border-b-2 border-[#D8D8D8] w-full font-dm font-light text-[14px]
                             text-[#262626]' placeholder='Your message here' />
                        <div className="pt-[30px]">
                            <div className=" border-2 border-black py-2 px-[40px] bg-black text-[#fff] inline-block cursor-pointer hover:bg-white hover:text-black duration-500">
                                <form>
                                    <input onClick={handlesingIn} type="submit" className=' font-dm font-bold text-[16px] ' value="Post"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" w-full py-[30px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6337852473275!2d90.3591987735366!3d23.760435288394387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf58dd8cbce9%3A0x700079053de7fbc0!2sNurjahan%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1715363963225!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Container>
        </div>
    )
}

export default Contact
