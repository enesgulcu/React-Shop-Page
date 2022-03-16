import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom'
function Blog() {
  return (
    <div>
      <h1>BLOG</h1>
          <ul>
            <li>
                <Link to="1">Post 1</Link>
            </li>
            <li>
                <Link to="2">Post 2</Link>
            </li>
            <li>
                <Link to="3">Post 3</Link>
            </li>
          </ul>        
    </div>
  )
}

export default Blog