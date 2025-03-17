import '../css/status.css'
import Navbar2 from './navbar2';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Status=()=>{
    const [email,setEmail]= useState("");
    const [reports,setReports]= useState([]);
    const [isFetched,setIsFetch]= useState(false);
            const handleStatus= async()=>{
                try{
                    const res= await axios.get("https://reportx-backend.onrender.com/status");
                    setReports(res.data.filter(report=>report.email===email));
                    setIsFetch(true);
                }
                catch(error){
                    console.log("Error fetching reports",error);
                }
            };


        return(
        <>
        <Navbar2/>
        <div className='text1'>
        <label>Enter your email:</label>
        <input className='input1'type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <br/>
        <button onClick={handleStatus} className='button'>View Status</button>
        <br/>
        
        {isFetched && (
                <>
                    <h1>Reported Issues</h1>
                    {reports.length === 0 ? (
                        <p>No reports available</p>
                    ) : (
                        <div className='gridClass'>
                            {reports.map((report, index) => (
                                <li key={index} className='gridItems' >
                                    <strong>Issue:</strong> {report.issue} <br />
                                    <strong>Location:</strong> {report.location} <br />
                                    <strong>Pincode:</strong> {report.pincode} <br />
                                    <strong>Status:</strong> {report.status}<br />
                                    
                                </li>
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    );
};
export default Status;

