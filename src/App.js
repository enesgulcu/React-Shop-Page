import React from 'react';
import { useState } from 'react';
import Main from './components/Main';
import {MainContext} from './context.js'
function App() {


 const data = {
  // context api states here
 }

  return (      
    < MainContext.Provider value = {data} >
      <Main/>
    </ MainContext.Provider>  

  )
}
export default App
