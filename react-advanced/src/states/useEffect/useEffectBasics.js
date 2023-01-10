import React, { useEffect, useState } from 'react'

const UseEffectBasics = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('Use Effect')
        if (value > 1) {
            document.title=`New Message (${value})`
        }
    })


  return (
    <>
      <h1>{}</h1>
      <button className='btn' onClick={()=> setValue(value + 1)}>Click</button>
    </>
  )
}

export default UseEffectBasics
