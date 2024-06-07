import React from 'react'
import Container from '../components/Container'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


const LastPage = () => {
  return (
    <div>
      <Container>
        <div className="lg:w-[50%]">
            <div className=" font-dm font-bold text-[#262626] lg:text-[200px] text-[100px] pt-[50px]">
              <h2>404</h2>
            </div>
            <div className="py-[30px]">
                <p className=' font-dm font-normal text-[14px] text-[#767676]'>The page you were looking for couldn't be found. The page could be 
                    removed or you misspelled the word while searching for it. Maybe try a search?</p>
            </div>
            <div className=" relative">
                <input type="search" name=" search" placeholder='Type to search' className=' w-full h-[50px] border-[3px] border-[#F0F0F0] pl-4' id="" />
                <span className=' absolute top-[18px] right-[13px] text-[20px]'><CiSearch/></span>
            </div>
            <div className=" py-5">
                <div className=" border-[2px] border-[#262626] px-7 py-3 inline-block bg-white text-[#262626] hover:bg-[#262626] hover:text-[#ffff] duration-300">
                   <Link to="/"> <span className=' font-dm font-bold text-[20px]'>Back to Home</span></Link>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default LastPage
