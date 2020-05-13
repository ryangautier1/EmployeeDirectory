import React from "react";

function EmployeeRow(props) {
  return (
    <div className="row py-2 border-top">
      <div className="col-3 text-center" >{props.name}</div>
      <div className="col-3 text-center" >{props.role}</div>
      <div className="col-3 text-center" >{props.salary}</div>
      <div className="col-3 text-center" >{props.manager}</div>
    </div>
  );
}

export default EmployeeRow;