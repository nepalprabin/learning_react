import React, { useState } from 'react'

function UseStateCounter() {
    const [count, setCount] = useState(10)

    const reset = () => {
        setCount(0)
    }
  return (
    <>
      <h1>Use State Counter</h1>
      <h2>{count}</h2>
      <button className='btn' type='button' onClick={() => setCount(count-1)}>Decrease</button>
      <button className='btn' type='button' onClick={() => setCount(count+1)}>Increase</button>
      <button className='btn' type='button' onClick={reset}>Reset</button>
    </>
  )
}

export default UseStateCounter
