import React from 'react'

// import { data } from '../../../data'
import { data } from '../../data'

function UseStateArray() {
    const [people, setPeople] = React.useState(data);

    const removePeople = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople)
        }
    return (
        <React.Fragment>
            {
                people.map((person) => {
                    const {id, name} = person
                    return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button onClick={() => removePeople(id)}>Remove</button>
                    </div>
                    )
                })
            }
            <button className='btn' type='button' onClick={() => setPeople([] )}>Clear</button>
        </React.Fragment>
    )
}

export default UseStateArray
