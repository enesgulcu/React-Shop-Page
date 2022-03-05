import React from 'react'
import {useState, useEffect} from 'react';
import SearchList from './SearchList';
import Products from './Products';
import Catagories from './Catagories';

function Shop() {
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
              <Catagories/>  
              </div>
            </div>  
            <div className="col-10">
              <div className="prodcuts bg-success p-4">
              <Products/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shop