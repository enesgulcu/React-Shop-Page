import React from 'react'
import BasketCss from './Basket.css'
function Basket({basket}) {
  
  return (
    <>
    <ul>
        {
          basket.map((product, index)=>{
            return <li key={index} className='basketLi' >
              {product.title}
              ${product.price}
            </li>
          })
        }
      </ul>
    </>
  )
}

export default Basket