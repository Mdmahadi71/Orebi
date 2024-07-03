import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import imagess from '../assets/mmmm.png'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncerment, removeProduct } from '../counter/Productslice';

const CartPage = () => {
    let dispatch = useDispatch()
    let data = useSelector((state) => state.product.cartItem)
   


    let hendelIcrement = (item) => {
      dispatch(productIncerment(item))
    }
    let hendledecrement = (item) => {
      dispatch(productDecrement(item))
    }
    let hendleremove = (item) => {
      dispatch(removeProduct(item))
  }
  const {totalPrice,totalquntity} = data.reduce((acc , item)=>{
    acc.totalPrice += item.price * item.qun
    acc.totalquntity += item.qun
    return acc
  },{totalPrice:0 ,totalquntity:0 })

  return (
    <div className=" ">
      <Container>
        <div className="">
          <h2 className=' font-dm font-medium text-[26px] text-[#262626]'>Cart</h2>
          <span className=' font-dm font-medium text-[12px] text-[#262626]'><Link to='/'>Home</Link>  &gt;  <Link to='/cart'>Cart</Link> </span>
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
        {data.map((item, i) => (
          <div className="border-[2px] border-[#F0F0F0] py-5 px-2">
            <div className="flex justify-around text-center items-center py-[20px]">
              <div className="w-[25%]">
                <div className="flex justify-between items-center">
                  <div className="">
                    <span onClick={() => hendleremove(i)}><RxCross2 /></span>
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
                <h2 className=' font-dm font-medium text-[16px] text-[#262626]'>${item.price}</h2>
              </div>
              <div className="w-[20%]">
                <div className=" border-2 border-[#F0F0F0] py-2 px-4">
                  <div className=" flex justify-around  items-center">
                    <button onClick={() => hendledecrement(i)}>-</button>
                    <div className="<h2 className=' font-dm font-normal text-[16px] text-[#767676]">
                      <h4>{item.qun}</h4>
                    </div>
                    <button onClick={() => hendelIcrement(i)}>+</button>
                  </div>
                </div>
              </div>
              <div className="w-[25%]">
                <h2>${item.price * item.qun}</h2>
              </div>
            </div>
          </div>
        ))}




        <div className=" border-[2px] border-[#F0F0F0] py-5 px-2">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="">
                <div className=" border-2 border-[#F0F0F0] py-2 px-4">
                  <div className=" flex justify-between  gap-x-[60px] items-center">
                    <h2 className=' font-dm font-normal text-[16px] text-[#767676]'>S</h2>
                    <MdOutlineArrowDropDown />
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className=' font-dm font-medium text-[#262626] text-[14px] ml-3'>Apply coupon</h2>
              </div>
            </div>
            <div className="">
              <h2 className=' font-dm font-medium text-[#262626] text-[14px]'>Update cart</h2>
            </div>
          </div>
        </div>





        <div className=" flex lg:justify-end justify-center">
          <div className="lg:w-[40%]  pt-[50px]">
            <div className="">
              <div className="pb-[24px] ">
                <p className='text-[20px] text-[#262626] font-dm font-bold text-end '>Cart totals</p>
              </div>
              <div className="flex">
                <div className=" border-[1px] border-[#F0F0F0] h-[54px] lg:w-[322px] w-[175px] ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] lg:pl-[20px] px-4 '>Subtotal</p>
                </div>
                <div className="">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] lg:w-[322px] w-[175px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] pl-[20px] '> ${totalPrice}</p>
                  </div>
                </div>
              </div>
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
                <div className=" border-[1px] border-[#F0F0F0] h-[54px] lg:w-[322px] w-[175px] ">
                  <p className='text-[16px] text-[#262626] font-dm font-bold leading-[50px] lg:pl-[20px] px-[30px] '>Total</p>
                </div>
                <div className="">
                  <div className=" border-[1px] border-[#F0F0F0] h-[54px] lg:w-[322px] w-[175px] ">
                    <p className='text-[16px] text-[#767676] font-dm font-bold leading-[50px] lg:pl-[20px] px-4 '>${totalPrice}</p>
                  </div>
                </div>
              </div>
              <div className="pt-[20px] flex justify-end">
                <div className="">
                  <Link to='/checkout'>
                  <button className='h-[50px] w-[200px] items-center text-[14px] text-[#262626] font-dm font-semibold border-[1px] border-[#767676] hover:text-[#fff] hover:bg-[#262626] duration-500 ease-in-out'>Proceed to Checkout</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        </div>


      </Container>
    </div>
  )
}

export default CartPage
