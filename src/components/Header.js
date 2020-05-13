import React from "react";

const dropdownStyle = {
  margintop: 50
}

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Employees</span>
      </nav>

      <div className="dropdown mt-3" style={dropdownStyle}>
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" onClick={() => props.sortAlphInc(props.data.map(item => item.name))}>Name <i className="fas fa-arrow-up"></i></a>
          <a className="dropdown-item" onClick={() => props.sortAlphDec(props.data.map(item => item.name))}>Name <i className="fas fa-arrow-down"></i></a>
          <a className="dropdown-item" onClick={() => props.sortAlphInc(props.data.map(item => item.role))}>Role <i className="fas fa-arrow-up"></i></a>
          <a className="dropdown-item" onClick={() => props.sortAlphDec(props.data.map(item => item.role))}>Role <i className="fas fa-arrow-down"></i></a>
          <a className="dropdown-item" onClick={() => props.sortNumInc(props.data.map(item => item.salary))}>Salary <i className="fas fa-arrow-up"></i></a>
          <a className="dropdown-item" onClick={() => props.sortNumDec(props.data.map(item => item.salary))}>Salary <i className="fas fa-arrow-down"></i></a>
          <a className="dropdown-item" onClick={() => props.sortAlphInc(props.data.map(item => item.manager))}>Manager <i className="fas fa-arrow-up"></i></a>
          <a className="dropdown-item" onClick={() => props.sortAlphDec(props.data.map(item => item.manager))}>Manager <i className="fas fa-arrow-down"></i></a>
        </div>
      </div>


    </header>
  );
}


export default Header;