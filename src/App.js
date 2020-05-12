import React, { Component } from 'react';
import Employees from './components/Employees';
import Navbar from './components/Navbar';
import employeedata from "./employeedata.json";
import sortItems from "./sort.js"

// const salary = [];
// employeedata.forEach(element => {
//   salary.push(element.salary);
// });


// const order = sortItems.sortNumDec(salary);

class App extends Component {
  state = {
    employeedata
  };



  render() {
    return (
      <div>
        <Navbar />
        <Employees data={this.state.employeedata} />
      </div>
    );
  }
}

export default App;
