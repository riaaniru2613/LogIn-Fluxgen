import React,{useState} from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  async function LogIn(){
    
    axios.get('https://aquzgenapi.azurewebsites.net/aquagen/v1/auth/login', {
    headers: {
      'Content-type': `application-json`,
      'username' : email,
      'password' : password
    }
    })
.then(() => {
  alert("Logged in successfully")
})
.catch((e) => {
  alert("Wrong UserName/Password")
  
})
  }
  
  

  return (
    <div>
      
      < div className  = "container ">
          <h1>Login Page</h1>
          
          <input type='text' 
          placeholder='Enter Email' 
          onChange={(e)=>setEmail(e.target.value)} 
          className = "form-control"/>
          <br/>
          <input type='password' 
          placeholder='Enter Password' 
          onChange={(e)=>setPassword(e.target.value)}
          className = "form-control"/>
          <br/>
          <button className = "btn btn-primary" onClick={LogIn}>Log In</button>
          
          
        
      </div>
      
    </div>
  );
}

export default App;
