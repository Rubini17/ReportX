import '../css/status.css'
import { useState } from 'react';
import axios from 'axios';
const AdminStatus=()=>{
    const [location,setLoc]= useState("");
    const [reports,setReports]= useState([]);
    const [isFetched,setIsFetch]= useState(false);
            const handleStatus= async()=>{
                try{
                    const res= await axios.get("https://reportx-backend.onrender.com/adminstatus");
                    setReports(res.data.filter(report=>report.location===location));
                    setIsFetch(true);
                }
                catch(error){
                    console.log("Error fetching reports",error);
                }
            };


        return(
        <>
        <label>Enter your email:</label>
        <input type='location' value={location} onChange={(e)=>setLoc(e.target.value)}></input>
        <br/>
        <button onClick={handleStatus}>View Status</button>
        <br/>
        
        {isFetched && (
                <>
                    <h1>Reported Issues For your Location</h1>
                    {reports.length === 0 ? (
                        <p>No reports available</p>
                    ) : (
                        <div className='gridClass'>
                            {reports.map((report, index) => (
                                <li key={index} className='gridItems' >
                                    <strong>Issue:</strong> {report.issue} <br />
                                    <strong>Location:</strong> {report.location} <br />
                                    <strong>Pincode:</strong> {report.pincode} <br />
                                    <strong>Status</strong><button>Pending</button><br />
                                    
                                </li>
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    );
};
export default AdminStatus;

