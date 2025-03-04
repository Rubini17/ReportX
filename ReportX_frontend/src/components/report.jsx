import '../css/report.css'
import Navbar2 from './navbar2';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
const Report=()=>{
    const navigate= useNavigate();
   
    const [email, setEmail]= useState("");
    const [issue, setIssue]= useState("");
    const [location, setLoc]= useState("");
    const [pincode, setPin]= useState("");

    const handleReport =  async(event) => {
        event.preventDefault();
        console.log("Button Clicked");
       const req=  await axios.post("https://reportx-backend.onrender.com/report", 
          {
           email:email,
           issue:issue,
           location:location,
           pincode:pincode
    }
        );
        console.log(email,issue);
        console.log(req.data);
        const message= req.data.message;
        const isReport= req.data.isReport;
        if(isReport){
          alert(message);
          navigate('/status');
        }
        else{
          alert(message)
        }
      };

    return(
        <>
        <Navbar2/>
        <div className='reportblock'>
        <center><h1 className='report'>Report your issue</h1></center>
        <form className='reportform' >
         
            <label>Email:</label>
            <input type="email" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <label>Issue:</label>
            <input type='text' placeholder='enter your name' value={issue} onChange={(e)=>setIssue(e.target.value)}></input><br/>
            <label>Location:</label>
            <input type='text' placeholder='enter your name' value={location} onChange={(e)=>setLoc(e.target.value)}></input><br/>
            <label>Pincode:</label>
            <input type='number' placeholder='enter your name' value={pincode} onChange={(e)=>setPin(e.target.value)}></input><br/>
            <button onClick={handleReport}>Submit Issue</button>
           
        </form>
        </div>
        </>
    )
}
export default Report;