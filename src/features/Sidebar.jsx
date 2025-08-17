import React from 'react'
import { AiFillDashboard   } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { FaTasks } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import { motion } from "motion/react"
import { NavLink } from 'react-router-dom';


const Sidebar = ({rotated,width}) => {

  return (
    <motion.div 
        animate={{
          width: width <= 767 ? rotated ? 0 : '100%' : rotated ? 100 : 250,
          transition: {duration : 0.5},
        }} 
        className='h-[calc(100%_-_60px)] md:h-full bg-gray-900 absolute md:relative overflow-hidden z-80 '>
      <div
        className='w-75 mx-auto  md:m-0 md:w-full h-full flex flex-col px-2 py-8'>
        <ul className='w-full '>
          <li className='flex justify-center md:block'>
            <NavLink to='/dashboard/home' className={({isActive})=>`flex items-center ${isActive ? 'bg-gray-800' : ''} ${rotated ? 'text-xl' : 'textlg'} gap-2  max-w-[80%] w-full justify-center md:justify-start md:max-w-full text-white my-3 rounded-[10px] hover:bg-blue-400 px-8 py-2.5 text-2xl md:text-lg`}><AiFillDashboard  /> <span className={`${rotated ? 'hidden' : 'inline'}`}>Dashboard</span></NavLink>
          </li>
          <li className='flex justify-center md:block'>
            <NavLink to='/dashboard/companies' className={({isActive})=>`flex items-center ${isActive ? 'bg-gray-800' : ''} gap-2  max-w-[80%] w-full justify-center md:justify-start md:max-w-full text-white my-3 rounded-[10px] hover:bg-blue-400 px-8 py-2.5 text-2xl md:text-lg`} href="#"><BiBuildings /> <span className={`${rotated ? 'hidden' : 'inline'}`}>Companies</span></NavLink>
          </li>
          <li className='flex justify-center md:block'>
            <NavLink to='/dashboard/tasks' className={({isActive})=>`flex items-center ${isActive ? 'bg-gray-800' : ''} gap-2  max-w-[80%] w-full justify-center md:justify-start md:max-w-full text-white my-3 rounded-[10px] hover:bg-blue-400 px-8 py-2.5 text-2xl md:text-lg`} href="#"><FaTasks  /> <span className={`${rotated ? 'hidden' : 'inline'}`}>Tasks</span></NavLink>
          </li>
          <li className='flex justify-center md:block'>
            <NavLink to='/login' className={({isActive})=>`flex items-center ${isActive ? 'bg-gray-800' : ''} gap-2  max-w-[80%] w-full justify-center md:justify-start md:max-w-full text-white my-3 rounded-[10px] hover:bg-blue-400 px-8 py-2.5 text-2xl md:text-lg`} href="#"><IoMdLogOut   /> <span className={`${rotated ? 'hidden' : 'inline'}`}>Logout</span></NavLink>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Sidebar
