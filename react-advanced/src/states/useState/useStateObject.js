import React, { useState } from 'react'

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: "Prabin", 
        age: 26, 
        message: "random message"
    });

    const changeMessage = () => {
        setPerson({...person, message: 'another message'})
    }

  return (
    <>
        <h2>Use State Object</h2>
        <h4>{person.name}</h4>
        <h4>{person.age}</h4>
        <h4>{person.message}</h4>
        <button className='btn' type='button' onClick={changeMessage}>Change</button>
    </>
  )
}

export default UseStateObject;