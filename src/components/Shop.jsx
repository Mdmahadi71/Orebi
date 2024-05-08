import React from 'react'
import Container from './Container'
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Shop = () => {
  return (
    <div>
      <Container>
        <div className=" flex justify-between">
          <div className="w-[20%]"></div>
          <div className="w-[80%]">
            <div className="  flex justify-between items-center py-[50px]">
              <div className="w-[20%]">
                <div className="flex gap-x-3">
                  <div className="border-2 border-[#F0F0F0] py-3 px-4 bg-black text-white hover:bg-white hover:text-black duration-300">
                    <IoGrid />
                  </div>
                  <div className="border-2 border-[#F0F0F0] py-3 px-4 bg-white text-[#262626] hover:bg-black hover:text-white duration-300">
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
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop
