import React from 'react'
import Shop from './shopPage/Shop'
import NavBar from './NavBar'
import Users from './Users'
import Footer from './Footer'
import { useState, useEffect } from 'react';

import {BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom'
function Main() {
  const [activeUser, setActiveUser] = useState(false);
  const [users, setUsers] = useState([]); 
  const [chosedUser, setchosedUser] = useState([]); 
  
  return (
    <div>
          
      <div>
      <Router>
        <NavBar/>
          <Routes>
              <Route exact path={"/"} element={<Shop activeUser={activeUser} setActiveUser={setActiveUser}  users={chosedUser} />}/>  
              <Route path={"/users"} 
              element={<Users users={users} setUsers={setUsers} setActiveUser={setActiveUser} activeUser={activeUser} chosedUser={chosedUser} setchosedUser={setchosedUser} />}/>                                    
          </Routes>
          <Footer/>
        </Router>
      </div>



    </div>   
  )
}

export default Main