import React, { useEffect, useState } from 'react'
import Sidebar from '../features/Sidebar'
import Navbar from '../features/Navbar'
import { Outlet } from 'react-router-dom'
import Messages from '../features/Messages'

const Dashboard = () => {

  const [rotated, setIsRotated] = useState(false)
  const [messages, setMessages] = useState(false)
  function rotateArrow(){
    setIsRotated(prev=>!prev)
  }

  function showMessages(){
    setMessages(prev=>!prev)
  }

  const[width, setWidth]   = useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener('resize',()=>setWidth(window.innerWidth));
    return () => window.removeEventListener('resize',()=>setWidth(window.innerWidth))
  },[])

  return (
    <div className='w-full h-screen flex flex-col overflow-hidden'>
      <Navbar rotated={rotated} rotateArrow={rotateArrow} showMessages={showMessages}  />
      <div className='w-full h-full flex'>
        <Sidebar rotated={rotated} width={width} />
        <div className='flex-1 h-full'>
          <Outlet />
        </div>
        <Messages messages={messages} width={width}/>
      </div>
    </div>
  )
}

export default Dashboard
