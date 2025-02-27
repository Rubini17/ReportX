import { Link } from "react-router-dom";
import '../css/navbar.css'
const Navbar1=()=>{
    return(
        <>
        <header>
            <nav className="class1">
                <li ><Link to='/signup' className="link" >SignUp</Link></li>
                <li ><Link to='/login' className="link">Login</Link></li>
                <li><Link to='/adminlogin' className="link">Admin</Link></li>
            </nav>
        </header>
        
        </>

    )
}

export default Navbar1;