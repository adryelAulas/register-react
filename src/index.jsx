import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootswatch/dist/slate/bootstrap.min.css'

import { 
  createBrowserRouter,

  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home';
import EmployeeForm from './pages/employees/EmployeeForm';
import EmployeeList from './pages/employees/EmployeeList'
import ErrorPage from './pages/ErrorPage';
import EmployeeShow from './pages/employees/EmployeeShow';
import EmployeeEdit from './pages/employees/employeeEdit';

// const router = ([{
//   path: "/",
//   element: <Home/>
// },
// {
//   path: "/employee-form",
//   element: <EmployeeForm/>
// }


// ])


const router = createBrowserRouter ([
  {path: "/",
  element: <App />,
  errorElement: <ErrorPage/>,
  children:[
    {
      path: "/",
      element:<Home/>
    }, 
    {
      path: "/employee-form",
      element:<EmployeeForm/>
    },
    {
      path: "/employee-list",
      element:<EmployeeList/>
    },
    {
      path: "/employee-show/:id",
      element:<EmployeeShow/>
    },
    {
      path: "/employee-edit/:id",
      element:<EmployeeEdit/>
    },

    {
    path: "/employee-list/:id",
    element: <EmployeeShow />,
    },
  ]
},

  ])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);


