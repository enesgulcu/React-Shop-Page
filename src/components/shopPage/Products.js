import React from 'react'
import {useState, useEffect} from 'react';
import ProductsCSS from './Products.css'
import Basket from './Basket.js'
import BasketIn from '../BasketIn';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom'

function Products({Product, basket, setBasket}) {

  const titleShort = (title) => {
    return title.substring(0, 13);
  }

  const addBasket = (product) =>{
    setBasket([...basket, product])
    
  }
  return (   
    <div className='products'>    
    {Product.map((product)=>{      
        return <div key={product.id} className="container">
            <div className="image">
                <img src={product.image} alt="image"/>
            </div>
            <div className="details">
                <h5>{titleShort(product.title)}...</h5>
                
                <span>{product.catagories}</span>
                <h4>${product.price}</h4>
                <button onClick={(e)=>addBasket(product)} >Add Basket</button>
            </div>
        </div>
    })}

    </div>
  )
}

export default Products