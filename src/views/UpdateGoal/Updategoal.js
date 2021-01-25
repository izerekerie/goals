import React,{useEffect,useState} from 'react'
import {useRouteMatch,useHistory} from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
import axios from 'axios';
function Updategoal() {
   const form={
   boxShadow:"-3px 5px 18px -10px rgba(0,0,0,0.61)",
 }
 const [goalDetails,setGoalDetails]= useState([]);
const match= useRouteMatch();
const history=useHistory();
 useEffect(()=>{

    axios.get(`http://localhost:8000/api/goals/read/${match.params.id}`)
    .then((response)=>{
        setGoalDetails(response.data);
    })

 },[])
 const {id,goalName,goalDescription}=goalDetails
 const handleChange =(e) =>{
    setGoalDetails( {...goalDetails,[e.target.name]:e.target.value})
 }

 const handleSubmit =(e)=>{
     e.preventDefault();
     try{
   axios.put(`http://localhost:8000/api/goals/update/${match.params.id}`,{goalName,goalDescription})
   history.push('/dashboard')
     }catch(err){
         console.log(err.data)
     }
 }
    return (
        <div>
            <DashboardLayout>
            <div className="flex justify-center h-full">
              <div style={form} className="h-auto  bg-white w-3/6 mt-12 mb-4">
                <h1 className="text-center font-semibold  p-4 border-b " style={{fontSize:"25px",color:"#FBC431",borderColor:"#FBC431"}}>Update a goal</h1>
                <div className="  ml-20 mt-10  relative w-3/4 " >
                    <div className="w-full mb-4">
                        <p className="font-semibold" style={{color:"#120B07",fontSize:"17px"}}>Enter goal name</p>
                    <input type="text" className="w-full border p-1.5 mt-2 focus:outline-none" onChange={handleChange} name="goalName" value={goalDetails.goalName} placeholder="Enter goalname" style={{borderColor:"#49382F"}}/>
                    </div>
                    <div className="w-full mb-4">
                    <p className="font-semibold" style={{color:"#120B07",fontSize:"17px"}} >Enter goal Description</p>
                <textarea rows="5" className="w-full border p-1.5 mt-2  focus:outline-none" value={goalDetails.goalDescription} onChange={handleChange} name="goalDescription" placeholder="Enter Description" style={{borderColor:"#49382F"}}/>
               </div>
               <div className="w-full mb-4">
               <p className="font-semibold" style={{color:"#120B07",fontSize:"17px"}}>End time</p>
                <input type="date" className="w-full border p-1.5 mt-2  focus:outline-none" placeholder="Enter goalname" style={{borderColor:"#49382F"}}/>
               </div>
                <div className="w-full flex justify-end"> 
                <button  onClick={handleSubmit} className=" text-white p-1 w-1/6 m-4 mr-0 text-center"  style={{background:"#FBC431"}}>Send</button>
                </div>
               
                </div>
               
              </div>
            </div>
                
            </DashboardLayout>
        </div>
    )
}

export default Updategoal
