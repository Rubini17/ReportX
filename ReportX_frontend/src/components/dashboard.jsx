import '../css/dashboard.css'
import Navbar2 from './navbar2';
import {Link} from "react-router-dom";
const Dashboard=()=>{
    return(
        <>
        <Navbar2/>
        <div>
            <h1 className='dashdiv'>Report your Issues</h1>
            <Link to="/report">
            <center><img src="pathhole.jpg" className='img'/></center>
           </Link>
           <center><div className='text'>Report Road Pathholes</div></center>
            <Link to="/report">
            <center><img src="streetlight.png" className='img' /></center>
           </Link>
           <center><div className='text'>Report Streetlight Flickering</div></center>
           <Link to="/report">
            <center><img src="roadrage.jpeg" className='img'/></center></Link>
            <center><div className='text'>Report Traffic Violations</div></center>
            <Link to="/report">
            <center><img src="garbage1.avif" className='img' /></center>
            </Link>
            <center><div className='text'>Report Garbage</div></center>
            <Link to="/report">
            <center><img src="sewage2.jpg" className='img' /></center>
            </Link>
            <center><div className='text'>Report Sewage Dumping</div></center>
           </div>
      
        </>
    )
}
export default Dashboard;