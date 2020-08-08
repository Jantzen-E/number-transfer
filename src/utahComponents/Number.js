import React from 'react';
import firebase from '../utahUtil/firebase';
import '../App.css';

export default function Number({ num }) {
  var currentNum = {
    id: "",
    name: "",
    address: "",
    number: ""
  }

  const deleteNum = () => {
    const entryRef = firebase.database().ref('Utah').child(num.id);
    entryRef.remove();
  };

  const editNum = () => {
    const entryRef = firebase.database().ref('Utah').child(num.id);

    entryRef.update({
      active: !num.active,
    });
  };

  const setCurrentNum = () => {
    console.log(num.id);
    console.log(num.number)
    console.log(num.name)
    console.log(num.address)
    currentNum.id = num.id;
    currentNum.name = num.name;
    currentNum.address = num.address;
    currentNum.number = num.number;
    localStorage.setItem("currentNumId", num.id)
    localStorage.setItem("currentNumName", num.name)
    localStorage.setItem("currentNumAddress", num.address)
    localStorage.setItem("currentNumber", num.number)
  }

  return (
    <div>
      <h3 onClick={setCurrentNum}>{num.number}</h3>
    </div>
  );
}