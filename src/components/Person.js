import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
            I am {person.name} of {person.age} years old and know {person.skill}
            </h2>
        </div>
    )
}

export default Person
