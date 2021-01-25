import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import target from '../../assets/img/target.svg'
function Login(props) {

const [data,setData]=useState({
  email:"",
  password:"",
  error:null
})
const {email,password,error}=data;

const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}

const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
setData({...data, error:null})
const res= await  axios.post('http://localhost:8000/api/auth/login',{email,password})
localStorage.setItem('token',res.data)
const response =await axios.get("http://localhost:8000/api/auth",{
           headers:{
      token:`${localStorage.getItem("token")}`
        },
      });
    localStorage.setItem('user',response.data)
     props.history.push('/dashboard')
    }
    catch(err){
        setData({...data, error:err.response})
        // console.log(error)
    }
    
}
    return (
        <div className="flex">
            <div className="h-screen w-1/2  justify-center" style={{background:"#120B07"}}>
                <div className="w-full">
                <img  src={target} />
                </div>
                <h1 className=" w-full  text-center font-semibold p-10" style={{color:"#FBC431",fontSize:"40px"}}>What is your goal ?</h1>
    
          </div>
            <div className=" h-screen w-1/2 flex justify-center">
            <div className="h-2/3 w-2/3 mt-24">
            <h1 className="font-semibold pb-10" style={{color:"#FBC431",fontSize:"30px"}}>Login</h1>
            <input className="border-b mb-8 p-3 pl-0 w-full focus:outline-none" style={{borderColor:"#FBC431"}} type="email" onChange={handleChange} value={email} name="email" placeholder="Enter email"/>
            <input  className="border-b mb-8 p-3 pl-0 w-full focus:outline-none" style={{borderColor:"#FBC431"}} type="password" onChange={handleChange} value={password} name="password" placeholder="Enter password"/>
            <div className="w-full flex justify-end mt-5">
             <button onClick={handleSubmit} className="text-white p-2 m-2 w-32 mr-2" style={{fontSize:"17px",background:"#FBC431"}}>Login</button>
            </div>
            <p className="text-center p-12">Already registered? <Link className="text-blue-800" to="/login">Login</Link></p>
             </div>
            </div>
            
             {/* <h1>Login</h1>
            <div className="w-1/6">
        
            <input className="border m-2 " type="email" onChange={handleChange} value={email} name="email" placeholder="Enter email"/>
            <input className="border m-2" type="password" onChange={handleChange} value={password} name="password" placeholder="Enter password"/>
            {error ? <p className="bg-red-600">{error}</p>: null}
            <button onClick={handleSubmit} className="outline:none focus:bg-blue-500 bg-red-300 m-2">Login</button>
            <p>Not yet registered? <Link to="/register">register</Link></p>
            </div> */}
        </div>
    )
}

export default Login
