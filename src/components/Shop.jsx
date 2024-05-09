import React from 'react'
import Container from './Container'
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Shop = () => {
  return (
    <div>
      <Container>
        <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>Products</h2>
        <div className="">
          <h2 className=' font-dm font-medium text-[12px] text-[#767676]'><Link to='/'>Home</Link> 	&gt; <Link to='/Shop'>Products</Link></h2>
        </div>
        <div className=" flex justify-between gap-x-2">
          <div className="w-[20%] py-[50px]">
            <div className="">
              <h2 className=' font-dm font-bold text-[#262626] text-[20px]'>Shop by Category</h2>
              <div className=" pt-4">
                <div className=" flex justify-between items-center py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0">
                  <h2 className=' font-dm font-medium text-[#767676] text-[16px]'>Category 1</h2>
                  <IoAdd className='font-dm font-medium text-[#767676] text-[16px]' />
                </div>
                <div className=" flex justify-between items-center py-4 border-b-2 border-[#D8D8D8] bottom-1 left-0">
                  <h2 className=' font-dm font-medium text-[#767676] text-[16px]'>Category 1</h2>
                  <IoAdd className='font-dm font-medium text-[#767676] text-[16px]' />
                </div>
                <div className=" flex justify-between items-center py-4 border-b-2 border-[#D8D8D8] bottom-1 left-0">
                  <h2 className=' font-dm font-medium text-[#767676] text-[16px]'>Category 1</h2>
                  <IoAdd className='font-dm font-medium text-[#767676] text-[16px]' />
                </div>
                <div className=" flex justify-between items-center py-4 border-b-2 border-[#D8D8D8] bottom-1 left-0">
                  <h2 className=' font-dm font-medium text-[#767676] text-[16px]'>Category 1</h2>
                  <IoAdd className='font-dm font-medium text-[#767676] text-[16px]' />
                </div>
                <div className=" flex justify-between items-center py-4 border-b-2 border-[#D8D8D8] bottom-1 left-0">
                  <h2 className=' font-dm font-medium text-[#767676] text-[16px]'>Category 1</h2>
                  <IoAdd className='font-dm font-medium text-[#767676] text-[16px]' />
                </div>
              </div>
              <div className="py-4">
                <div className=" flex justify-between items-center">
                  <h2 className=' font-dm font-bold text-[#262626] text-[20px]'>Shop by Color</h2>
                  <IoMdArrowDropdown />
                </div>
                <div className=" pt-3">
                  <div className=" flex gap-x-3 items-center py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0">
                    <div className=" border  h-[10px] w-[10px] bg-black rounded-[50%]"></div>
                    <h3 className='font-dm font-medium text-[#767676] text-[16px] pt-1'>Color 1</h3>
                  </div>
                  <div className=" flex gap-x-3 items-center py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0">
                    <div className=" border  h-[10px] w-[10px] bg-[#FF8686] rounded-[50%]"></div>
                    <h3 className='font-dm font-medium text-[#767676] text-[16px] pt-1'>Color 1</h3>
                  </div>
                  <div className=" flex gap-x-3 items-center py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0">
                    <div className=" border  h-[10px] w-[10px] bg-[#7ED321] rounded-[50%]"></div>
                    <h3 className='font-dm font-medium text-[#767676] text-[16px] pt-1'>Color 1</h3>
                  </div>
                  <div className=" flex gap-x-3 items-center py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0">
                    <div className=" border  h-[10px] w-[10px] bg-[#B6B6B6] rounded-[50%]"></div>
                    <h3 className='font-dm font-medium text-[#767676] text-[16px] pt-1'>Color 1</h3>
                  </div>
                  <div className=" flex gap-x-3 items-center py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0">
                    <div className=" border  h-[10px] w-[10px] bg-[#15CBA5] rounded-[50%]"></div>
                    <h3 className='font-dm font-medium text-[#767676] text-[16px] pt-1'>Color 1</h3>
                  </div>
                </div>
              </div>
              <div className="py-4">
              <div className=" flex justify-between items-center">
                  <h2 className=' font-dm font-bold text-[#262626] text-[20px]'>Shop by Brand</h2>
                  <IoMdArrowDropdown />
                </div>
                <div className="">
                  <ul className='font-dm font-medium text-[#767676] text-[16px] pt-1 '>
                    <li className='py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0'>Brand 1</li>
                    <li className='py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0'>Brand 1</li>
                    <li className='py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0'>Brand 1</li>
                    <li className='py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0'>Brand 1</li>
                    <li className='py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0'>Brand 1</li>
                  </ul>
                </div>
              </div>
              <div className=" py-3">
              <div className=" flex justify-between items-center">
                  <h2 className=' font-dm font-bold text-[#262626] text-[20px]'>Shop by Price</h2>
                  <IoMdArrowDropdown />
                </div>
                <div className="">
                  <ul className='font-dm font-medium text-[#767676] text-[16px] pt-1 '>
                    <li className='py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0' >$0.00 - $9.99</li>
                    <li className='py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0'>$10.00 - $19.99</li>
                    <li className='py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0'>$20.00 - $29.99</li>
                    <li className='py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0'>$30.00 - $39.99</li>
                    <li className='py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0'>$40.00 - $69.99</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80%]">
            <div className="  flex justify-between items-center py-[50px]">
              <div className="w-[20%]">
                <div className="flex gap-x-3">
                  <div className="border-2 border-[#F0F0F0] py-3 px-4 bg-black text-white hover:bg-white hover:text-black duration-500">
                    <IoGrid />
                  </div>
                  <div className="border-2 border-[#F0F0F0] py-3 px-4 bg-white text-[#262626] hover:bg-black hover:text-white duration-500">
                    <FaList />
                  </div>
                </div>
              </div>
              <div className="w-[80%]">
                <div className="flex justify-end gap-4">
                  <div className="w-[35%]">
                    <div className="flex gap-4 pt-[6px]">
                      <h2 className=' font-dm font-medium text-[16px] text-[#767676]  py-3 px-4'>Sort by:</h2>
                      <div className=" border-4 border-[#262626] py-3 px-4">
                        <div className="flex justify-between gap-x-[25px] items-center">
                          <h3 className='font-dm font-medium text-[16px] text-[#767676]'>Featured</h3>
                          <IoMdArrowDropdown className='text-[16px]' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[25%]">
                    <div className="flex gap-4 pt-[6px]">
                      <h2 className='font-dm font-medium text-[16px] text-[#767676]  py-3 px-4'>Show:</h2>
                      <div className=" border-4 border-[#262626] py-3 px-4">
                        <div className="flex justify-between gap-x-[25px] items-center">
                          <h3 className='font-dm font-medium text-[16px] text-[#767676]'>36</h3>
                          <IoMdArrowDropdown className='text-[16px]' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">

            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop
