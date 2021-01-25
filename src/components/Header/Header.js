import './Header.css';
import {Link,Redirect} from 'react-router-dom'
import React from 'react'
import {BsBellFill} from 'react-icons/all'
function Header() {
  const logout=()=>{

    // localStorage.removeItem('token')
    // localStorage.removeItem('user')
    return <Redirect to="/"/>
    }
  return (
    <div className="h-12 flex bg-white border-b fixed " style={{height:"50px",marginLeft:"14.45rem",width:"83%",borderColor:"#120B07"}}>
      <h2 className="p-1 text-2xl font-bold "style={{color:"#120B07"}}>
            GOAL-KE</h2>
            <div className=" flex absolute right-4  pt-1">
           
              <div className="flex space-x-10">
              <BsBellFill className="mt-2" style={{fontSize:"25px",color:"#120B07"}}/>
                  <button  onClick={logout} className="outline:none text-white p-1 w-20 h-8 mt-1" style={{background:" #120B07"}}>Logout</button>
                </div>  
              <div>
              
              </div>
          </div>
    </div>
  )
}

export default Header
