import { Link } from 'react-router-dom';
import '../css/navbar.css'
const Navbar2=()=>{
    return(
        <>
        <header>
            <nav className='class1'>
                <li><Link to='/report' className='link'>Report Issue</Link></li>
                <li><Link to='/status' className='link'>View Status</Link></li>
                <li><Link to='/' className='link'>Logout</Link></li>
            </nav>
        </header>

        </>
    )
}
export default Navbar2;
