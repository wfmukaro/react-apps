import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Users = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            const responseUsers=res.data
            setUsers(responseUsers)
        })
      
    }, [])
    return (
        <div>
            <h6>Users List</h6>
            {users && users.map(arrayElement=>{
               const {...user}=arrayElement; 
               return(
                    <div className="user">
                   <h5>Name :{user.name}</h5>
                   <h6>Email :{user.email}</h6>
                   <h6>City: {user.address.city}</h6>
                   <h6>Email :{user.email}</h6>
                   <h6>Company Name: {user.company.name}</h6>
                   <h6>Business: {user.company.bs}</h6>
                   </div>
                   
               )
            })}
        </div>
    )
}

export default Users
