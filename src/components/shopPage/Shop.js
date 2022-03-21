import React from 'react'
import {useState, useEffect} from 'react';
import Products from './Products';
import Catagories from './Catagories';
import Data from './Data.json'
import shop from './shop.css'
import Basket from './Basket';


import { FaShoppingBasket } from "react-icons/fa";
import Users from '../Users';

function Shop({users, activeUser, setActiveUser}) {

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
              <div className="userProfile">
              {activeUser ? 
                <div className="userProfileContainer">
                  <div className="shop-image" >
                    <img src={users.picture.medium} alt="" />
                  </div>
                  <div className="profileDetails">
                    <h5>{users.name.first} {users.name.last}</h5>
                  </div>
                  <div className="wallet"><h5><span className='money-amount'>${users.money}</span></h5></div>

                </div>                
                :  <h5>To be able to shop, please select from the user page first.</h5> }    
                        
              </div>

              <div className='nav_right_side col-12'>
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