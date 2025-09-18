import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';

const Product = () => {

    let [data ,setData] = useState([])


    let getData = () => {
        let info = axios.get("https://dummyjson.com/product").then((response)=>{
          setData(response.data.products)
          
        })
    }

useEffect(()=>{
    getData();
},[])



  return (
    <div>
        <div>
     {data.map((item)=>(
       <div>
         <h1>{item.thumbnail}</h1>
         <h1>{item.id}</h1>
         <h1>{item.title}</h1>
       </div>
        ))} 
        </div>
   
    </div>
  )
}

export default Product  