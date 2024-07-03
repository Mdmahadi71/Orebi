import React, { useEffect, useState } from 'react'
import Container from './Container'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword , updateProfile  } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDatabase, ref, set ,onValue} from "firebase/database";


const SingUp = () => {
    const auth = getAuth();
    const db = getDatabase();

    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let [fullname, setfullname] = useState('')
    let [lastname, setlastname] = useState('')
    let [repetpass, setrepetpass] = useState('')
    let [namelll , setnamelll] = useState([])
    let navigate = useNavigate('')



    let handelClick = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userss) => {
                updateProfile(auth.currentUser, {
                    displayName: fullname ,
                  }).then(() => {
                    toast(" Go to Login Page")
                    setTimeout(()=>{
                        navigate('/Login')
                    },2000)
                  })
                  .then(()=>{
                      set(ref(db, 'users/' +userss.user.uid ),{
                          username: fullname,
                          email: email,
                      });
                  })
            

                  .catch((error) => {
                    console.log('error');
                  });
            }) 
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }
    // useEffect(()=>{
    //     const starCountRef = ref(db, 'userss/' );
    //     onValue(starCountRef, (snapshot) => {
    //       let usedata = []
    //       snapshot.forEach((item)=>{
    //         usedata.push(item.val())
    //       })
    //       setnamelll(usedata)
    //     });

    //   },[])
     
   
 

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
                                
                                <input type="text" onChange={(e)=>setfullname(e.target.value)} placeholder='First Name' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
                            </div>
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Email address</h2>
                                <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='habibalmasud@gmail.com' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Last Name</h2>
                                
                                <input type="text" onChange={(e)=>setlastname(e.target.value)} placeholder='Last Name' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
                            </div><div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Telephone</h2>
                                <input type="number" placeholder='Telephone' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
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
                                <input type="text" placeholder='4279 Zboncak Port Suite 6212' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
                            </div>
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>City</h2>
                                <input type="text" placeholder='Your city' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
                            </div>
                            <div className="">
                                <label className='font-dm font-bold text-[20px] text-[#262626]' for="District">District</label>

                                <select className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' id="District">
                                    <option value="Barishal">Barishal</option>
                                    <option value="Chattogram">Chattogram</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Rangpur ">Rangpur</option>
                                    <option value="Mymensingh ">Mymensingh </option>
                                    <option value="Sylhet">Sylhet</option>
                                </select>
                            </div>

                        </div>
                        <div className="w-[50%]">
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Address 2</h2>
                                <input type="text" placeholder='----' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
                            </div>
                            <div className="">
                                <h2 className=' font-dm font-bold text-[20px] text-[#262626]'>Post Code</h2>
                                <input type="number" placeholder='06759' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
                            </div>
                            <div className="">
                                <label className='font-dm font-bold text-[20px] text-[#262626]' for="District">District</label>

                                <select className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676]' id="District">
                                    <option value="volvo">Dhaka</option>
                                    <option value="Faridpur">Faridpur</option>
                                    <option value="Gazipur">Gazipur</option>
                                    <option value="Mymensingh">Mymensingh</option>
                                    <option value="Bogra">Bogra</option>
                                    <option value="Pabna ">Pabna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Barisal">Barisal</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Comilla ">Comilla </option>
                                    <option value="Cox''s Bazar">Mymensingh</option>
                                    <option value="Bogra">Cox''s Bazar</option>
                                    <option value="Sylhet ">Sylhet</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Kushtia ">Kushtia </option>
                                </select>
                            </div>
                            <div className="">
                                {namelll.map((item)=>(
                                   <div className="">
                                     <li>{item.name}</li>
                                     <h4>hamoi</h4>
                                   </div>
                                    
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className='font-dm font-bold text-[49px] text-[#262626]'>Your Password</h2>
                        <div className=" flex justify-between lg:gap-x-5 gap-x-2">
                            <div className="w-[50%]">
                                <h3 className=' font-dm font-bold text-[20px] text-[#262626]'>Password</h3>
                                <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Password' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
                            </div>

                            <div className="w-[50%]">
                                <h3 className=' font-dm font-bold text-[20px] text-[#262626]'>Repeat Pass</h3>
                                <input type="password" onChange={(e)=>setrepetpass(e.target.value)}  placeholder='Repeat password' className='border-b-2 border-[#F0F0F0] w-full py-4 font-dm font-light text-[16px] text-[#767676] outline-none' />
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
                    
                        <button onClick={handelClick} className=" border-2 border-black py-2 px-8 bg-black text-white  inline-block
                     hover:bg-white hover:text-[#262626] duration-300 ">
                            <h2 className=' font-dm font-bold text-[16px] '>Log in</h2>
                        </button>
                        <ToastContainer />

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingUp
