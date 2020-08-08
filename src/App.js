import React from 'react';
import './App.css';
import NumberList from './utahComponents/NumberList';
import OhioNumberList from './ohioComponents.js/OhioNumberList';

export default function App() {
  return (
    <div className="App">
      <h1>Number Transfers</h1>
      <div className="lists">
        <NumberList />
        <OhioNumberList />
      </div>
    </div>
  );
}