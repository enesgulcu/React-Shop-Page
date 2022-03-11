import React from 'react'
import {useState, useEffect} from 'react';
import Products from './Products';
import Catagories from './Catagories';
import Data from './Data.json'
import shop from './shop.css'

function Shop() {

  const [data, setData] = useState(Data);
  const [filterCatagories, setFilterCatagories] = useState("All");
  const [textSearch, setTextSearch] = useState("");

 // Catagories Filter
 // eğer filterCatagories = ALL (hepsini getir) : Değilse => filterCatagories ile data nın eşleşenlerini getirir.
  const filterData = data.filter((data)=> filterCatagories === "All" ? data : data.catagories === filterCatagories)
  // Text Filter
  const searchFilter =  filterData.filter((search)=> search.title.toLowerCase().includes(textSearch.toLowerCase()));
  
  const onChangeImput = (e) => {
    setTextSearch(e.target.value);       
  }; 
            
  return (
    <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-dark nav_up">
              <a href="#">LOGO</a>
              <input type="text" className='searchConsole' placeholder='Your key Word' onChange={onChangeImput}/>
            </div>
            <div className='under_box'>
            <div className="catagori_box">
              <div className='catagories'>
              <Catagories allData = {data} setFilterCatagories = {setFilterCatagories}/>  
              </div>
            </div>  
            <div className="product_box">
              <div className="prodcuts">
              <Products Product = {searchFilter}/>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shop