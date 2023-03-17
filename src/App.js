import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EmployeeList from "./pages/EmployeeList";
import Home from "./pages/Home";

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element=

          {<Home />}
        />
        <Route path="/employee-list" element=

          {<EmployeeList/>}
        />

      </Routes>

    </Router>
  )
}

export default App;