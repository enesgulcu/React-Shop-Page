import React from 'react'
import {useState,useRef, useEffect} from 'react';
import Products from './Products';
import catagories from './catagories.css'
function Catagories({allData, setFilterCatagories}) {

  // collect uniq values and create new array of uniq values
  const uniqueArray = ["All", ...new Set(allData.map((veri)=>veri.catagories))];

  const [activeLi, setActiveLi] = useState("All");

  

  const choosing = (veri, e) =>{
    setFilterCatagories(veri);
    setActiveLi(veri);
  }

  

  return (
    <>
      <ul>
      {
        uniqueArray.map((veri, index)=>{
         return <li  className={activeLi === veri ? "clickList" : ""} key={index} onClick={(e)=>choosing(veri,e)}>
         {veri}
         </li>
       })}
       </ul>
    </>
  )
}

export default Catagories