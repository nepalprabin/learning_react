import React from 'react'

import UseStates from './states/useState/useStateBasics';
import UseStateArray from './states/useState/useStateArray';
import UseStateObject from './states/useState/useStateObject';
import UseStateCounter from './states/useState/useStateCounter';

function App() {
  return (
    <div className='container'>
      <h1>Advanced React</h1>
      <UseStates />
      <UseStateArray />
      <UseStateObject />
      <UseStateCounter />
    </div>
  )
}

export default App
