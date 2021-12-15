import React, { useState, useEffect } from 'react';
import './style.css';
import Select from 'react-select';
const App = () => {
  const [First, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');

  const [optSelected, setOptSelected] = useState([
    { name: 'One', value: 1, disabled: false },
    { name: 'Two', value: 2, disabled: false },
    { name: 'Three', value: 3, disabled: false },
    { name: 'Four', value: 4, disabled: false },
    { name: 'Five', value: 5, disabled: false },
    { name: 'Six', value: 6, disabled: false },
  ]);
  const [opt, setOpt] = useState([
    { name: 'One', value: 1 },
    { name: 'Two', value: 2 },
    { name: 'Three', value: 3 },
    { name: 'Four', value: 4 },
    { name: 'Five', value: 5 },
    { name: 'Six', value: 6 },
  ]);

  useEffect(() => {
    console.log(First, second, third);
    
  }, [opt,First,second,third]);

  const handleOneChange = (obj) => {
    setFirst(obj.name);
    setOpt((opt) => opt.filter((o) => o.name !== obj.name));
  };
  const handleTwoChange = (obj) => {
    setSecond(obj.name);
    setOpt((opt) => opt.filter((o) => o.name !== obj.name));
  };
  const handleThreeChange = (obj) => {
    setThird(obj.name);
    setOpt((opt) => opt.filter((o) => o.name !== obj.name));
  };

  return (
    <div style={{ width: 400, marginBottom: 20 }}>
      <b>First DropDown</b>
      <Select
        id="a"
        placeholder="Select First DropDown"
        options={opt}
        onChange={handleOneChange}
        getOptionLabel={(x) => x.name}
        getOptionValue={(x) => x.value}
      />
      <br />
      <b>Second Dropdown</b>
      <Select
        placeholder="Select Second DropDown"
        options={opt}
        onChange={handleTwoChange}
        getOptionLabel={(x) => x.name}
        getOptionValue={(x) => x.value}
      />
      <br />
      <b>Third Dropdown</b>
      <Select
        placeholder="Select Third DropDown"
        options={opt}
        onChange={handleThreeChange}
        getOptionLabel={(x) => x.name}
        getOptionValue={(x) => x.value}
      />
    </div>
  );
};
export default App;
