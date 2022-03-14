import React from 'react'
import {useState, useEffect} from 'react';
import Products from './Products';
import Catagories from './Catagories';
import Data from './Data.json'
import shop from './shop.css'
import Basket from './Basket';
import { FaShoppingBasket } from "react-icons/fa";

function Shop() {

  const [data, setData] = useState(Data);
  const [filterCatagories, setFilterCatagories] = useState("All");
  const [textSearch, setTextSearch] = useState("");
  const [basket, setBasket] = useState([])

  const [basketDisplay, setBasketDisplay] = useState(false);

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
          <div className="row main">
            <div className="col-12 bg-dark nav_up">
              <a href="#" className='logoClass'>LOGO</a>

              <div className='nav_right_side'>
                <input type="text" className='searchConsole' placeholder='Your key Word' onChange={onChangeImput}/>

                <div className='basket_icon' onClick={()=>setBasketDisplay(!basketDisplay)}>
                  <h4 className='basketNumber'>{basket.length}</h4>
                  <FaShoppingBasket className='shopping-basket'/>
                </div> 
                            
              </div>
            </div>
            <div className={`${basketDisplay ? 'BasketDetails' : 'd-none'}`}> 
                  <Basket basket = {basket}/>                
                </div> 
            <div className='under_box'>
              <div className="catagori_box">
                <div className='catagories'>
                <Catagories allData = {data} setFilterCatagories = {setFilterCatagories}/>  
                </div>
              </div>  
              <div className="product_box">
                <div className="prodcuts">
                  <Products Product = {searchFilter} basket = {basket}  setBasket = {setBasket}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Shop