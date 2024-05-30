import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Post = ({Allpage}) => {
  
    return (
        <div className="">
        <div className=" flex justify-between flex-wrap lg:gap-0 gap-1">
          {Allpage.map((habib) => (
            <div className="lg:w-[33%] w-[49%]">
                <Link to={`/Shop/${habib.id}`}>
              <div className=" lg:my-[30px]">
                <div className="relative group overflow-hidden">
                  <img src={habib.thumbnail} className=' lg:w-[97%] w-[50%] h-[200px] lg:h-[300px] ' alt="" />
                  <div className=" w-full h-[-150px] bg-white  absolute bottom-[-150px] right-0 py-2 
                                group-hover:h-[-150px] group-hover:bottom-0 duration-300">
                    <div className="flex justify-end gap-2 items-center lg:py-3">
                      <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold
                         hover:text-[#262626] duration-500 text-center lg:text-start'>Add to Wish List</h2>
                      <FaHeart />
                    </div>
                    <div className="flex justify-end gap-2 items-center lg:py-3 py-1">
                      <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold 
                        hover:text-[#262626] duration-500'>Compare</h2>
                      <TfiReload />
                    </div>
                    <div className="flex justify-end gap-2 items-center lg:py-3 py-1">
                      <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold 
                        hover:text-[#262626] duration-500'>Add to Cart</h2>
                      <FaCartArrowDown />
                    </div>
                  </div>
                </div>
                <div className=" flex justify-between items-center">
                  <h2 className=' font-dm font-medium lg:text-[17px] text-[14px] text-[#262626]'>{habib.title}</h2>
                  <p className=' font-dm font-medium lg:text-[16px] text-[14px] text-[#767676]'>${habib.price}</p>
                </div>
              </div>
              </Link>
            </div>
            
          ))}

        </div>
      </div>

    )
}

export default Post
