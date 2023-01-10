import React from 'react'

import UseStates from './states/useState/useStateBasics';
import UseStateArray from './states/useState/useStateArray';
import UseStateObject from './states/useState/useStateObject';
import UseStateCounter from './states/useState/useStateCounter';
import UseEffectBasics from './states/useEffect/useEffectBasics';

function App() {
  return (
    <div className='container'>
      <h1>Advanced React</h1>
      <UseStates />
      <UseStateArray />
      <UseStateObject />
      <UseStateCounter />
      <UseEffectBasics />
    </div>
  )
}

export default App
