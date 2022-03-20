import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom'
import FooterCSS from './Footer.css'


function Footer() {
  return (
    <div>
      <div className="footer-bar container-fluid">
        <div className="row col-12 footerMainContainer">
        <div className="col-4 footer-left-side footer-part">
            <ul>
                <h3>Pages</h3>
                <Link to="/"> <li> Main </li> </Link> 
                <Link to="users"> <li> Users </li> </Link> 
            </ul>
        </div>
        <div className="col-4 footer-middle-side footer-part">
            <ul>
                <h3>Pages</h3>
                <Link to="/"> <li> Main </li> </Link> 
                <Link to="users"> <li> Users </li> </Link> 
            </ul>
        </div>
        <div className="col-4 footer-right-side footer-part">
            <ul>
                <h3>Pages</h3>
                <Link to="/"> <li> Main </li> </Link> 
                <Link to="users"> <li> Users </li> </Link> 
            </ul>
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer