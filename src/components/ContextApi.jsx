// import React from 'react';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// const ContextApi = () => {

//     let [data,setData] =useState([])
    
//     let getData = () => {
//         let info =axios.get("https://dummyjson.com/product").then((response)=>{
//             setData(response.data.products)
//         });
//     };


//     useEffect(()=>{
//        getData()
//     },[])

    

//   return (
//     <div>ContextApi</div>
//   )
// }

// export default ContextApi;