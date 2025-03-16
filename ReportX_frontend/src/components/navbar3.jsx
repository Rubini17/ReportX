import { Link } from "react-router-dom";
import '../css/navbar.css'
const Navbar3=()=>{
    return(
        <>
        <header>
            <nav className="class1">
                <li ><Link to='/' className="link" >Logout</Link></li>
    
            </nav>
        </header>
        
        </>

    )
}

export default Navbar3;