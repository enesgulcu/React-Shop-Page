import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom'
function Users() {

  const [users, setUsers] = useState([]);

  // get 5.000 user's info from api
  const getData = async () => {
    try {
        await axios('https://randomuser.me/api/?nat=tr')
        .then((response)=>{
          console.log(response.data.results);
          setUsers(...users, response.data.results);  
        })
    }    
    catch (err) {
      console.log(err);
    }    
  }

  useEffect(() => {    
    getData(); //get api's data and set "users" state    
  }, [])
  



  return (
    <div>
        <ul>
          {users.map((user, index)=>{
            return <li key={index}>
              <div className="profile">
                <div className="image">
                  <img src={user.picture.large} alt="" />
                </div>
                <div className="user-details">
                  <h5>{user.name.first} {user.name.last}</h5>
                  <div className="gender">{user.gender === 'female' ? 'Kadın' : 'Erkek'}</div>
                  <div className="city">{user.location.city}</div>
                </div>
              </div>
            </li>
          })}
        </ul>
         
    </div>
  )
}

export default Users