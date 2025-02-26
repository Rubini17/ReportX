
import '../css/login.css' 
const Login=()=>{
    return(
        <>
      <div className='divclass'>
            <center><h1 className='login'>Login </h1></center>
        <form className='formclass'>
           
            <label>Email:</label>
            <input type="email" placeholder='enter your email'></input><br/>
            <label>Password:</label>
            <input type="password" placeholder='enter your password'></input><br/>
            <br/>
            <button>Login</button>
            
           
        </form>
        </div>
        </>
    )
}

export default Login;
