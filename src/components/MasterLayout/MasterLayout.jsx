import React from 'react'
import SideBar from '../SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <>
    <SideBar/>
    <div className="layout">
       <Outlet/>
    </div>
    </>
    
    
      
         
    
  )
}
