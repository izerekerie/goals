import React,{useState,useEffect} from 'react'
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
import {MdEdit,MdDelete} from 'react-icons/all'
import axios from 'axios'
import {useDispatch}from 'react-redux'
import {Link,Redirect} from 'react-router-dom'



function LoginController(props) {
  // const 
// const getUser= async () =>{
//   const res =await axios.get("http://localhost:8000/api/auth",{
//      headers:{
// token:`${localStorage.getItem("token")}`
//   },
// });

// console.log("user displayed: ",res.data)

// return res.data
// 
  useEffect(()=>{
    // axios.get('http://localhost:8000/api/goals/read')
    // .then((response)=>{
    
      if(!localStorage.getItem('user')){   
     console.log("no user")
       return <Redirect to="/login" />;
      }
      else{
        console.log(localStorage.getItem("user"))
        // return <Dashboard />
         ;     
      }

    // })
  },[])

  return <Dashboard  />

   }
   export default LoginController


        console.log("user found : ",localStorage.getItem('user'))


const Dashboard= (props) => {
  
  const [goalList,setGoalList]=useState([])
const [user,setUser]=useState();
axios.get('http://localhost:8000/api/goals/read')
.then((response)=>{
  setGoalList(response.data);
})

const deleteGoal = (id)=>{
  axios.delete(`http://localhost:8000/api/goals/delete/${id}`);
  <Redirect to="/dashboard"/>
}

  return (
      <div >
        
        <DashboardLayout>
        <section className="col-span-4 mt-4 flex ">
          <div className=" ml-10 mt-5 relative h-36 w-56  shadow-lg rounded-t-sm" style={{background:"#ffff"}}>
             <h3 className="p-2 text-xl  font-bold  rounded-t-sm"  style={{background:" #120B07",color:"#FBC431"}}>Completed</h3>
             <p className="absolute bottom-0 right-0 text-xl  font-bold pr-5" style={{color:"#FBC431"}}>4</p>
          </div>
          <div className=" ml-10 mt-5 relative h-36 w-56 shadow-lg rounded-t-sm" style={{background:"#fffff"}}>
            <h3 className="p-2 text-xl  font-bold " style={{background:" #120B07",color:"#FBC431"}}>Uncompleted</h3>
            <p className="absolute bottom-0 right-0 text-xl  font-bold pr-5" style={{color:"#FBC431"}}>4</p>
         </div>
          </section>
        
          <div class="col-span-4 ml-10 mt-10 p-3 text-3xl font-normal">
         
            <p style={{color:"#FBC431"}}>Goals</p>
          </div>
          {goalList.map((val,key)=>{
            
         return <section key={key} className="col-span-4 ">
  <div className=" rounded-l-sm mt-4 ml-12 w-3/5 h-auto bg-white shadow-lg border-l-8 "style={{borderColor:"#FBC431"}}>
    <div className="top-part grid grid-cols-2">
      <p  className="pb-0 p-2 text-lg font-semibold " style={{color:"#120B07"}}>{val.goalName}</p>
      <div className=" flex flex-row-reverse  ">
        <p className="p-3 text-sm font-light"style={{color:"#120B07"}}> 12 augst 2020 10:00am</p>
      </div>
      <div className=" max-w-full m-2">
        <h5 className=" text-gray-500 pt-2">Description</h5>
        <p className=" w-full text-gray-400 pt-2" >{val.goalDescription}</p>
      </div>
 
    </div>
    <div className="p-2 flex flex-row-reverse space-x-4 space-x-reverse mr-4" style={{color:"#FBC431"}}>
     <Link to={`/updategoal/${val._id}`}><MdEdit className="" style={{fontSize:"20px"}}/></Link> 
     <button className="focus::outline-none" onClick={() =>deleteGoal(val._id)} > <MdDelete className="focus:outline-none" style={{fontSize:"20px"}}/></button>
     </div>
  </div>
 
  
</section>
          })}

        </DashboardLayout>
      </div>
    )
}






