import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
function DashboardLayout(props) {
  return (
    <div className="flex" style={{width:"100%"}}>
       
       <Sidebar/>
       <div className="flex">
       <Header/>
     
        <div className="mt-12 h-auto"style={{width:"70.6rem",height:"",background:"#f6f6f6",marginLeft:"14.5rem"}}>
        {props.children}
         </div>
       </div>
       
      
    </div>
  )
}

export default DashboardLayout

