import React from 'react';
import Employees from './components/Employees';
import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <Navbar />
      <Employees order={order}/>
    </div>
  );
}

export default App;
