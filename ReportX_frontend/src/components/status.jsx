// import '../css/status.css'
// import Navbar2 from './navbar2';

// const Status=()=>{
//     return(
//         <>
//         <Navbar2/>
//         <h1>Status</h1>
//         <div>

//         </div>
//         </>
//     )
// }
// export default Status;

import '../css/status.css';
import Navbar2 from './navbar2';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Status = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get("https://reportx-backend.onrender.com/status");
                setReports(response.data);
            } catch (error) {
                console.error("Error fetching reports:", error);
            }
        };
        fetchReports();
    }, []);

    return (
        <>
            <Navbar2 />
            <div className="status-container">
                <center><h1 className="status-heading">Reported Issues</h1></center>
                <table className="status-table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Issue</th>
                            <th>Location</th>
                            <th>Pincode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={index}>
                                <td>{report.email}</td>
                                <td>{report.issue}</td>
                                <td>{report.location}</td>
                                <td>{report.pincode}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Status;
