import React, { useState } from 'react'

function UseStates() {

  const [text, setText] = useState('This is a text')

  const clickHandler = () => {
    if (text === 'This is a text') {
      setText('This is a another text')
    }
    else {
      setText('This is a text')
    }
  }

  return (
    <React.Fragment>
      <h2>Use State Basics</h2>
      <h3>{text}</h3>
      <button type='button' className='btn' onClick={clickHandler}>Click Here</button>
    </React.Fragment>
  )
}

export default UseStates
