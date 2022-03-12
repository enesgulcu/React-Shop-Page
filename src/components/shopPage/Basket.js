import React from 'react'
import BasketCss from './Basket.css'
function Basket({basket}) {
  
  return (
    <>
    <ul>
        {
          basket.map((product, index)=>{
            return <li key={index} className='basketLi' >
            <div className='basketImage'>
              <img src={product.image} alt="img" />
            </div>
              <div className='Basketinfo'>
              <div className="basket_title">
                {product.title}
              </div>
              <div className="basket_price">
                <h5>Price:</h5>${product.price}
              </div>          
            
            </div>              
            </li>
          })
        }
      </ul>
    </>
  )
}

export default Basket