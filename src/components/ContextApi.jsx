import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { createContext } from 'react'
let DataApi = createContext()
const ContextApi = ({children}) => {
     
    let [info, Setinfo] =useState([])
    let getData = ()=>{
        axios.get(('https://dummyjson.com/products')).then((response)=>{
            Setinfo(response.data.products);
        })
    }
    useEffect(() => {
        getData()
    }, [])
  return (
    <DataApi.Provider value='info'>
        {children}
    </DataApi.Provider >
  )
}

export  {ContextApi,DataApi}
