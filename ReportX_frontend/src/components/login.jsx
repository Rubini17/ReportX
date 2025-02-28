import { useNavigate , Link} from 'react-router-dom';
import { useState } from 'react';
import '../css/login.css'
import axios from 'axios';
const Login=()=>{
    
    const navigate= useNavigate();
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState(""); 
    function sign(){
        navigate('/signup');
    }

    const handleLogin= async(event)=>{
        event.preventDefault();
        console.log("Button Clicked");
        const req= await axios.post("https://reportx-backend.onrender.com/login",
            {
                email:email,
                password:password
            }
        )
    
    const message= req.data.message;
    const isLogin = req.data.isLogin ;

    if(isLogin){
        alert(message);
        navigate('/dashboard');
    }
    else{
        alert(message)
    }
};



    return(
        <>
      <div className='divclass'>
            <center><h1 className='login'>Login </h1></center>
        <form className='formclass'>
           
            <label>Email:</label>
            <input type="email" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <label>Password:</label>
            <input type="password" placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
            <br/>
            <button onClick={handleLogin}>Login</button>
            Already not a User? <button onClick={sign}>Signup</button>
            
           
        </form>
        </div>
        </>
    )
}

export default Login;
