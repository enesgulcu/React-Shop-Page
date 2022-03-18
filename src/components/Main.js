import React from 'react'
import Shop from './shopPage/Shop'
import NavBar from './NavBar'
import Blog from './shopPage/Blog'
import Footer from './Footer'

import {BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom'
function Main() {
  return (
    <div>
          
      <div>
      <Router>
        <NavBar/>
          <Routes>
              <Route exact path={"/"} element={<Shop/>}/>  
              <Route path={"/blog"} element={<Blog/>}/>                                    
          </Routes>
          <Footer/>
        </Router>
      </div>



    </div>   
  )
}

export default Main