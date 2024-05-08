import React, { useEffect, useState } from 'react'
import Container from './Container'
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import { TfiReload } from "react-icons/tfi";
import { FaCartArrowDown } from "react-icons/fa";

const Arrivals = () => {

    let [product, setProduct] = useState([])

    let gatData = () => {
        axios.get(("https://dummyjson.com/products")).then((response) => {
            setProduct(response.data.products);
        })
    }
    useEffect(() => {
        gatData()
    }, [])
    console.log(product);



    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div data-aos='fade-left' className='absolute lg:top-[37%] top-[30%] lg:h-[50px] h-[30px]  w-[30px]  lg:w-[50px] bg-[#979797] text-[#FFFFFF] right-[0] z-10 lg:text-[30px] text-[20px] cursor-pointer' onClick={onClick} > <IoIosArrowForward className='item-center lg:mt-[10px] mt-[5px]  lg:ml-[5px] ml-[2px] ' /> </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div data-aos='fade-left' className='absolute lg:top-[37%] top-[30%] lg:h-[50px] h-[30px] w-[30px] lg:w-[50px] bg-[#979797] text-[#FFFFFF] left-[0] z-10 lg:text-[30px] text-[20px] cursor-pointer' onClick={onClick}> <IoIosArrowBack className='item-center lg:mt-[10px] mt-[5px]  lg:ml-[5px] ml-[2px] ' /> </div>
        );
    }
    const settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="py-[50px]">
            <Container>
                <div className="">
                    <h2 className=' font-dm font-bold text-[36px] text-[#262626]'>New Arrivals</h2>
                </div>
                <Slider {...settings}>
                    {product.map((item) => (
                        <div className="w-[23%] py-2">
                            <div className="">
                                <div className="  ">
                                    <div className="relative group overflow-hidden">
                                        <img src={item.thumbnail} className=' w-[97%] h-[300px] sm:h-[250px]' alt="Arrivalsone" />
                                        <div className=" w-full h-[-150px] bg-white  absolute bottom-[-150px] right-0 py-2 
                    group-hover:h-[-150px] group-hover:bottom-0 duration-300 mr-3">
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Add to Wish List</h2>
                                        <FaHeart />
                                    </div>
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Compare</h2>
                                        <TfiReload />
                                    </div>
                                    <div className="flex justify-end gap-2 items-center py-3">
                                        <h2 className=' font-dm font-medium text-[15px] text-[#767676] hover:font-bold hover:text-[#262626] duration-500'>Add to Cart</h2>
                                        <FaCartArrowDown />
                                    </div>
                                </div>
                                    </div>
                                    
                                    <div className=" absolute top-[10px] left-[50%] translate-x-[-50%]">
                                        <div className=" border-2 border-black p-3 bg-[black] inline-block">
                                            <h2 className=' font-dm font-bold text-[#ffff] text-[20px] '>{item.discountPercentage}% </h2>
                                        </div>
                                    </div>
                                    <div className="flex justify-between pr-4">
                                        <h2 className=' font-dm font-bold text-[#262626] text-[20px] '>{item.title}</h2>
                                        <p className=' font-dm font-bold text-[#767676] text-[17px]'>${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    )
}

export default Arrivals
