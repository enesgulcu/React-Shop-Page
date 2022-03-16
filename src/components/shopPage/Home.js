import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom'

function Home() {
  return (
    <div>        
        <Outlet/>
        <ul>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="blog/" >Blog</Link>
            </li>
        </ul>
        
    </div>
  )
}

export default Home