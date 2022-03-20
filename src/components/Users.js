import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import UsersCSS from './Users.css'
import {BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom'
function Users() {

  const [users, setUsers] = useState([]);

  // get 5.000 user's info from api
  const getData = async () => {
    try {
        await axios('https://randomuser.me/api/?nat=tr')
        .then((response)=>{
          console.log(response.data.results);
          setUsers(response.data.results);  
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
    <div className='userMain'>
        <ul>
          {users.map((user, index)=>{
            return <li key={index} className='UserProfile'>
              <div className="profile">

                <div className="user-image">
                  <img src={user.picture.large} alt="" />
                </div>

                <div className="user-details">                  
                  <h5>
                    <span className="gender">{user.gender === 'female' ? 'Mrs' : 'Mr'} </span>
                    {user.name.first} {user.name.last}
                  </h5>   
                  <div className="city">City: {user.location.city}</div>
                  <div className="Phone">Phone: {user.phone}</div>
                  <div className="userName">user Name: {user.login.username}</div>     
                  <div className="userPass">Password: {user.login.password}</div>                
                </div>
                <button className='changeUser' onClick={getData}>Change User</button>
              </div>
            </li>
          })}

          
        </ul>
         
    </div>
  )
}

export default Users