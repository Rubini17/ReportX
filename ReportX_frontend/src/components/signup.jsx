import '../css/signup.css'
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import axios from "axios";
const Signup=()=>{
    const navigate= useNavigate();
    function log(){
        navigate('/login');
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [phone, setPhone] = useState(0);
    const [location, setLocation]= useState("");
    const handleSignup =  async(event) => {
      event.preventDefault();
      console.log("Button Clicked");
     const req=  await axios.post("https://reportx-backend.onrender.com/signup", 
        {
          name:name,
          email:email,
          password:password,
          phone:phone,
          location:location
        }
      );
      console.log(email,password);
      console.log(req.data);
      const message= req.data.message;
      const isSignup= req.data.isSignup;
      if(isSignup){
        alert(message);
        navigate('/login');
      }
      else{
        alert(message)
      }
    };

    return(
        <>
        <div className='divclass1'>
            <center><h1 className='signup'>Sign Up </h1></center>
        <form className='formclass1' >
            <label htmlFor='name'>Name:</label>
            <input type="text" id='name' placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
            <label htmlFor='email'>Email:</label>
            <input type="email" id='email' placeholder='enter your email'  value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <label htmlFor='pass'>Password:</label>
            <input type="password" id='pass' placeholder='enter your password'  value={password} onChange={(e)=>setPass(e.target.value)}></input><br/>
            <label htmlFor='phone'>Phone:</label>
            <input type="number" id='phone' placeholder='enter your phone number'  value={phone} onChange={(e)=>setPhone(e.target.value)}></input><br/>
            <label htmlFor='loc'>Location:</label>
            <input type="text" id='loc' placeholder='enter your location'  value={location} onChange={(e)=>setLocation(e.target.value)}></input><br/>
            <br/>
            <button onClick={handleSignup}>Signup</button>
            <br/>
            Already a user?<button onClick={log}>Login</button>

        </form>
        </div>
        </>
    )
}
export default Signup;