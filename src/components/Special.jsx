import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from './Container';
import spatial1 from '../assets/spata1.png'
import spatial2 from '../assets/spata2.png'
import spatial3 from '../assets/spata3.png'
import spatial4 from '../assets/spata4.png'

const Special = () => {
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div data-aos='fade-left' className='absolute lg:top-[37%] top-[30%] lg:h-[50px] h-[30px]  w-[30px]  lg:w-[50px] bg-[#979797] text-[#FFFFFF] right-[0] z-10 lg:text-[30px] text-[20px] cursor-pointer' onClick={onClick} >
                <IoIosArrowForward className='item-center lg:mt-[10px] mt-[5px]  lg:ml-[5px] ml-[2px] ' /> </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div data-aos='fade-left' className='absolute lg:top-[37%] top-[30%] lg:h-[50px] h-[30px] w-[30px] lg:w-[50px] bg-[#979797] text-[#FFFFFF] left-[0] z-10 lg:text-[30px] text-[20px] cursor-pointer' onClick={onClick}>
                <IoIosArrowBack className='item-center lg:mt-[10px] mt-[5px]  lg:ml-[5px] ml-[2px] ' /> </div>
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
        <Container className={`lg:py-[60px] py-[30px]`}>
            <div className="py-[20px]">
                <h2 className=' font-dm font-bold text-[39px] text-[#262626]'>Special Offers</h2>
            </div>
            <Slider {...settings} >
                <div className="">
                    <a href="#" target='blank'>
                        <img src={spatial1} alt="" />
                    </a>
                </div>
                <div className="">
                    <a href="#" target='blank'>
                        <img src={spatial2} alt="" className='lg:w-[90%] w-full' />
                    </a>
                </div>
                <div className="">
                    <a href="#" target='blank'>
                        <img src={spatial3} alt="" className='lg:w-[90%] w-full' />
                    </a>
                </div>
                <div className="">
                    <a href="#" target='blank'>
                        <img src={spatial4} alt="" className='lg:w-[90%] w-full' />
                    </a>
                </div>
                <div className="">
                    <a href="#" target='blank'>
                        <img src={spatial2} alt="" className='lg:w-[90%] w-full' />
                    </a>
                </div>
            </Slider>
        </Container>
    )
}

export default Special
