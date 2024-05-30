import Container from './Container'
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Post from './Pagination/Post';
import Paginationarea from './Pagination/Paginationarea';
import { FaHeart } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext, useState } from 'react';
import { DataApi } from './ContextApi';


const Shop = () => {

  let itemss = useContext(DataApi)
  let [pageProdect, setpgeProduct] = useState(1)
  let [perPage, setparPage] = useState(6)

  let Firstpage = pageProdect * perPage

  let LastPage = Firstpage - perPage
  let Allpage = itemss.slice(LastPage, Firstpage)


  let pageNumber =[]
  
  for(let i = 0; i < Math.ceil(itemss.length / perPage ); i++){
    pageNumber.push(i)
  }
 
let paginets = (pageNumber) =>{
  setpgeProduct(pageNumber + 1)
}
let next = ()=>{
  if(pageProdect < pageNumber.length){
    setpgeProduct((state)=>state + 1)
  }
}

let prew =()=>{
  if(pageProdect > 1){
    setpgeProduct((state)=>state - 1)
  }
}
  return (
    <div>
      <Container>
        <h2 className=' font-dm font-bold text-[49px] text-[#262626]'>Products</h2>
        <div className="">
          <h2 className=' font-dm font-medium text-[12px] text-[#767676]'><Link to='/'>Home</Link> 	&gt; <Link to='/ProductPage'>Products</Link></h2>
        </div>
        <div className=" flex justify-between gap-x-2">
          <div className=" lg:w-[20%] py-[50px] ">
            <div className="">
              <h2 className=' font-dm font-bold text-[#262626] lg:text-[20px] text-[16px]'>Shop by Category</h2>
              <div className=" lg:pt-4 pt-[36px]">
                <div className=" flex justify-between items-center py-4 border-b-2 border-[#d8d8d8b5] bottom-1 left-0">
                  <h2 className=' font-dm font-medium text-[#767676] lg:text-[16px] text-[12px]'>Category 1</h2>
                  <IoAdd className='font-dm font-medium text-[#767676] lg:text-[16px] text-[12px]' />
                </div>
                <div className=" flex justify-between items-center py-4 border-b-2 border-[#D8D8D8] bottom-1 left-0">
                  <h2 className=' font-dm font-medium text-[#767676] lg:text-[16px] text-[12px]'>Category 1</h2>
                  <IoAdd className='font-dm font-medium text-[#767676] lg:text-[16px] text-[12px]' />
                </div>
                <div className=" flex justify-between items-center py-4 border-b-2 border-[#D8D8D8] bottom-1 left-0">
                  <h2 className=' font-dm font-medium text-[#767676] lg:text-[16px] text-[12px]'>Category 1</h2>
                  <IoAdd className='font-dm font-medium text-[#767676] lg:text-[16px] text-[12px]' />
                </div>
                <div className=" flex justify-between items-center py-4 border-b-2 border-[#D8D8D8] bottom-1 left-0">
                  <h2 className=' font-dm font-medium text-[#767676] lg:text-[16px] text-[12px]'>Category 1</h2>
                  <IoAdd className='font-dm font-medium text-[#767676] lg:text-[16px] text-[12px]' />
                </div>
                <div className=" flex justify-between items-center py-4 border-b-2 border-[#D8D8D8] bottom-1 left-0">
                  <h2 className=' font-dm font-medium text-[#767676] lg:text-[16px] text-[12px]'>Category 1</h2>
                  <IoAdd className='font-dm font-medium text-[#767676] lg:text-[16px] text-[12px]' />
                </div>
              </div>
              <div className="py-4">
                <div className=" flex justify-between items-center">
                  <h2 className=' font-dm font-bold text-[#262626] text-[15px] lg:text-[20px]'>Shop by Color</h2>
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
                  <h2 className=' font-dm font-bold text-[#262626] text-[15px] lg:text-[20px]'>Shop by Brand</h2>
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
                  <h2 className=' font-dm font-bold text-[#262626] text-[15px] lg:text-[20px]'>Shop by Price</h2>
                  <IoMdArrowDropdown />
                </div>
                <div className="">
                  <ul className='font-dm font-medium text-[#767676] text-[9px] lg:text-[16px] pt-1 '>
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
          <div className="lg:w-[80%]">
            <div className="  flex justify-between items-center py-[50px]">
              <div className="lg:w-[20%]">
                <div className="lg:flex gap-x-3">
                  <div className="border-2 border-[#F0F0F0] py-3 px-4 bg-black text-white hover:bg-white hover:text-black duration-500">
                    <IoGrid />
                  </div>
                  <div className="border-2 border-[#F0F0F0] py-3 px-4 bg-white text-[#262626] hover:bg-black hover:text-white duration-500">
                    <FaList />
                  </div>
                </div>
              </div>
              <div className="lg:w-[80%]">
                <div className="lg:flex lg:justify-end gap-4">
                  <div className="lg:w-[35%]">
                    <div className="flex gap-4 pt-[6px]">
                      <h2 className=' font-dm font-medium text-[16px] text-[#767676]   text-center lg:text-start lg:py-3 py-1 px-2 lg:px-4'>Sort by:</h2>
                      <div className=" border-2 border-[#F0F0F0] py-3 px-4">
                        <div className="flex justify-between lg:gap-x-[25px] gap-x-2 items-center">
                          <h3 className='font-dm font-medium text-[16px] text-[#767676]'>Featured</h3>
                          <IoMdArrowDropdown className='text-[16px]' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[25%]">
                    <div className="flex gap-4 pt-[6px]">
                      <h2 className='font-dm font-medium text-[16px] text-[#767676]  py-3 px-4'>Show:</h2>
                      <div className=" border-2 border-[#F0F0F0] py-3 px-4">
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
            <div className=" lg:text-end">
              <Post Allpage={Allpage} />
              <Paginationarea pageNumber={pageNumber} paginets={paginets} pageProdect={pageProdect} prew={prew} next={next}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop
