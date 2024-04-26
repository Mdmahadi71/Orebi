import React from 'react'
import Container from './Container'
import Arrivalsone from '../assets/Arrivals1.png'
import Arrivalstwo from '../assets/Arrivals2.png'
import Arrivalsthree from '../assets/Arrivals3.png'
import Arrivalsfure from '../assets/Arrivals4.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import prod1 from '../assets/prod1.png'
import prod2 from '../assets/prod2.png'
import prod3 from '../assets/prod3.png'
import prod4 from '../assets/prod4.png'
import ado from '../assets/Ads_2.png'

const Arrivals = () => {
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div data-aos='fade-left' className='absolute lg:top-[37%] top-[30%] lg:h-[50px] h-[30px]  w-[30px]  lg:w-[50px] bg-[#979797] text-[#FFFFFF] right-[0] z-10 lg:text-[30px] text-[20px] cursor-pointer' onClick={onClick} > <IoIosArrowForward className='item-center lg:mt-[10px] mt-[5px]  lg:ml-[5px] ml-[2px] '  /> </div>
        );
    }

    function SamplePrevArrow(props) {
        const {className, style, onClick } = props;
        return (
            <div data-aos='fade-left' className='absolute lg:top-[37%] top-[30%] lg:h-[50px] h-[30px] w-[30px] lg:w-[50px] bg-[#979797] text-[#FFFFFF] left-[0] z-10 lg:text-[30px] text-[20px] cursor-pointer' onClick={onClick}> <IoIosArrowBack className='item-center lg:mt-[10px] mt-[5px]  lg:ml-[5px] ml-[2px] '  /> </div>
        );
    }
    const settings = {
        infinite: true,
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
                    dots: true
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
        <div>
            <Container className='lg:py-[118px] py-[40px]'>
                <div className="py-3">
                    <h2 className=' font-dm font-bold text-[39px] text-[#262626]'>New Arrivals</h2>
                </div>
                <Slider {...settings} className=' gap-x-1'>

                    <div className="">
                        <a href="#" target='blank'>
                            <img src={Arrivalsone} alt="" className='lg:w-[90%] w-full' />
                        </a>
                    </div>
                    <div className="">
                        <a href="#" target='blank'>
                            <img src={Arrivalstwo} alt="" className='lg:w-[90%] w-full' />
                        </a>
                    </div>
                    <div className="">
                        <a href="#" target='blank'>
                            <img src={Arrivalsthree} alt="" className='lg:w-[90%] w-full' />
                        </a>
                    </div>
                    <div className="">
                        <a href="#" target='blank'>
                            <img src={Arrivalsfure} alt="" className='lg:w-[90%] w-full ' />
                        </a>
                    </div>
                    <div className="">
                        <a href="#" target='blank'>
                            <img src={Arrivalsthree} alt="" className='lg:w-[90%] w-full' />
                        </a>
                    </div>
                </Slider>
                <Slider {...settings} className=' lg:pt-[100px] pt-[20px]'>
                <div className="">
                    <a href="#" target='blank'>
                        <img src={prod1} alt="" className='lg:w-[90%] w-full' />
                    </a>
                </div>
                <div className="">
                    <a href="#" target='blank'>
                        <img src={prod2} alt="" className='lg:w-[90%] w-full' />
                    </a>
                </div>
                <div className="">
                    <a href="#" target='blank'>
                        <img src={prod3} alt="" className='lg:w-[90%] w-full' />
                    </a>
                </div>
                <div className="">
                    <a href="#" target='blank'>
                        <img src={prod4} alt=""  className='lg:w-[90%] w-full'/>
                    </a>
                </div>
                <div className="">
                    <a href="#" target='blank'>
                        <img src={prod2} alt="" className='lg:w-[90%] w-full'/>
                    </a>
                </div>
                </Slider>
                <div className="lg:pt-[100px] pt-[20px]">
                    <img src={ado} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default Arrivals
