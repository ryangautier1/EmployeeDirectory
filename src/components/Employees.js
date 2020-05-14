import React from "react";
import EmployeeRow from "./EmployeeRow";

function Employees(props) {
  return (
    <div className="mt-5 container">
      <div className="row py-2 border-top">
        <h4 className="col-3 text-center" id="name">Name</h4>
        <h4 className="col-3 text-center" id="position">Role</h4>
        <h4 className="col-3 text-center" id="salary">Salary</h4>
        <h4 className="col-3 text-center" id="manager">Manager</h4>
      </div>
      {props.data.map(item => {
        return <EmployeeRow {...item}/>
      })}
      

    </div>
  )
}

export default Employees;