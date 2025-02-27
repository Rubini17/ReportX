import '../css/report.css'
import Navbar2 from './navbar2';
import { useNavigate } from 'react-router-dom';
const Report=()=>{
    const navigate= useNavigate();
    function status(){
        navigate('/status');
    }
    return(
        <>
        <Navbar2/>
        <div className='reportblock'>
        <center><h1 className='report'>Report your issue</h1></center>
        <form className='reportform' >
         
            <label>Email:</label>
            <input type="email" placeholder='enter your email'></input><br/>
            <label>Issue:</label>
            <input type='text' placeholder='enter your name'></input><br/>
            <label>Location:</label>
            <input type='text' placeholder='enter your name'></input><br/>
            <label>Pincode:</label>
            <input type='text' placeholder='enter your name'></input><br/>
            <button onClick={status}>Submit Issue</button>
           
        </form>
        </div>
        </>
    )
}
export default Report;