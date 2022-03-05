import React from 'react'
import {useState, useEffect} from 'react';
import Data from './Data.json'
import ProductsCSS from './Products.css'

function Products() {
  const [data, setData] = useState(Data);

  return (    
    <div className='products'>    
    {data.map((product)=>{      
        return <div key={product.id} className="container">
            <div className="image">
                <img src={product.image} alt="image"/>
            </div>
            <div className="details">
                <h5>{product.title}</h5>
                
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