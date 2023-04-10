import moment from "moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, putEmployee } from "../../services/EmployeeService";

export default function EmployeeEdit() {
    const { id } = useParams()

    const [employee, setEmployee] = useState({})
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [employeeError, setEmployeeError] = useState('')

    useEffect(() => {
        reloadEmployee(id)
    }, [id])

    const reloadEmployee = async (id) => {
        try {
            const employee = await getEmployeeById(id)
            setEmployee(employee)
            setName(employee.name)
            setPosition(employee.position)
        } catch (error) {
            console.error(error)
        }
    }
    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangePosition = (event) => {
        setPosition(event.target.value)
    }

    const toEdit = async (event) =>{
        event.preventDefault()
      
        const updatedEmployee = {
          ...employee,
          name: name,
          position: position
        }
      
        await putEmployee(id, updatedEmployee)
        navigation.goBack()
      }
    const navigation = useNavigate()
    return (
        <div className="card">
            <div className="card-body">
                {
                    employeeError
                        ? (
                            <div><h2>Something is wrong, notify your System Administrator</h2>
                                <p>{employeeError}</p>
                            </div>
                        ) : (
                            <div className="row p-2">
                                <div className="col-md-4 px-4 py-2">
                                    <button
                                        className="btn btn-outline-light border pl-5"
                                        onClick={() => navigation(-1)}
                                    >
                                        &nbsp;&nbsp;Voltar&nbsp;&nbsp;
                                    </button>
                                    <div className="card-body">
                                        <img
                                            src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                                            alt=""
                                            width="100"
                                            height="100"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 py-2">
                                    <div className="card bg-primary text-white">
                                        <div className="card-header d-flex justify-content-between">
                                            <h4 className="card-text">Employee - n?{employee?.id}</h4>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="name" className="form-control-label">Name</label>
                                                    <input type="text"
                                                        id="name"
                                                        className="form-control"
                                                        value={name}
                                                        onChange={onChangeName} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="position" className="form-control-label">Position</label>
                                                    <input type="text"
                                                        id="position"
                                                        className="form-control"
                                                        value={position}
                                                        onChange={onChangePosition} />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer">
                                            <form>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="created_at"
                                                        className="form-control-label"
                                                    >
                                                        Created At
                                                    </label>
                                                    <span className="form-control" name="name">
                                                        {moment(employee?.created_at).fromNow()}
                                                    </span>
                                                </div>
                                                <div className="form-group">
                                                    <label
                                                        htmlFor="updated_at"
                                                        className="form-control-label"
                                                    >
                                                        Updated At
                                                    </label>
                                                    <span className="form-control" name="name">
                                                        {moment(employee?.updated_at).fromNow()}
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-outline-light roudend-circle btn-lg" onClick={toEdit}>Editar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 py-2"></div>
                            </div>
                        )
                }
            </div>
        </div>
    )

}