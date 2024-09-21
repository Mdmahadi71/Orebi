import React, { useEffect, useState } from 'react'
import Container from './Container'
import { IoIosArrowUp } from "react-icons/io";

const ScrollBackTotop = () => {
    let [ToptoBottom , setToptoBottom ] = useState(false)

    useEffect(()=>{
        if(window.scrollY > 100){
            setToptoBottom(true)
        }else{
            setToptoBottom(false)
        }
    },[])

    let ScrollTos=(()=>{
        window.scrollTo({
            top:'0',
            behavior:'smooth'
        })
    })
  return (
    <div>
        {ToptoBottom &&
      <Container>
        <button className=' w-[50px] h-[50px] right-[50px] bottom-[50px] fixed text-[50px] bg-sky-500' onClick={ScrollTos}><IoIosArrowUp/></button>
      </Container>
      }
    </div>
  )
}

export default ScrollBackTotop
