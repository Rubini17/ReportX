import '../css/home.css'
import Navbar1 from './navbar1';
const Home=()=>{
    return(
        <>
             <Navbar1/>
        <div className="homediv">
            Welcome to ReportX!
        </div>
        {/* <div className='homediv2'>
        Welcome to ReportX, your go-to platform for reporting local issues quickly and efficiently. Whether it's potholes, broken streetlights, garbage collection problems, or any other public concern, ReportX ensures your voice is heard by the right authorities. With an easy-to-use interface, you can report issues by entering details, location, and a brief description. Once submitted, you can track the progress of your report in real-time and stay updated on its resolution. ReportX connects citizens with authorities, promoting faster problem-solving and community engagement. Our platform offers a seamless experience with quick reporting, real-time updates, and direct engagement with responsible departments. By using ReportX, you become an active part of the solution, helping build cleaner, safer, and better neighborhoods. Start reporting issues today and make a difference in your community! Report Now & Be the Change!
        </div> */}
        </>
    )

}

export default Home;