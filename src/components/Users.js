import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import UsersCSS from './Users.css'

import { IoIosCheckmark } from "react-icons/io";




import {BrowserRouter as Router, Routes, Route, Link, Outlet, NavLink, useParams} from 'react-router-dom'
function Users({users, setUsers, setActiveUser, activeUser, setchosedUser, chosedUser}) {

  // when choose users, under function is trigirred
  const userControl = (user) =>{
    setActiveUser(true);
    setchosedUser(user);
   
  }

 //define money between 500-10.000$ 
  const randomMoney = () =>{    
    const money = {money: Math.floor(Math.random() * (10000 - 500)) + 500};
    return money;
  }

  // get random user's info from api
  const getData = async () => {
    try {
        await axios('https://randomuser.me/api/')
        .then((response)=>{
          //we added money, inside api data from "randomMoney" function...
          Object.assign(response.data.results[0],randomMoney())

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
                  <div className="Money">Wallet: <span>${user.money}</span> </div>
                  <div className="userName">user Name: {user.login.username}</div>     
                  <div className="userPass">Password: {user.login.password}</div>                
                </div>
                <button className='changeUser' onClick={getData}>Change User</button>
                <h5 className='warning'>Click the button below to select the profile!</h5>

                    <Link to="/">
                    <button className='select-user-button' onClick={(e)=> userControl(user)}><IoIosCheckmark className='select-user'/></button>   
                    </Link>
                
                

              </div>
            </li>
          })}

          
        </ul>
         
    </div>
  )
}

export default Users