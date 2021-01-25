import React from 'react'
import {BiPlus,BiListCheck,FaUserEdit} from 'react-icons/all'
import { Link } from 'react-router-dom';
import './sidebar.css'
import avatar from '../../assets/img/headphones.png'
function Sidebar() {


    return (
        <div className="  grid justify-items-center h-screen fixed" style={{background:" #120B07",width:"17%"}}  >
       
       <div className=" w-3/4 justify-items-center">
            <img alt="profile" src={avatar} className="mt-10 ml-5 bg-white rounded-full h-28 w-28 "/>
            <h5 className=" pl-5 pt-10 text-white font-normal text-xl">{localStorage.getItem('user')}</h5>
            <ul className="mt-10 w-full ">
                <li className=" relative text-lg p-2 flex  text-white font-normal">
                  <BiPlus className=""style={{fontSize:"30px"}}/>
                  <Link to="/addgoal" className="absolute left-12">Add goal</Link>
                  </li>
                <li className=" relative text-lg p-2 flex   text-white font-normal ">
                    
                    <BiListCheck style={{fontSize:"35px"}}/>
                   <Link to="/dashboard" className=" absolute  left-12">Goals</Link> </li>
                <li className=" relative text-lg p-2 flex text-white font-normal">
                  <FaUserEdit style={{fontSize:"30px"}}/>
                <Link className="absolute left-12">Edit profile</Link></li>
            </ul>
            <div className="  absolute bottom-0">
                <p className="text-white">@copyright</p>
             </div> 
           </div>
        </div>
    )
}

export default Sidebar
