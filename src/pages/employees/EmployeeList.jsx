
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import getEmployees, { getEmployeesSearch } from "../../services/EmployeeService";
import '../pages.css'

function EmployeeList() {

    
    const [employees, setEmployees] = useState([])
    const [employeError, setEmployeeError] = useState('')
    
    useEffect(() => {
        reloadEmployees()
    }, [])

    const reloadEmployees = async () => {
        try {
            const employees = await getEmployees()
            setEmployees(employees)
        } catch (error) {
            console.error(error)
            setEmployeeError(error)
        }
    }

    const handleSearch =  async (event) =>{
        const value = event.target.value
        try {
            if(value){
                const employeeSearch = await getEmployeesSearch(value) 
                setEmployees(employeeSearch)
            }
        } catch (error) {
            console.error(error)
            setEmployeeError(error)
        }
    }
    
    const navigation = useNavigate()
    
    const onAdd = () =>{
        navigation('/employee-form')
}
  
const onShow = (id) =>{
    navigation(`/employee-show/${id}`)
}
    
    return (
    <>
    <div className="card">
        <div className="card-body">
            <div style={{margin: '0 auto', marginTop: '1%'}}>
                <label>Search:&nbsp;&nbsp;</label>
                <input type="text"  onChange={(event)=> handleSearch(event)}/>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-outline-light" onClick={onAdd}>Add</button>
            </div>
        </div>
    </div>
      <div className="card">
            <div className="card-body">
                {
                    employeError?(
                        <div>
                            <h2>Something is wrong, notify you System Administrator</h2>
                        </div>
                    )
                    : employees.map(e =>(
                        <div key={e.id}>
                            <div className="card onHoverColor" style={{cursor: 'pointer'}} onDoubleClick={()=> onShow(e.id)}>
                               <div className="card-header bg-secondary"></div>
                                <div className="card-body">
                                <div className="row">
                                    <div className="col-auto">
                                        <img
                                        src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                                        alt=""
                                        width="40"
                                        height="40"
                                        />
                                    </div>
                                    <div className="col">
                                        {e.name} <br/>
                                        {e.position}
                                    </div>
                                </div>
                                </div>
                              
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    
    </>
        )
    }
        

export default EmployeeList