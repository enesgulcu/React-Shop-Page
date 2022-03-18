import React from 'react'
import {useState, useEffect} from 'react';
import Main from './Main';
import NavBarCSS from './NavBar.css'
import {BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom'
function NavBar() {


  return (
    <div>
      <div className="main-navbar container-fluid">
        <div className="row col-12">
          <ul>
            <Link to="/"> <li> Main </li> </Link> 
            <Link to="blog"> <li> Blog </li> </Link> 
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar