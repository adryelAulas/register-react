
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEmployeeById, getEmployeeById } from "../../services/EmployeeService";
import moment from 'moment'
import { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa'

function EmployeeShow() {
  const { id } = useParams();

  const employeeId = parseInt(id, 10);
  const [employee, setEmployee] = useState({});

  const [employeeError, setEmployeeError] = useState();

  useEffect(() => {
    // Verify that employeeId is a valid number
    if (isNaN(employeeId)) {
      setEmployeeError("Invalid employee ID");
      return;
    }

    reloadEmployee(employeeId);
  }, [employeeId]);
  const reloadEmployee = async (id) => {
    try {
      const employee = await getEmployeeById(id);
      setEmployee(employee);
    } catch (error) {
      console.error(error);
      setEmployeeError(error);
    }
  };

  const onEdit = async (id) => {
    navigation(`/employee-edit/${id}`)
  }
  const onDelete = async (id) => {
    const { status } = await deleteEmployeeById(id)
    if (status === 200) {
      navigation.goBack()
    }
  }
  const navigation = useNavigate();

  return (
    <div className="card">
      <div className="card-body">
        {employeeError ? (
          <div>
            <h2>Something is wrong, notify your System Administrator</h2>
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
                  <button className="btn btn-outline-light border-0" onClick={() => { if (window.confirm('Are you sure to edit?')) onEdit(employee?.id) }}><FaPencilAlt /></button>
                  <h4 className="card-text">Employee</h4>
                  <button className="btn btn-outline-light border-0" onClick={() => { if (window.confirm('Are you sure?')) onDelete(employee?.id) }}><FaRegTrashAlt /></button>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="form-control-label"
                      >
                        Name
                      </label>
                      <span className="form-control" name="name">
                        {employee?.name}
                      </span>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="name"
                        className="form-control-label"
                      >
                        Position
                      </label>
                      <span className="form-control" name="name">
                        {employee?.position}
                      </span>
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
              </div>
            </div>
            <div className="col-md-4 py-2"></div>
          </div>
        )}
      </div>
    </div>
  );
}





export default EmployeeShow;