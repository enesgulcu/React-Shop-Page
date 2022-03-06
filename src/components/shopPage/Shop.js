import React from 'react'
import {useState, useEffect} from 'react';
import SearchList from './SearchList';
import Products from './Products';
import Catagories from './Catagories';
import Data from './Data.json'

function Shop() {

  const [data, setData] = useState(Data);
  const [filterCatagories, setFilterCatagories] = useState("All");

 // eğer filterCatagories = ALL (hepsini getir) : Değilse => filterCatagories ile data nın eşleşenlerini getirir.
  const filterData = data.filter((data)=> filterCatagories === "All" ? data : data.catagories === filterCatagories)
  console.log(filterData);
  
  
  


  return (
    <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-dark p-4">
              <a href="#">LOGO</a>
              <input type="text" className='searchConsole' placeholder='Your key Word'/>
            </div>
            <div className="col-2">
              <div className='catagories bg-danger p-4'>
              <Catagories allData = {data} setFilterCatagories = {setFilterCatagories}/>  
              </div>
            </div>  
            <div className="col-10">
              <div className="prodcuts bg-success p-4">
              <Products Product = {filterData}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shop