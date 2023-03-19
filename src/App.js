import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "./config/NavBar";
import EmployeeList from "./pages/employees/EmployeeList"
import EmployeeForm from "./pages/employees/EmployeeForm"
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar>
      </NavBar>

      <Routes>

        <Route path="/" element=
          {<Home />}
        />
        <Route path="/employee-list" element=
          {<EmployeeList />}
        />
        <Route path="/employee-form" element=
          {<EmployeeForm />}
        />

      </Routes>

    </Router>
  )
}

export default App;