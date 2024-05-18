import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { createContext } from 'react'
let DataApi = createContext()
const ContextApi = ({children}) => {
     
    let [itemss, Setitemss] =useState([])
    let getData = ()=>{
        axios.get(('https://dummyjson.com/products')).then((response)=>{
            Setitemss(response.data.products);
        })
    }
    useEffect(() => {
        getData()
    }, [])
  return (
    <DataApi.Provider value={itemss}>
        {children}
    </DataApi.Provider >
  )
}

export  {ContextApi,DataApi}
