import React from 'react'
import {useState, useEffect} from 'react';
import Products from './Products';
import Catagories from './Catagories';
import Data from './Data.json'
import shop from './shop.css'
import Basket from './Basket';


import { FaShoppingBasket } from "react-icons/fa";
import Users from '../Users';

function Shop({users, activeUser, setActiveUser, setUser_invoice, user_invoice, basket, setBasket}) {

  const [data, setData] = useState(Data);
  const [filterCatagories, setFilterCatagories] = useState("All");
  const [textSearch, setTextSearch] = useState("");
  const [basketDisplay, setBasketDisplay] = useState(false);
  

  let wallet = 0;
  let total = 0;  
  let summary = 0;
  let invoice = [0,0,0]
  let userMoney = users.money;

  //calculate basket value and user wallet
  const totalPrice = ()=>{
    for(let i = 0; i < basket.length ; i++ ){ 
      total += basket[i].price;   
    }
    wallet = userMoney;
    typeof(userMoney) === typeof(1) ? wallet = userMoney : wallet = 0;
    summary = wallet - total;
    invoice = [wallet , total , summary]; 
    setUser_invoice(invoice);
  }
  

  useEffect(() => {
    if(activeUser === true){
      totalPrice();  
    }         
  }, [basket])
  
  

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
                  <div className="wallet">
                    <h5 className='operation-symbol'>Basket Amount Details</h5>
                    <h5><span className='money-amount'>${users.money}</span>
                    <span className='operation-symbol'>-</span> 
                    <span className='money-total'>${user_invoice[1]}</span>
                    <span className='operation-symbol'>=</span>  
                    <span className='money-summary'>${user_invoice[2]}</span></h5>
                  </div>

                </div>                
                :  <h5 className='title-before-user'>To be able to shop, please select user from the user page first.</h5> }    
                        
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
                  <Basket basket = {basket} />                
            </div> 
            <div className='under_box'>
              <div className="catagori_box">
                <div className='catagories'>
                <Catagories allData = {data} setFilterCatagories = {setFilterCatagories}/>  
                </div>
              </div>  
              <div className="product_box">
                <div className="prodcuts">
                
                  <Products Product = {searchFilter} basket = {basket}  setBasket = {setBasket} />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Shop