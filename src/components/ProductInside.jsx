import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';
import ProductImg from '../assets/prd1.png'
import ProductImg2 from '../assets/prd2.png'
import { IoIosStar } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { increment ,decrement} from '../counter/CounterState';

const ProductInside = () => {

  return (
      <div className='py-[50px]'>
          {/* <Container>
              <div className="">
                  <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>Products</h2>
                  <div className="">
                      <h2 className=' font-dm font-medium text-[12px] text-[#767676]'><Link to='/'>Home</Link> 	&gt; <Link to='/ProductPage'>Products</Link></h2>
                  </div>
              </div>
              <div className=" lg:flex justify-between items-center py-4">
                  <div className=" flex gap-x-[30px] items-center">
                      <h3 className=' font-dm font-semibold text-[#262626] text-[26px]'>Product</h3>
                      <h3 className=' font-dm font-semibold text-[#767676] text-[22px]'>$88.00</h3>
                      <p className=' font-dm font-semibold text-[#262626] text-[22px]'>$44.00</p>
                  </div>
                  <div className=" border-4 border-black py-3 px-5 bg-black inline-block ">
                      <h3 className=' font-dm font-bold text-white text-[16px]'>Add to Cart</h3>
                  </div>
              </div>
              <div className=" flex justify-between flex-wrap">
                  <div className="w-[49%] pt-2">
                      <img src={ProductImg} alt="" />
                  </div>
                  <div className="w-[49%] pt-2">
                      <img src={ProductImg2} alt="" />
                  </div>
                  <div className="w-[49%] pt-2">
                      <img src={ProductImg2} alt="" />
                  </div>
                  <div className="w-[49%] pt-2">
                      <img src={ProductImg} alt="" />
                  </div>

              </div>
              <div className="lg:w-[50%] py-[30px]">
                  <div className="">
                      <h2 className=' font-dm font-bold text-[39px] text-[#262626]'>Product</h2>
                      <div className=" flex gap-x-[40px] items-center py-[20px]">
                          <div className=" flex gap-x-2">
                              <IoIosStar className=' text-[#FFD881]' />
                              <IoIosStar className=' text-[#FFD881]' />
                              <IoIosStar className=' text-[#FFD881]' />
                              <IoIosStar className=' text-[#FFD881]' />
                              <IoIosStar className=' text-[#FFD881]' />
                          </div>
                          <div className="">
                              <h2 className=' font-dm font-normal text-[16px] text-[#767676]'>1 Review</h2>
                          </div>
                      </div>
                      <div className=" flex gap-x-[40px] items-center py-[20px] border-b-2 border-[#D8D8D8] ">
                          <h2 className=' font-dm font-normal text-[14px] text-[#767676]'>$88.00</h2>
                          <h3 className=' font-dm font-normal text-[16px] text-[#262626]'>$44.00</h3>
                      </div>
                      <div className=" flex gap-x-[40px] py-[20px]">
                          <div className="">
                              <h3 className=' font-dm font-bold text-[16px] text-[#262626]'>COLOR:</h3>
                          </div>
                          <div className="flex gap-x-[20px] ">
                              <div className=" border-4 border-[#979797] h-[20px] bg-[#979797] w-[20px] rounded-[50%] hover:h-[30px]
                             hover:w-[40px] hover:rounded-[50%] duration-500 cursor-pointer "></div>
                              <div className=" border-4 border-[#FF8686] h-[20px] bg-[#FF8686] w-[20px] rounded-[50%] hover:h-[30px]
                             hover:w-[40px] hover:rounded-[50%] duration-500 cursor-pointer "></div>
                              <div className=" border-4 border-[#7ED321] h-[20px] bg-[#7ED321] w-[20px] rounded-[50%] hover:h-[30px]
                             hover:w-[40px] hover:rounded-[50%] duration-500 cursor-pointer "></div>
                              <div className=" border-4 border-[#B6B6B6] h-[20px] bg-[#B6B6B6] w-[20px] rounded-[50%] hover:h-[30px]
                             hover:w-[40px] hover:rounded-[50%] duration-500 cursor-pointer "></div>
                              <div className=" border-4 border-[#15CBA5] h-[20px] bg-[#15CBA5] w-[20px] rounded-[50%] hover:h-[30px]
                             hover:w-[40px] hover:rounded-[50%] duration-500 cursor-pointer "></div>
                          </div>
                      </div>
                      <div className=" flex gap-x-[60px] items-center py-[20px]">
                          <div className="">
                              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>SIZE:</h2>
                          </div>
                          <div className=" border-2 border-[#F0F0F0] py-2 px-4">
                              <div className=" flex justify-between  gap-x-[60px] items-center">
                                  <h2 className=' font-dm font-normal text-[16px] text-[#767676]'>S</h2>
                                  <MdOutlineArrowDropDown />
                              </div>
                          </div>
                      </div>
                      <div className=" flex gap-x-[15px] items-center py-[20px] border-b-2 border-[#D8D8D8]">
                          <div className="">
                              <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>QUANTITY:</h2>
                          </div>
                          <div className=" border-2 border-[#F0F0F0] py-2 px-4">
                              <div className=" flex justify-between  gap-x-[60px] items-center">
                                  <button >-</button>
                                  <div className="<h2 className=' font-dm font-normal text-[16px] text-[#767676]'">
                                      
                                  </div>
                                  <button >+</button>
                              </div>
                          </div>
                      </div>
                      <div className=" flex gap-x-[40px] py-[20px] border-b-2 border-[#D8D8D8]">
                          <div className="">
                              <h2 className=' font-dm font-bold text-[16px] text-[#262626]' >STATUS:</h2>
                          </div>
                          <div className="">
                              <h2 className=' font-dm font-normal text-[16px] text-[#767676]'>In stock</h2>
                          </div>
                      </div>
                      <div className=" flex gap-x-5 py-[20px] border-b-2 border-[#D8D8D8]">
                          <div className=" border-2 border-[#262626] py-3 px-5 text-[#2B2B2B]
                        hover:bg-[#2B2B2B] hover:text-[#fff] duration-500">
                              <h2 className=' font-dm font-bold text-[16px] '>Add to Wish List</h2>
                          </div>
                          <div className=" border-2 border-[#262626] py-3 px-5 bg-[#2B2B2B]
                         hover:bg-white duration-500 text-[#fff] hover:text-[#222]">
                              <h2 className=' font-dm font-bold text-[16px] '>Add to Cart</h2>
                          </div>
                      </div>
                      <div className=" flex justify-between items-center border-b-2 border-[#D8D8D8] py-[20px]">
                          <h3 className=' font-dm font-bold text-[16px] text-[#262626]'>FEATURES  & DETAILS</h3>
                          <GoPlus />
                      </div>
                      <div className=" flex justify-between items-center border-b-2 border-[#D8D8D8] py-[20px]">
                          <h3 className=' font-dm font-bold text-[16px] text-[#262626]'>SHIPPING & RETURNS</h3>
                          <GoPlus />
                      </div>
                      <div className=" py-[20px]">
                          <h3 className=' font-dm font-normal text-[16px] text-[#767676]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                      </div>
                      <div className="border-b-2 border-[#D8D8D8] pb-[30px]">
                          <h2 className=' font-dm font-bold text-[20px] text-[#767676]'>Description</h2>
                          <div className=" flex gap-x-[40px] items-center">
                              <h2 className=' font-dm font-normal text-[14px] text-[#767676]'>1 review for Product</h2>
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
          </Container> */}
      </div>
  )
}

export default ProductInside
