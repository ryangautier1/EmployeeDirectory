import React, { Component } from 'react';
import Employees from './components/Employees';
import Navbar from './components/Navbar';
import employeedata from "./employeedata.json";
// import sortItems from "./sort.js"

// const salary = [];
// employeedata.forEach(element => { 
//   salary.push(element.salary);
// });


// const order = sortItems.sortNumDec(salary);

class App extends Component {
  state = {
    employeedata: employeedata
  };

  // takes array of words to sort by, updates state with sorted employeedata
  sortAlphDec = (data) => {
    let dataUnsorted = data.map(item => item);
    let dataSorted = data;
    dataSorted.sort();
    let order=[];
    data.forEach(item => {
      order.push(dataUnsorted.indexOf(item));
    });
    console.log("order: " + order);
    const newdata = order.map(item => {
      return this.state.employeedata[item];
    })
    console.log(newdata);
    return this.setState({ employeedata: newdata });
  }
  
  // sortAlphInc = (data) => {
  //   let order = this.sortAlphDec(data);
  //   return order.reverse();
  // }
  
  // sortNumDec = (data) => {
  //   let numsUnsorted= data;
  //   let numsSorted= data;
  //   numsSorted.sort();
  //   let order=[];
  //   numsSorted.forEach(num => {
  //     order.push(numsUnsorted.indexOf(num));
  //   })
  //   return order;
  // }
  
  // sortNumInc = (data) => {
  //   let order = this.sortNumDec(data);
  //   return order.reverse();
  // }
  

  render() {
    return (
      <div>
        <Navbar />
        <Employees data={this.state.employeedata} sortAlphDec={this.sortAlphDec} />
      </div>
    );
  }
}

export default App;
