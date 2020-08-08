import React, { useState, useEffect } from 'react';
import firebase2 from '../ohioUtil/firebase';
import OhioNumber from './OhioNumber';
import OhioForm from './OhioForm';

export default function OhioNumberList() {
  const [numberList, setNumberList] = useState();
  let num =

  useEffect(() => {
    const entryRef = firebase2.database().ref('Ohio');
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
    const entryRef = firebase2.database().ref('Ohio').child(num.id);
    entryRef.remove();
  };

  const editNum = () => {
    var num = localStorage.getItem("currentNumId");
    console.log(num.id);
    const entryRef = firebase2.database().ref('Ohio').child(num.id);

    entryRef.update({
      active: !num.active,
    });
  };

  return (
    <div>
      <select>
        <option>Ohio</option>
        <option disabled>Nevada</option>
        <option disabled>Montana</option>
        <option disabled>Idaho</option>
        <option disabled>Arizona</option>
      </select>
      <div className="listContainer">
        <div>{numberList
          ? numberList.map((num, index) => <OhioNumber num={num} key={index} />)
          : ''}
        </div>
        <div>
          <button>View</button>      
          <button onClick={editNum}>Edit</button>      
          <button onClick={deleteNum}>Delete</button>
          <button>Copy to other state</button>
        </div>
      </div>
      <OhioForm />
    </div>
  );
}