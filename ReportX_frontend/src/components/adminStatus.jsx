import '../css/status.css'
import { useState } from 'react';
import axios from 'axios';
import Navbar3 from './navbar3';
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
            const handlechange=async(reportId,newStatus)=>{
                try{
                    await axios.put(`https://reportx-backend.onrender.com/updatestatus/${reportId}`, { status: newStatus });
                    setReports(reports.map(report=>
                        report._id === reportId ? {...report, status : newStatus} : report
                    ));

                }
                catch(error){
                    console.log("Error updating status",error);
                }
            }

        return(
        <>
        <Navbar3/>
        <label>Enter your location:</label>
        <input type='text' value={location} onChange={(e)=>setLoc(e.target.value)}></input>
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
                                    <strong>Status</strong>
                                    <select value={report.status} onChange={(e)=> handlechange(report._id,e.target.value)}>
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Resolved">Resolved</option>
                                        
                                        </select>
                                        <br />
                                    
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

