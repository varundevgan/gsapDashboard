import React, { useState } from 'react'
import { RxDoubleArrowLeft } from "react-icons/rx";
import { motion } from "motion/react"

const Navbar = ({rotated,rotateArrow}) => {

    const [hamburger, setHamburger] =  useState(false)
    
  return (
    <div className='relative w-full h-18 bg-black flex items-center justify-between'>
        <motion.div
            animate={{
                x: rotated ? 0 : 32,
                transition: {type:'spring', stiffness: 300, damping: 15}
            }}
            className={`flex gap-30 w-75 items-center pr-3`}>
            <img className='w-25 h-15 cursor-pointer' src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" alt="" />
            <motion.span 
                whileHover={{
                    x:rotated ? 10 : -10,
                    scale:1.1,
                    transition: { type: "spring", stiffness: 300, damping: 15 }                
                }} 
                animate={{
                    rotate: rotated ? 180 : 0,
                    transition:{duration : 0.3}
                }}
                onClick={rotateArrow}
                className='text-white text-2xl cursor-pointer px-4'><RxDoubleArrowLeft />
            </motion.span>
        </motion.div>
        <div className={`flex-1 flex justify-end px-5 items-center ${hamburger ? 'gap-0' : 'gap-5'}`}>
            <div className='w-10 h-10 bg-white rounded-full cursor-pointer'>
                <img className='w-full h-full object-cover rounded-full object-top' src="https://cdn.pixabay.com/photo/2020/10/22/06/18/vegeta-5675018_1280.png" alt="" />
            </div>
            <div 
                onClick={()=>setHamburger(prev=>!prev)}
                className={`flex ${hamburger ? 'flex-row' : 'flex-col'} flex-col gap-2 cursor-pointer p-4`}>
                <motion.span
                    animate={hamburger?{
                        rotate:130,
                        x:40,
                        duration:0.5,
                        transition: {type:'spring', stiffness: 300, damping : 15}
                    }:{}}
                    className='w-8 h-[2px] bg-white'></motion.span>
                <span className={`w-8 h-[2px] bg-white ${hamburger ? 'hidden' : 'inline'}`}></span>
                <motion.span
                    animate={hamburger?{
                        rotate:-130,
                        x:0,
                        duration:0.5,
                        transition: {type:'spring', stiffness: 300, damping : 15}
                    }:{}}
                    className='w-8 h-[2px] bg-white'></motion.span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
