import React, { Component } from 'react';
import Employees from './components/Employees';
import Header from './components/Header';
import employeedata from "./employeedata.json";


class App extends Component {
  state = {
    employeedata: employeedata
  };

  // takes array of words to sort by, updates state with sorted employeedata
  sortAlphInc = (data) => {
    let dataUnsorted = data.map(item => item);
    let dataSorted = data;
    dataSorted.sort();
    let order=[];
    data.forEach(item => {
      order.push(dataUnsorted.indexOf(item));
    });
    const newdata = order.map(item => {
      return this.state.employeedata[item];
    })
    
    return this.setState({ employeedata: newdata });
  }

  sortAlphDec = (data) => {
    let dataUnsorted = data.map(item => item);
    let dataSorted = data;
    dataSorted.sort();
    let order=[];
    data.forEach(item => {
      order.push(dataUnsorted.indexOf(item));
    });
    const newdata = order.map(item => {
      return this.state.employeedata[item];
    })
    
    return this.setState({ employeedata: newdata.reverse() });
  }
  
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
        <Header data={this.state.employeedata} sortAlphDec={this.sortAlphDec}/>
        <Employees data={this.state.employeedata} sortAlphDec={this.sortAlphDec} />
      </div>
    );
  }
}

export default App;
