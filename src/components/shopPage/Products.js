import React from 'react'
import {useState, useEffect} from 'react';
import ProductsCSS from './Products.css'

function Products({Product}) {


  const titleShort = (title) => {
    return title.substring(0, 13);
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
                <h4>{product.price}</h4>
                <button>Add Basket</button>
            </div>
        </div>
    })}
    </div>
  )
}

export default Products