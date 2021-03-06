import React, { useState } from 'react';
import firebase2 from '../ohioUtil/firebase';

export default function OhioForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const createEntry = () => {
    const entryRef = firebase2.database().ref('Ohio');
    const entry = {
      number,
      address,
      name,
      active: false,
    };

    entryRef.push(entry);
  };

  return (
    <div className="form">
      <input type="text" onChange={handleNameChange} value={name} placeholder="name"/>
      <input type="text" onChange={handleAddressChange} value={address} placeholder="address"/>
      <input type="text" onChange={handleNumberChange} value={number} placeholder="phone number"/>
      <button onClick={createEntry}>Add an entry to current state</button>
    </div>
  );
}