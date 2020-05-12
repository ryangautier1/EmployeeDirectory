import React from "react";
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

  
// <EmployeeRow {...employeedata[props.order[0]]} />
//       <EmployeeRow {...employeedata[props.order[1]]} />
//       <EmployeeRow {...employeedata[props.order[2]]} />

function Employees(props) {
  return (
    <div className="mt-5 container">
      <div className="row py-2 border-top">
        <h4 className="col-3 text-center" id="name" onClick={() => {props.sortAlphDec(props.data.map(item => item.name))}}>Name</h4>
        <h4 className="col-3 text-center" id="position" onClick={() => {props.sortAlphDec(props.data.map(item => item.role))}}>Position</h4>
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