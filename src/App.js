import React from 'react';
import Employees from './components/Employees';
import Navbar from './components/Navbar';
import employeedata from "./employeedata.json";
import sortItems from "./sort.js"

const salary = [];
employeedata.forEach(element => {
    salary.push(element.salary);
});


const order = sortItems.sortNumDec(salary);

function App() {
  return (
    <div>
      <Navbar />
      <Employees order={order}/>
    </div>
  );
}

export default App;
