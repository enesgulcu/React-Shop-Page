import React from 'react'
import Shop from './shopPage/Shop'
import NavBar from './NavBar'
import Users from './Users'
import Footer from './Footer'
import BasketIn from './BasketIn'
import { useState } from 'react';
import { MainContext, useContext } from '../context.js';  // import context api datas here

import {BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom'
function Main() {
  const [activeUser, setActiveUser] = useState(false);
  const [users, setUsers] = useState([]); 
  const [chosedUser, setchosedUser] = useState([]); 
  const [user_invoice, setUser_invoice] = useState([]);
  const [basket, setBasket] = useState([])
  const contextApiData = useContext(MainContext); // take context api datas here
  return (
    <div>
          
      <div>
      <Router>
        <NavBar/>
          <Routes>
          
              <Route exact path={"/"} element={<Shop
              user_invoice={user_invoice} setUser_invoice={setUser_invoice}
              activeUser={activeUser} setActiveUser={setActiveUser} users={chosedUser}
              basket = {basket}  setBasket = {setBasket} 

              />}/>  
              <Route path={"/users"} element={<Users users={users} setUsers={setUsers} setActiveUser={setActiveUser} activeUser={activeUser} chosedUser={chosedUser} setchosedUser={setchosedUser} />}/> 
              <Route path={"/basketIn"} element={<BasketIn/>}/>                                   
          </Routes>
          <Footer/>
        </Router>
      </div>



    </div>   
  )
}

export default Main