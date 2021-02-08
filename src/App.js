import React, { useState }  from 'react';
import './App.css';
import Employee from './Employee';
import Counter from './Counter';
import {Switch,Route,Link } from "react-router-dom";
import Home from './Home';
import Users from './Users';


function App() {
  const [loggedIn, setloggedIn] = useState(false)
  
  let data=[
    {firstname:"peter",surname:"smith", age:34,id:1},
    {firstname:"james",surname:"w", age:34,id:2},
    {firstname:"samuel",surname:"v", age:34,id:3},
    {firstname:"john",surname:"t", age:34,id:4},
    {firstname:"zane",surname:"l", age:34,id:5}
  ]
  return (
    <div className="App">
      <button><Link to="/"Home>Home</Link></button>
      <button><Link to="/Counter">Counter</Link></button>
      <button><Link to="/Employees">Employees</Link></button>
      <button><Link to="/Users">Users</Link></button>
      <Switch>
      <Route  exact path="/">
           <Home/>
        </Route>
        <Route path="/Counter">
          <Counter/>
        </Route>
        <Route path="/Employees">
        <header className="App-header">
       <h1>Company Directory</h1>
        <button onClick={()=>setloggedIn(!loggedIn)}>
          {loggedIn? "Log out" : "Log in"}
        </button>
        {loggedIn?(
          data.map(employee=>{
            //const {firstname,surname,age}=employee;
            return(
             //  <Employee firstname={firstname} surname={surname} age={age}/>
             <Employee key={employee.id} {...employee}/>
             ///not necessary to add keys
            );
          })
        ):(
          <div>
            <h2>Please Log in to continue</h2>
          </div>
        )}
       
      </header>
        </Route>
        <Route path="/Users">
          <Users></Users>
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
