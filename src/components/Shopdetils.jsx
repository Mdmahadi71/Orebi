import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Container from "./Container"
import Flex from "./Flex"
import { IoIosStar } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa6";
import { IoMdStarHalf } from "react-icons/io";
import {useDispatch, useSelector } from 'react-redux'
import { addtoCart, productDecrement, productIncerment } from "../counter/Productslice"

const Shopdetils = () => {
    let data = useSelector((state)=>state.product.cartItem)
    let [show, setShow] = useState(false)
    let [showFeatu, setFeatu] = useState(false)
    let productId = useParams()
    let dispatch = useDispatch()
    let [habib, sethabib] = useState([])

    let dataId = () => {
        axios.get(`https://dummyjson.com/products/${productId.Id}`).then((response) => {
            sethabib(response.data)
        })
    }

    useEffect(() => {
        dataId()
    }, [])


    let clintrating = Array.from({ length: 5 }, (elm, index) => {
        let number = index + 0.5
        return (
            habib.rating > index + 1 ? <IoIosStar /> :
                habib.rating > number ? <IoMdStarHalf /> : <FaRegStar />
        )
    })
    let hendelcart =(item)=>{
       dispatch(addtoCart({...item, qun:1}))
    }
    let hendledecrement =(item)=>{
        dispatch(productDecrement(item))
    }
    let hendelIncrement =(item)=>{
        dispatch(productIncerment(item))
    }
  return (
    <div className="py-[150px]">
      <Container>
        <div className="">
        <div className=" lg:flex justify-between items-center py-4">
                  <div className=" flex gap-x-[30px] items-center">
                      <h3 className=' font-dm font-semibold text-[#262626] text-[26px]'>Product</h3>
                      <h3 className=' font-dm font-semibold text-[#767676] text-[18px]'>${habib.price}</h3>
                      <p className=' font-dm font-semibold text-[#262626] text-[18px]'>${habib.price}</p>
                  </div>
                  <Link to ='/cart'>
                  <div onClick={()=>hendelcart(habib)}className=" border-4 border-black py-3 px-5 bg-black inline-block ">
                      <h3 className=' font-dm font-bold text-white text-[16px]'>Add to Cart</h3>
                  </div>
                  </Link>
              </div>
        </div>
        <div className=" flex justify-between flex-wrap py-4 px-2">
          {habib?.images?.map((hadfae) => (
            <div className="w-[47%]">
              <img src={hadfae} className="h-[300px] w-full" alt="" />
            </div>
            
          ))}
          </div>

        <div className="lg:w-[50%] py-[30px]">
                  <div className="">
                      <h2 className=' font-dm font-bold text-[39px] text-[#262626]'>Product</h2>
                      <div className=" flex gap-x-[40px] items-center py-[20px]">
                          <div className=" flex gap-x-2 text-[#FFD881] ">
                              {clintrating}
                          </div>
                          <div className="">
                              <h2 className=' font-dm font-normal text-[16px] text-[#767676]'>1 Review</h2>
                          </div>
                      </div>
                      <div className=" flex gap-x-[40px] items-center py-[20px] border-b-2 border-[#D8D8D8] ">
                          <h2 className=' font-dm font-normal text-[14px] text-[#767676]'>${habib.price}</h2>
                          <h3 className=' font-dm font-normal text-[16px] text-[#262626]'>${habib.price}</h3>
                      </div>
                      <div className=" flex gap-x-[40px] py-[20px]">
                          <div className="">
                              <h3 className=' font-dm font-bold text-[16px] text-[#262626]'>Discount:</h3>
                          </div>
                          <div className="">
                            <h2 className=' font-dm font-norlam text-[14px] text-[#262626]'>{habib.discountPercentage}%</h2>
                          </div>
                      </div>
                      <div className=" flex gap-x-[60px] items-center py-[20px]">
                          <div className="">
                              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>Warranty:</h2>
                          </div>
                          <div className="">
                            <h3 className=' font-dm font-medium text-[16px] text-[#767676]'>{habib.warrantyInformation}</h3>
                          </div>
                         
                      </div>
                      {data.map((item,i) => (
                        <div className=" flex gap-x-[15px] items-center py-[20px] border-b-2 border-[#D8D8D8]">
                        <div className="">
                            <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>QUANTITY:</h2>
                        </div>
                        <div className=" border-2 border-[#F0F0F0] py-2 px-4">
                            <div className=" flex justify-between  gap-x-[60px] items-center">
                                <button onClick={()=>hendledecrement(i)}>-</button>
                                <div className="<h2 className=' font-dm font-normal text-[16px] text-[#767676]">
                                    <h2>{item.qun}</h2>
                                </div>
                                <button onClick={()=>hendelIncrement(i)}>+</button>
                            </div>
                        </div>
                    </div>
                      ))}
                      
                      <div className=" flex gap-x-[40px] py-[20px] border-b-2 border-[#D8D8D8]">
                          <div className="">
                              <h2 className=' font-dm font-bold text-[16px] text-[#262626]' >STATUS:</h2>
                          </div>
                          <div className="">
                              <h2 className=' font-dm font-normal text-[16px] text-[#767676]'>{habib.stock}  In stock</h2>
                          </div>
                      </div>
                      <div className=" flex gap-x-5 py-[20px] border-b-2 border-[#D8D8D8]">
                          <div className=" border-2 border-[#262626] py-3 px-5 text-[#2B2B2B]
                        hover:bg-[#2B2B2B] hover:text-[#fff] duration-500">
                              <h2 className=' font-dm font-bold text-[16px] '>Add to Wish List</h2>
                          </div>
                          <Link to ='/cart'>
                          <div onClick={()=>hendelcart(habib)} className=" border-2 border-[#262626] py-3 px-5 bg-[#2B2B2B]
                         hover:bg-white duration-500 text-[#fff] hover:text-[#222]">
                              <h2 className=' font-dm font-bold text-[16px] '>Add to Cart</h2>
                          </div>
                          </Link>
                      </div>
                    
                      <div onClick={()=>setFeatu(!showFeatu)} className="">
                          <div className=" flex justify-between items-center border-b-2 border-[#D8D8D8] py-[20px]">
                              <h3 className=' font-dm font-bold text-[16px] text-[#262626]'>FEATURES  & DETAILS</h3>
                              {showFeatu == true ? <RxCross2/> :<GoPlus />}
                          </div>
                          {showFeatu && 
                          <div className=" py-[20px]">
                              <h3 className=' font-dm font-normal text-[16px] text-[#767676]'>{habib.description} </h3>
                          </div>
                          }
                      </div>
                      <div onClick={()=>setShow(!show)} className="">
                          <div className=" flex justify-between items-center border-b-2 border-[#D8D8D8] py-[20px]">
                              <h3 className=' font-dm font-bold text-[16px] text-[#262626]'>SHIPPING & RETURNS</h3>
                              {show == true ? <RxCross2/> :<GoPlus />}
                          </div>
                          {show && 
                          <div className=" py-[20px]">
                              <h3 className=' font-dm font-normal text-[16px] text-[#767676]'> {habib.description} </h3>
                          </div>
                          }
                      </div>
                      
                      <div className="border-b-2 border-[#D8D8D8] pb-[30px]">
                          <h2 className=' font-dm font-bold text-[20px] text-[#767676]'>Description</h2>
                          <div className=" flex gap-x-[40px] items-center">
                              <h2 className=' font-dm font-normal text-[14px] text-[#767676]'>{habib.description} </h2>
                              <h2 className=' font-dm font-bold text-[18px] text-[#262626]'>Reviews (1)</h2>
                          </div>
                      </div>
                      <div className="py-[20px] ">
                          <div className="flex gap-x-[30px] items-center py-[20px]">
                              <div className=" ">
                                  <h2 className=' font-dm font-medium text-[16px] text-[#767676]'>John Ford</h2>
                              </div>
                              <div className=" flex gap-x-[20px] ">
                                  <IoIosStar className=' text-[#FFD881]' />
                                  <IoIosStar className=' text-[#FFD881]' />
                                  <IoIosStar className=' text-[#FFD881]' />
                                  <IoIosStar className=' text-[#FFD881]' />
                                  <IoIosStar className=' text-[#FFD881]' />
                              </div>
                          </div>
                          <div className="">
                              <p className=' font-dm font-light text-[14px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                  when an unknown printer took a galley of type and scrambled it to make a type
                                  specimen book. It has survived not only five centuries, but also the leap into
                                  electronic typesetting, remaining essentially unchanged.</p>
                          </div>
                      </div>
                      <div className="">
                          <h2 className=' font-dm font-bold text-[25px] text-[#262626]'>Add a Review</h2>
                          <div className="">
                              <h2 className=' font-dm font-bold text-[19px] text-[#262626] py-4'>Name</h2>
                              <input type="text" className='border-b-2 border-[#D8D8D8] w-full font-dm font-light text-[14px]
                             text-[#262626]' placeholder='Your name here' />
                              <h2 className=' font-dm font-bold text-[19px] text-[#262626] py-4'>Email</h2>
                              <input type="text" className='border-b-2 border-[#D8D8D8] w-full font-dm font-light text-[14px]
                             text-[#262626]' placeholder='Your email here' />
                              <h2 className=' font-dm font-bold text-[19px] text-[#262626] py-4'>Review</h2>
                              <input type="text" className='border-b-2 border-[#D8D8D8] w-full font-dm font-light text-[14px]
                             text-[#262626]' placeholder='Your review here' />
                              <div className="pt-[30px]">
                                  <div className=" border-2 border-black py-2 px-[40px] bg-black text-[#fff] inline-block cursor-pointer hover:bg-white hover:text-black duration-500">
                                      <button type='submit' className=' font-dm font-bold text-[16px] '>Post</button>
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

export default Shopdetils
