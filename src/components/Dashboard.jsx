import React, { useState } from 'react'
import Sidebar from '../features/Sidebar'
import Navbar from '../features/Navbar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

  const [rotated, setIsRotated] = useState(false)
  function rotateArrow(){
      setIsRotated(prev=>!prev)
    }

  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar rotated={rotated} rotateArrow={rotateArrow} />
      <div className='w-full h-full flex'>
        <Sidebar rotated={rotated} />
        <div className='flex-1 h-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
