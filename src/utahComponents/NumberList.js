import React, { useState, useEffect } from 'react';
import firebase from '../utahUtil/firebase';
import Number from './Number';
import Form from './Form';

export default function NumberList() {
  const [numberList, setNumberList] = useState();
  let num = 

  useEffect(() => {
    const entryRef = firebase.database().ref('Utah');
    entryRef.on('value', (snapshot) => {
      const nums = snapshot.val();
      const numberList = [];
      for (let id in nums) {
        numberList.push({ id, ...nums[id] });
      }
      setNumberList(numberList);
    });
  }, []);

  const deleteNum = () => {
    const entryRef = firebase.database().ref('Utah').child(num.id);
    entryRef.remove();
  };

  const editNum = () => {
    var num = localStorage.getItem("currentNumId");
    console.log(num.id);
    const entryRef = firebase.database().ref('Utah').child(num.id);

    entryRef.update({
      active: !num.active,
    });
  };

  return (
    <div>
      <select>
        <option>Utah</option>
        <option disabled>Nevada</option>
        <option disabled>Montana</option>
        <option disabled>Idaho</option>
        <option disabled>Arizona</option>
      </select>
      <div className="listContainer" >
        <div>{numberList
          ? numberList.map((num, index) => <Number num={num} key={index} />)
          : ''} 
        </div>
        <div>
          <button>View</button>      
          <button onClick={editNum}>Edit</button>      
          <button onClick={deleteNum}>Delete</button>
          <button>Copy to other state</button>
        </div>
      </div>
      <Form />
    </div>
  );
}