import React, { useEffect, useState } from "react";
import getEmployees, { getEmployeesSearch } from "../services/EmployeeService";


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
    return (
    <>
    <div className="card">
        <div className="card-body">
            <div style={{margin: '0 auto', marginTop: '1%'}}>
                <label>Search:&nbsp;&nbsp;</label>
                <input type="text" onChange={(event)=> handleSearch(event)}/>
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
                            <div className="card">
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