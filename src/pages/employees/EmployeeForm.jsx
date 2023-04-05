import React, { useState } from "react";
import { postEmployee } from "../../services/EmployeeService";

import { useNavigate } from "react-router-dom";

 
export default function EmployeeForm() {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')


    const OnChangeName = (event) => {
        setName(event.target.value)
    }
    const OnChangePosition = (event) => {
        setPosition(event.target.value)
    }
    const navigation = useNavigate()


    const toAdd = async (event) => {
        event.preventDefault()

        await postEmployee({ name, position })

        navigation.goBack()
    }

  
    return (
        <>
            <div className="row p-2">
                <div className="col-md-4 px-4 py-2 ">
                    <button className="btn btn-outline-light border pl-5" onClick={()=> navigation(-1)}>&nbsp;&nbsp;Voltar&nbsp;&nbsp;</button>
                </div>
                <div className="col-md-4 p-2">
                    <div className="card bg-primary text-white">
                        <div className="card-header text-center">
                            <h4 className="card-text">Add User</h4>
                        </div>
                        <div className="card-body">
                            <form className="">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-control-label">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        value={name}
                                        onChange={OnChangeName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="position" className="form-control-label">Position</label>
                                    <input
                                        type="text"
                                        id="position"
                                        className="form-control"
                                        value={position}
                                        onChange={OnChangePosition}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-light rounded-circle btn-lg" onClick={toAdd}>Adicionar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-2"></div>
            </div>
        </>
    )
}