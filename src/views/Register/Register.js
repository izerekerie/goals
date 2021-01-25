import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import img from '../../assets/img/group.jpg'
function Register(props) {
 const [credentials,setCredentials]=useState({
     name:"",
     email:"",
     password:"",
    error:null
 })

 const {name,email,password,error} =credentials;

 const handleChange=(e)=>{
     setCredentials({...credentials,[e.target.name]:e.target.value})
 }
 const handleSubmit= async (e)=>{
e.preventDefault();
try{
    setCredentials({...credentials, error:null})
await  axios.post('http://localhost:8000/api/auth/register',{name,email,password})
props.history.push('/login')
}
catch(err){
setCredentials(...credentials,{error:err.response.data.error})
}
 }

const part1={
    backgroundImage:`url(${img})`,
    backgroundSize:"cover",  
}
    return (
       
        <div className="flex">
            <div className=" p-24 h-screen  w-2/3" style={part1}>
              <p className=" w-full font-bold mb-8 text-white" style={{fontSize:"70px"}}>Make your Dreams</p>
              <p className=" w-full font-bold  " style={{fontSize:"70px",color:"#FBC431"}}>Come True</p>
            </div>
            <div className="h-screen w-1/2  flex justify-center">

             <div className=" p-12 h-100 m-12 w-3/4 bg-white">
              <h1 className="font-semibold pb-10" style={{color:"#FBC431",fontSize:"30px"}}>Register</h1>
              <input className="border-b mb-8 p-3 pl-0 w-full focus:outline-none" style={{borderColor:"#FBC431"}} type="text" name="name" value={name} onChange={handleChange} placeholder="Enter full name"/>
              <input  className="border-b mb-8 p-3 pl-0 w-full focus:outline-none" style={{borderColor:"#FBC431"}}  type="email" name="email" value={email} onChange={handleChange}  placeholder="Enter email"/>
              <input className="border-b mb-8 p-3 pl-0 w-full focus:outline-none" style={{borderColor:"#FBC431"}} type="password" name="password" value={password} onChange={handleChange}  placeholder="Enter password"/>
             <div className="w-full flex justify-end mt-10">
             <button onClick={handleSubmit} className="text-white p-2 m-2 mr-2" style={{fontSize:"17px",background:"#FBC431"}}>Register</button>
            </div> 
            <p className="text-center p-12">Already registered? <Link className="text-blue-800" to="/login">Login</Link></p>
             </div>
             
            </div>
            {/* <h1>Register</h1>
            <div className="w-1/6">
            <input className="border m-2 " type="text" name="name" value={name} onChange={handleChange} placeholder="Enter name"/>
            <input className="border m-2 " type="email" name="email" value={email} onChange={handleChange}  placeholder="Enter email"/>
            <input className="border m-2" type="password" name="password" value={password} onChange={handleChange}  placeholder="Enter password"/>
            {error ? <p className="bg-red-600">{error}</p>: null}
            <button onClick={handleSubmit} className="bg-red-300 m-2">Register</button>
            <p>Already registered? <Link to="/login">Login</Link></p>
            </div> */}
            
        </div>
    )
}

export default Register
