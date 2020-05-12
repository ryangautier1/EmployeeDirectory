import React from "react";
import employeedata from "../employeedata.json";
import EmployeeRow from "./EmployeeRow";



{/* <div className="row py-2 border-top">
        <div className="col-4 text-center">Cras justo odio</div>
        <div className="col-4 text-center">Dapibus ac facilisis in</div>
        <div className="col-4 text-center">Morbi leo risus</div>
      </div>
      <div className="row py-2 border-top">
        <div className="col-4 text-center">Cras justo odio</div>
        <div className="col-4 text-center">Dapibus ac facilisis in</div>
        <div className="col-4 text-center">Morbi leo risus</div>
      </div>
      <div className="row py-2 border-top">
        <div className="col-4 text-center">Cras justo odio</div>
        <div className="col-4 text-center">Dapibus ac facilisis in</div>
        <div className="col-4 text-center">Morbi leo risus</div>
      </div> */}



function Employees() {
  return (
    <div className="mt-5 container">
      <div className="row py-2 border-top">
        <h4 className="col-3 text-center">Name</h4>
        <h4 className="col-3 text-center">Position</h4>
        <h4 className="col-3 text-center">Salary</h4>
        <h4 className="col-3 text-center">Manager</h4>
      </div>
      <EmployeeRow {...employeedata[0]} />
      <EmployeeRow {...employeedata[1]} />
      <EmployeeRow {...employeedata[2]} />

    </div>
  )
}

export default Employees;