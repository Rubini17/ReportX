import '../css/signup.css'
const Signup=()=>{
    return(
        <>
        <div className='divclass1'>
            <center><h1 className='signup'>Sign Up </h1></center>
        <form className='formclass1'>
            <label >Name:</label>
            <input type="text" placeholder='enter your name'></input><br/>
            <label>Email:</label>
            <input type="email" placeholder='enter your email'></input><br/>
            <label>Password:</label>
            <input type="password" placeholder='enter your password'></input><br/>
            <label>Phone:</label>
            <input type="number"  placeholder='enter your phone number'></input><br/>
            <label>Location:</label>
            <input type="text" placeholder='enter your location'></input><br/>
            <br/>
            <button>Signup</button>

        </form>
        </div>
        </>
    )
}
export default Signup;