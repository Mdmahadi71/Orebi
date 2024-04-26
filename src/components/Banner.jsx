import React from 'react'
import bannerlogo from '../assets/banner.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Container from './Container';
import Flex from './Flex';
import { FaCarSide } from "react-icons/fa";
import { SlReload } from "react-icons/sl";

const Banner = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div className='banner_two'
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    position: 'absolute',
                    top: '50%',
                    transform: 'translatey(-50%)',
                    left: '60px',

                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='banner_one'
                style={{
                    width: "30px",
                    color: "transparent",
                    borderRight: "3px #FFFFFF solid",
                    padding: '10px 0',
                    fontWeight: '500'

                }}
            >
                0{i + 1}
            </div>
        )
    }
    return (
        <section className='py-8 border-b-2 border-[#6D6D6D] '>
            <Slider {...settings} >
                <div className="">
                    <img src={bannerlogo} alt="" />
                </div>
                <div className="">
                    <img src={bannerlogo} alt="" />
                </div>
                <div className="">
                    <img src={bannerlogo} alt="" />
                </div>
                <div className="">
                    <img src={bannerlogo} alt="" />
                </div>
            </Slider>
            <Container>
                <Flex className='justify-between '>
                    <div className="flex gap-2 items-center">
                        <h2 className=' font-dm font-bold text-[16px] text-[#262626]'>2</h2>
                        <h2 className=' font-dm font-normal text-[14px] text-[#6D6D6D]'>Two years warranty</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaCarSide />
                        <h2 className=' font-dm font-normal text-[14px] text-[#6D6D6D]'>Free shipping</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <SlReload />
                        <h2 className=' font-dm font-normal text-[14px] text-[#6D6D6D]'>Return policy in 30 days</h2>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Banner
