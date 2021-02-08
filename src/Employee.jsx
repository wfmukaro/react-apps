import React from 'react'

const Employee = (props) => {
    const {firstname, surname, age}=props
    console.log(firstname)
    return (
        <div>
             <h6>
                Employee Details:{firstname} {surname} aged : {age}
                
            </h6>
        </div>
    )
}

export default Employee

