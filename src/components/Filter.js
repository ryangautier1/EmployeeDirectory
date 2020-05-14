import React from "react";

function Filter(props) {
  return (
    <div className="mt-3">
      <div className="dropdown mt-3 ml-3 d-inline">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item" onClick={() => props.sortInc(props.data.map(item => { return { key: item.name, id: item.id } }))}>Name <i className="fas fa-arrow-up"></i></div>
          <div className="dropdown-item" onClick={() => props.sortDec(props.data.map(item => { return { key: item.name, id: item.id } }))}>Name <i className="fas fa-arrow-down"></i></div>
          <div className="dropdown-item" onClick={() => props.sortInc(props.data.map(item => { return { key: item.role, id: item.id } }))}>Role <i className="fas fa-arrow-up"></i></div>
          <div className="dropdown-item" onClick={() => props.sortDec(props.data.map(item => { return { key: item.role, id: item.id } }))}>Role <i className="fas fa-arrow-down"></i></div>
          <div className="dropdown-item" onClick={() => props.sortInc(props.data.map(item => { return { key: item.salary, id: item.id } }))}>Salary <i className="fas fa-arrow-up"></i></div>
          <div className="dropdown-item" onClick={() => props.sortDec(props.data.map(item => { return { key: item.salary, id: item.id } }))}>Salary <i className="fas fa-arrow-down"></i></div>
          <div className="dropdown-item" onClick={() => props.sortInc(props.data.map(item => { return { key: item.manager, id: item.id } }))}>Manager <i className="fas fa-arrow-up"></i></div>
          <div className="dropdown-item" onClick={() => props.sortDec(props.data.map(item => { return { key: item.manager, id: item.id } }))}>Manager <i className="fas fa-arrow-down"></i></div>
        </div>
      </div>
      <div className="ml-3 d-inline">
      <h4 className="d-inline">Filter by Role:</h4>
        <div className="dropdown mt-3 ml-3 d-inline">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <div className="dropdown-item" onClick={() => props.filterRole(props.data, "CEO")}>CEO</div>
            <div className="dropdown-item" onClick={() => props.filterRole(props.data, "Developer")}>Developer</div>
            <div className="dropdown-item" onClick={() => props.filterRole(props.data, "President")}>President</div>
            <div className="dropdown-item" onClick={() => props.filterRole(props.data, "Treasurer")}>Treasurer</div>
            <div className="dropdown-item" onClick={() => props.filterRole(props.data, "Curling Coach")}>Curling Coach</div>
          </div>
        </div>
        <button className={props.filtered ? "btn btn-danger d-inline" : "btn btn-danger d-none"} onClick={() => props.clearFilter()}>
          Clear Filter
      </button>
      
      </div>
    </div>
  );
}


export default Filter;