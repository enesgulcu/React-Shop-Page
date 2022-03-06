import React from 'react'
import {useState, useEffect} from 'react';
import Products from './Products';

function Catagories({allData, setFilterCatagories}) {

  // collect uniq values and create new array of uniq values
  const uniqueArray = ["All", ...new Set(allData.map((veri)=>veri.catagories))];


  return (
    <>
      <ul>
      {
        uniqueArray.map((veri, index)=>{
         return <li key={index}>
          <button onClick={()=>setFilterCatagories(veri)}>{veri}</button>
         </li>
       })}
       </ul>
    </>
  )
}

export default Catagories