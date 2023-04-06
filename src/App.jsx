import React from "react";

import NavBar from "./config/NavBar";

import { Outlet} from 'react-router-dom'


function App() {
  return (
  <div className="App">
    <NavBar/>    
   
    <Outlet/>
    <p>Footer</p>
  </div>
    )
  }

export default App;