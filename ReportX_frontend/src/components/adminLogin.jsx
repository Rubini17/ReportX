import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../css/login.css' 
import axios from 'axios';
const AdminLogin=()=>{
    
    const navigate= useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleAdminLogin= async(event)=>{
      event.preventDefault();
      console.log("Button Clicked");
      const req= await axios.post("https://reportx-backend.onrender.com/adminlogin" ,
        {
          email:email,
          password:password,
        }
      );
  
      const message= req.data.message;
      const isAdminLogin= req.data.isAdminLogin;
      const location= req.data.location;
      if(isAdminLogin)
      {
        alert(message);
        navigate('/adminstatus',{replace:true,state:{location}});
      }
      else{
        alert(message)
      }
  
    };

    return(
        <>
      <div className='divclass'>
            <center><h1 className='login'>Admin Login </h1></center>
        <form className='formclass'>
           
            <label>Email:</label>
            <input type="email" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <label>Password:</label>
            <input type="password" placeholder='enter your password'  value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
            <br/>
            <button onClick={handleAdminLogin}>Login</button>
            
           
        </form>
        </div>
        </>
    )
}

export default AdminLogin;