import { useNavigate } from 'react-router-dom';
import '../css/login.css' 
const AdminLogin=()=>{
    
    const navigate= useNavigate();
    function admin(){
        navigate('/admin');
    }
    return(
        <>
      <div className='divclass'>
            <center><h1 className='login'>Admin Login </h1></center>
        <form className='formclass'>
           
            <label>Email:</label>
            <input type="email" placeholder='enter your email'></input><br/>
            <label>Password:</label>
            <input type="password" placeholder='enter your password'></input><br/>
            <label>Location:</label>
            <input type="password" placeholder='enter your location'></input><br/>
            <br/>
            <button onClick={admin}>Login</button>
            
           
        </form>
        </div>
        </>
    )
}

export default AdminLogin;