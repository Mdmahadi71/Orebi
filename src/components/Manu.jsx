import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaCartArrowDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useRef } from 'react';
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { DataApi } from './ContextApi';

const Manu = () => {
    let info = useContext(DataApi)
    let data = useSelector((state) => state.product.cartItem)
    let dispatch = useDispatch()
    let [cateshow, catesetshow] = useState(false)
    let catemanu = useRef()
    let [logshow, logsetshow] = useState(false)
    let logmy = useRef()
    let [carshow, carsetshow] = useState(false)
    let carmanu = useRef()
    let [elecshow, elecsetshow] = useState(false)
    let elecmanu = useRef()
    let [searchChange, setsearchChange] = useState('')
    let [searchFilter, setsearchFilter] = useState([])
    let navigate = useNavigate()
    let [selectedItemIndex, setSelectedItemIndex] = useState(-1); 



    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (catemanu.current.contains(e.target) == true) {
                catesetshow(!cateshow)
            } else {
                catesetshow(false)
            }
            if (logmy.current.contains(e.target) == true) {
                logsetshow(!logshow)
            } else {
                logsetshow(false)
            }
            if (carmanu.current.contains(e.target) == true) {
                carsetshow(!carshow)
            } else {
                carsetshow(false)
            }
            if (elecmanu.current.contains(e.target) == true) {
                elecsetshow(true)
            } else {
                carsetshow(false)
            }
        })
    }, [cateshow, logshow, carshow, elecshow])

    let handelCharce = (e) => {
        setsearchChange(e.target.value)
        if(e.target.value == ''){
            setsearchFilter([])
        }else{
            let searchFind = info.filter((item) => item.title.toLowerCase().includes(e.target.value))
            setsearchFilter(searchFind);
        }
     
    }
    let handelcart = (id)=>{
        navigate(`/Shop/${id}`)
        setsearchFilter('')
        setsearchChange('')
        
    }
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setSelectedItemIndex(prevIndex => Math.min(prevIndex + 1, searchFilter.length - 1));
        } else if (e.key === 'ArrowUp') {
            setSelectedItemIndex(prevIndex => Math.max(prevIndex - 1, -1));
        } else if (e.key === 'Enter' && selectedItemIndex !== -1) {
            handleSingleP(searchFilter[selectedItemIndex].id);
        }
    };


    return (
        <div>
            <Container>
                <Flex className=' items-center justify-between'>
                    <div className="w-[30%] items-center  relative">
                        <div className="flex items-center gap-x-2" ref={catemanu} >
                            <FaBarsStaggered />
                            <h3 className='font-dm text-[#262626] font-bold text-[14px]'>Shop by  Category</h3>
                        </div>
                        {cateshow &&
                            <div className=" absolute lg:text-start text-center z-50 lg:top-[35px] top-[50px] left-0 lg:w-[300px] w-[200px] bg-[#262626] ">
                                <ul className='pl-2 '>
                                    <li className='font-dm text-[#FFFFFF70] font-bold text-[14px] py-4
                                     hover:text-[#FFFFFF] hover:pl-3 duration-200 '>Accesories</li>
                                    <li className='font-dm text-[#FFFFFF70] font-bold text-[14px] py-4 
                                    hover:text-[#FFFFFF] hover:pl-3 duration-200'>Furniture</li>
                                    <li className=' relative font-dm text-[#FFFFFF70] font-bold text-[14px] py-4
                                     hover:text-[#FFFFFF] hover:pl-3 duration-200' ref={elecmanu}>Electronics</li>
                                    <li className='font-dm text-[#FFFFFF70] font-bold text-[14px] py-4
                                     hover:text-[#FFFFFF] hover:pl-3 duration-200'>Clothes</li>
                                    <li className='font-dm text-[#FFFFFF70] font-bold text-[14px] py-4
                                     hover:text-[#FFFFFF] hover:pl-3 duration-200'>Bags</li>
                                    <li className='font-dm text-[#FFFFFF70] font-bold text-[14px] py-4
                                     hover:text-[#FFFFFF] hover:pl-3 duration-200'>Home appliances</li>
                                </ul>

                            </div>
                        }
                        {elecshow &&
                            <div className=" lg:w-[500px] w-[350px] lg:text-start text-center absolute z-50 lg:top-[35px] top-[50px] lg:left-[300px]  bg-[#F5F5F3] py-4 lg:px-4 px-2 ">
                                <ul className='lg:flex justify-between font-dm font-bold text-[#262626] text-[16x]'>
                                    <div className="flex gap-6">
                                        <li  >Phones
                                            <ul>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 1</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 2</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 3</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 4</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 5</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 6</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Phone 7</li>
                                            </ul>
                                        </li>
                                        <li>Computers
                                            <ul>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 1</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 2</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 3</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 4</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 5</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 6</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Computer 7</li>
                                            </ul>
                                        </li>
                                    </div>
                                    <div className="flex  gap-6">
                                        <li>Smart watches
                                            <ul>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 1</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 2</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 3</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 4</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 5</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 6</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1' >Smart watches 7</li>
                                            </ul>
                                        </li>
                                        <li>Cameras
                                            <ul className=''>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 1</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 2</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 3</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 4</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 5</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 6</li>
                                                <li className=' font-dm font-normal text-[#767676] text-[14px] py-1'>Camera 7</li>
                                            </ul>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="w-[40%] ">
                       <div className="relative">
                       <input onChange={handelCharce} onKeyDown={handleKeyDown} value={searchChange}  type="text" placeholder='Search Products' className=' border-2 border-[#222] h-12 w-full pl-2 ' />
                        <div className=" absolute  lg:right-[10px] right-0 top-[50%] translate-y-[-50%] ">
                            <IoSearch />
                        </div>

                       </div>
                          {searchFilter.length > 0 &&
                        <div className="h-[500px] w-[450px] overflow-scroll absolute z-20">
                            {searchFilter.map((item ,index)=>(
                                 <div
                                 key={item.id}
                                 className={`flex bg-[#F5F5F3] py-[20px] px-[20px] ${index === selectedItemIndex ? 'bg-gray-200' : ''}`}
                                 
                                 onClick={()=>handelcart(item.id)} >
                                 <div className="flex justify-between items-center gap-x-3 px-2 py-5">
                                     <div className=" ">
                                         <img src={item.thumbnail} alt="" />
                                     </div>
                                     <div className=" w-full">
                                         <h3 className=' font-dm text-black font-samibold text-[14px]'>{item.title}</h3>
                                         <h3 className='font-dm text-black font-bold text-[14px]'>${item.price}</h3>
                                     </div>
                                 </div>
                             </div>
                            ))}
                           
                        </div>
                         }
                    </div>
                    
                    <div className="w-[27%] ">
                        <div className="flex justify-end gap-x-6">
                            <div className=" relative">
                                <div className="flex" ref={logmy}>
                                    <CiUser />
                                    <TiArrowSortedDown />
                                </div>
                                {logshow &&
                                    <div className=" w-[180px] absolute z-50 top-[35px] right-[10px] ">
                                        <h3 className='font-dm text-[#FFFFFF] font-bold text-[16px] bg-[#2B2B2B] 
                                        py-4 px-5 text-center '>My Account</h3>
                                        <h3 className='font-dm text-[#262626] font-bold text-[16px] py-4 px-3
                                         bg-[#F0F0F0] text-center '>Log Out</h3>
                                    </div>
                                }
                            </div>
                            <div className=" relative">
                                <div className="">
                                    <div className=" relative cursor-pointer" ref={carmanu}>
                                        {data.length ? <div className=" absolute top-[-15px] text-center lg:h-[20px] h-[15px] lg:w-[20px] w-[15px] bg-[#F5F5F3] leading-[20px] lg:right-[-9px] ">
                                            <h2 className=' font-dm text-[14px] text-[#262626]'>{data.length}</h2>
                                        </div> : ''}
                                        <FaCartArrowDown />
                                    </div>
                                </div>


                                {carshow &&
                                    <div className="">
                                        {data.map((item, i) => (
                                            <div className="">
                                                <div className=" w-[350px] border-2 border-[#F0F0F0] absolute z-50 top-[35px] right-0">
                                                    <div className="">

                                                        <div className="flex justify-between items-center gap-2 bg-[#F5F5F3] ">
                                                            <div className="flex justify-between items-center gap-x-3 px-2 py-5">
                                                                <div className=" ">
                                                                    <img src={item.thumbnail} alt="" />
                                                                </div>
                                                                <div className=" w-full">
                                                                    <h3 className=' font-dm text-black font-samibold text-[14px]'>{item.title}</h3>
                                                                    <h3 className='font-dm text-black font-bold text-[14px]'>${item.price}</h3>
                                                                </div>
                                                            </div>
                                                            <div className="px-4 py-2">
                                                                <div onClick={() => dispatch(productdlt(i))} className="font-dm text-black 
                                                           font-extrabold text-[24px] cursor-pointer">
                                                                    <ImCross />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="px-4 py-5 bg-[#FFFFFF]">
                                                        <div className="">
                                                            <h3 ><samp className='font-dm text-[#767676] font-bold text-[16px]'>Subtotal:</samp>
                                                                <samp className=' font-dm text-black  font-extrabold text-[16px]'>${item.price * item.qun}</samp></h3>
                                                        </div>
                                                        <div className="flex justify-between gap-1 pt-2">
                                                            <div className="border-2 border-[#222] py-3 px-8 bg-black font-dm text-[14px] font-bold
                                                     text-white hover:bg-white hover:text-black duration-200">
                                                                <Link to='/cart'>
                                                                    <h2>View Cart</h2>
                                                                </Link>
                                                            </div>
                                                            <div className="border-2 border-[#222] py-3 px-8 bg-black text-white font-dm text-[14px] 
                                                    font-bold hover:bg-white hover:text-black duration-200">
                                                                <Link to='/checkout'>
                                                                    <h3>Checkout</h3>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        ))}
                                    </div>

                                }
                            </div>
                        </div>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Manu
