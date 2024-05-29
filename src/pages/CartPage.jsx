import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import imagess from '../assets/mmmm.png'
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncerment } from '../counter/Productslice';

const CartPage = () => {
  let dispatch = useDispatch()
  let data = useSelector((state)=>state.product.cartItem)

  let hendelIcrement=(item)=>{
    dispatch(productIncerment(item))
  }
 let hendledecrement = (item)=>{
  dispatch(productDecrement(item))
 }
  return (
    <div className=" ">
      <Container>
        <div className="">
          <h2 className=' font-dm font-medium text-[26px] text-[#262626]'>Cart</h2>
          <span className=' font-dm font-medium text-[18px] text-[#262626]'><Link to='/'>Home</Link>  &gt;  <Link to='/cart'>Cart</Link> </span>
        </div>
        <div className="py-[50px]">
          <div className="flex justify-around bg-[#F5F5F3] py-[20px]">
            <div className="w-[35%]">
              <h3 className=' font-dmv font-bold text-[16px] text-[#262626] ml-[5px]'>Product</h3>
            </div>
            <div className="w-[15%]">
              <h3 className=' font-dmv font-bold text-[16px] text-[#262626]'>Price</h3>
            </div>
            <div className="w-[25%]">
              <h3 className=' font-dmv font-bold text-[16px] text-[#262626]'>Quantity</h3>
            </div>
            <div className="w-[15%]">
              <h3 className=' font-dmv font-bold text-[16px] text-[#262626]'>Total</h3>
            </div>
          </div>
        </div>
        {data.map((item, i)=>(
              <div className="flex justify-around text-center items-center py-[20px]">
              <div className="w-[25%]">
                <div className="flex justify-between items-center">
                  <div className="">
                    <span><RxCross2 /></span>
                  </div>
                  <div className="">
                    <img src={item.thumbnail} className='w-[100px] h-[100px]' alt="" />
                  </div>
                  <div className="">
                    <h2 className=' font-dm font-medium text-[16px] text-[#262626]'>{item.title}</h2>
                  </div>
                </div>
              </div>
              <div className="w-[30%]">
                <h2  className=' font-dm font-medium text-[16px] text-[#262626]'>${item.price}</h2>
              </div>
              <div className="w-[20%]">
                <div className=" border-2 border-[#F0F0F0] py-2 px-4">
                  <div className=" flex justify-around  items-center">
                    <button onClick={()=>hendledecrement(i)}>-</button>
                    <div className="<h2 className=' font-dm font-normal text-[16px] text-[#767676]">
                          <h4>{item.qun}</h4>
                    </div>
                    <button onClick={()=>hendelIcrement(i)}>+</button>
                  </div>
                </div>
              </div>
              <div className="w-[25%]">
              <h2>${item.price * item.qun}</h2>
              </div>
            </div>
        ))}
      
      </Container>
    </div>
  )
}

export default CartPage
