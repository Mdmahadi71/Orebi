import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { TbPoint } from "react-icons/tb";
import { TbPointFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue } from "firebase/database";



    const Checkout = () => {
      let data = useSelector((state)=> state.product.cartItem)
      const db = getDatabase();

      let [showbank, setbank] = useState(false)
      let [namel ,setnamel] = useState([])

      let handlebank = () => {
        setbank(!showbank)
      }
      const {totalPrice,totalquntity} = data.reduce((acc , item)=>{
        acc.totalPrice += item.price * item.qun
        acc.totalquntity += item.qun
        return acc
      },{totalPrice:0 ,totalquntity:0 })

      useEffect(() => {
        const starCountRef = ref(db, "users/");
        onValue(starCountRef, (snapshot) => {
          snapshot.forEach((item) => {
            setnamel(item.val());
          });
        });
      }, []);


  return (
    <div>
      <Container>
        <div className="lg:w-[70%]">
          <div className=" py-[20px]">
            <h3 className=' font-dm font-bold text-[49px] text-[#262626]'>Checkout</h3>
            <span className=' font-dm font-normal text-[12px] text-[#6D6D60]'><Link to='/'>Home</Link> 	&gt; <Link to='/lastpage'>Checkout</Link></span>
          </div>
          <div className=" pt-[40px] pb-[10px]">
            <span className=' font-dm font-light text-[16px] text-[#6D6D60]'>Have a coupon? <span className=' font-dm font-light text-[16px] text-[#262626]'>Click here to enter your code</span></span>
          </div>
      
            <div className="py-4">
            <h2 className=' font-dm font-bold text-[39px] text-[#262626]'>Billing Details</h2>
        
            <div className=" flex justify-between">
              <div className="w-[48%]">
                <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>First Name *</h2>
                <input type="text" placeholder='First Name' className=' border-b-[1px] border-[#D8D8D8] py-2 w-full font-dm font-medium text-[14px] text-[#767676] outline-none' />
              </div>
              <div className="w-[48%]">
                <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>Last Name *</h2>
                <input type="text" placeholder='Last Name ' className=' border-b-[1px] border-[#D8D8D8] py-2 w-full font-dm font-medium text-[14px] text-[#767676] outline-none' />
              </div>

            </div>
            <div className="py-4">
              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>Companye Name (optional)</h2>
              <input type="text" placeholder='Company Name ' className=' border-b-[1px] border-[#D8D8D8] py-2 w-full font-dm font-medium text-[14px] text-[#767676] outline-none' />
            </div>
            <div className="py-4">
              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>Country *</h2>
              <input type='text' placeholder='Company Name ' className=' border-b-[1px] border-[#D8D8D8] py-2 w-full font-dm font-medium text-[14px] text-[#767676] outline-none' />
            </div>
            <div className="py-4">
              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>Street Address *</h2>
              <input type='text' placeholder='House number and street name' className=' border-b-[1px] border-[#D8D8D8] py-2 w-full font-dm font-medium text-[14px] text-[#767676] outline-none' />
              <input type='text' placeholder='Apartment, suite, unit etc. (optional)' className=' border-b-[1px] border-[#D8D8D8] py-2 w-full font-dm font-medium text-[14px] text-[#767676] outline-none' />
            </div>
            <div className="py-4">
              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>Town/City *</h2>
              <input type='text' placeholder='Town/City' className=' border-b-[1px] border-[#D8D8D8] py-2 w-full font-dm font-medium text-[14px] text-[#767676] outline-none' />
            </div>
            <div className="py-4">
              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>County (optional)</h2>
              <input type='text' placeholder='County' className=' border-b-[1px] border-[#D8D8D8] py-2 w-full font-dm font-medium text-[14px] text-[#767676] outline-none' />
            </div>
            <div className="py-4">
              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>Post Code *</h2>
              <input type='number' placeholder='Post Code' className=' border-b-[1px] border-[#D8D8D8] py-2 w-full font-dm font-medium text-[14px] text-[#767676] outline-none' />
            </div>
            <div className="py-4">
              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>Phone *</h2>
              <input type='number' placeholder='Phone' className=' border-b-[1px] border-[#D8D8D8] py-2 w-full font-dm font-medium text-[14px] text-[#767676] outline-none' />
            </div>
            <div className="py-4">
              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>Email Address *</h2>
              <input type='email' placeholder='Email' className=' border-b-[1px] border-[#D8D8D8] py-2 w-full font-dm font-medium text-[14px] text-[#767676] outline-none' />
            </div>
          </div>

          
          <div className=" pb-[30px] border-b-[1px] border-[#F0F0F0] mb-[20px]">
            <h2 className=' font-dm font-bold text-[39px] text-[#262626]'>Additional Information</h2>
            <div className="">
              <h4 className=' font-dm font-semibold text-[16px] text-[#262626]'>Other Notes (optional)</h4>
              <p className=' font-dm font-normal text-[14px] text-[#767676]'>Notes about your order, e.g. special notes for delivery.</p>
            </div>
          </div>
          <div className=" py-[30px]">
              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>{namel.username}</h2>
              <h3 className=' font-dm font-bold text-[16px] text-[#262626]'>{namel.email}</h3>
            </div>
          <div className="">
            <div className="">
              <h2 className=' font-dm font-bold text-[39px] text-[#262626]'>Your Order</h2>
              <div className="">
              <div className="flex">
                <div className=" border-[1px] border-[#F0F0F0] h-[54px]  lg:w-[322px] w-[175px]   ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] lg:pl-[20px] px-[19px] '>Total Quntity</p>
                </div>
                <div className=" ">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] lg:w-[322px] w-[175px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] lg:pl-[20px] pl-[19px] '>{totalquntity}</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className=" border-[1px] border-[#F0F0F0] h-[54px]  lg:w-[322px] w-[175px]   ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] lg:pl-[20px] px-[19px] '>Subtotal</p>
                </div>
                <div className=" ">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] lg:w-[322px] w-[175px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] lg:pl-[20px] pl-[19px] '>{totalPrice}</p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className=" border-[1px] border-[#F0F0F0] h-[54px]  lg:w-[322px] w-[175px]   ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] lg:pl-[20px] px-[19px] '>Total</p>
                </div>
                <div className=" ">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] lg:w-[322px] w-[175px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] lg:pl-[20px] pl-[19px] '>{totalPrice}</p>
                  </div>
                </div>
              </div>
              </div>



              <div className=" border-[1px] border-[#F0F0F0] py-[30px] px-[30px] my-7">
                  <div className=" flex justify-between items-center">
                  <div className="lg:w-[8%]">
                    <div onClick={()=>handlebank(!showbank)} className="flex justify-between items-center">
                      {showbank == true ? <TbPointFilled className=' text-[20px]'/> :  <TbPoint className=' text-[20px]'/>}
                    
                    <h6 className=' font-dm font-bold text-[16px] text-[#262626]'> Bank</h6>
                    </div>
                  </div>
                  <div className="">
                    <h2 className=' font-dm font-bold lg:text-[39px] text-[20px] text-[#262626]'>ata bad rakhben</h2>
                  </div>
                  </div>
                    {showbank &&
                  <div className="">
                  <div className=" border-[1px] border-[#F7F8F9] px-10 py-5 bg-[#F7F8F9]">
                    <h1 className=' font-dm font-normal text-[16px] text-[#767676]'>Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</h1>
                  </div>
                  <div className=" "></div>
                  </div>
                    }
                  <div className="">
                    <div className=" lg:w-[10%] w-[25%]">
                      <div className=" flex justify-between items-center">
                        <TbPoint className=' text-[20px]'/>
                        <p className=' font-dm font-bold text-[16px] text-[#262626]'>Bank 2</p>
                      </div>
                    </div>
                    <p className=' font-dm font-medium text-[14px] text-[#767676]'>Your personal data will be used to process your order, support your experience 
                      throughout this website, and for other purposes described in our privacy policy.</p>
                      <div className=" border-[1px] border-[#262626] px-6 py-3 inline-block bg-[#262626] text-[#ffff] hover:bg-[#ffff] hover:text-[#262626] duration-300 mt-[10px]">
                        <a className=' font-dm font-bold text-[14px]'>Proceed to Bank</a>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Checkout
