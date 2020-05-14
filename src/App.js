import React, { Component } from 'react';
import Employees from './components/Employees';
import Header from './components/Header';
import Filter from "./components/Filter";
import employeedata from "./employeedata.json";


class App extends Component {
  state = {
    employeedata: employeedata
  };

  // takes object of info to sort by along with ids, updates state with sorted employeedata
  sortInc = (data) => {
    let dataUnsorted = data.map(item => item.key);
    let dataSorted = data.map(item => item.key);
    dataSorted.sort();
    let order=[];
    dataSorted.forEach(item => {
      order.push(dataUnsorted.indexOf(item));
    });
    const newdata = order.map(item => {
      return this.state.employeedata[item];
    })
    return this.setState({ employeedata: newdata });
  }

  sortDec = (data) => {
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

  filterRole = (data, key) => {
    const result = data.filter(item => item.role === key);
    return this.setState({employeedata: result, filtered: true});
  }

  clearFilter = () => {
    return this.setState({employeedata: employeedata, filtered: false});
  }

  render() {
    return (
      <div>
        <Header />
        <Filter data={employeedata} filtered={this.state.filtered} sortDec={this.sortDec} sortInc={this.sortInc} filterRole={this.filterRole} clearFilter={this.clearFilter}/>
        <Employees data={this.state.employeedata}/>
      </div>
    );
  }
}

export default App;
