import React, { useEffect, useRef, useState } from 'react'
import { RxDoubleArrowLeft } from "react-icons/rx";
import { AnimatePresence, motion } from "motion/react"

const Navbar = ({rotated,rotateArrow,showMessages}) => {

    const [hamburger, setHamburger] =  useState(false)
    const [messageHover, setMessageHover] = useState(false)
    const [profileHover, setProfileHover] = useState(false)
    const [profileNotViewed, setProfileNotViewed] = useState(true)
    const popUpRef = useRef()
    const showPopUpRef = useRef()
    const [showClickme, setShowClickme] = useState(false)

    function showHamburger(){
        setHamburger(prev=>!prev)
        showMessages()
    }

    useEffect(()=>{
        function showPopUp(e){
            if(showPopUpRef.current.contains(e.target)) return setProfileHover(prev=>!prev)
            if(popUpRef.current && !popUpRef.current.contains(e.target)) setProfileHover(false)
        }
        window.addEventListener('mousedown',showPopUp)
        return () => window.removeEventListener('mousedown',showPopUp)
    },[])
    
  return (
    <div className='relative w-full pl-2 h-18 bg-black flex items-center justify-start sm:justify-between'>
        <motion.div
            className={`flex gap-0 sm:gap-30 w-auto md:w-75 items-center pr-3`}>
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
                className='text-white text-2xl cursor-pointer px-0 sm:px-4'><RxDoubleArrowLeft />
            </motion.span>
        </motion.div>
        <div className={`relative flex-1 flex justify-end px-5 items-center ${hamburger ? 'gap-0' : 'gap-5'}`}>
            <motion.div
                onHoverStart={()=>setShowClickme(true)}
                onHoverEnd={()=>setShowClickme(false)}
                whileHover={{scale:1.2}}
                ref={showPopUpRef}
                onClick={()=>setProfileNotViewed(false)}
                className=' absolute right-22 w-10 h-10 bg-white rounded-full cursor-pointer mr-4'>
                <img className='w-full h-full object-cover rounded-full object-top' src="https://cdn.pixabay.com/photo/2020/10/22/06/18/vegeta-5675018_1280.png" alt="" />
            </motion.div>
            {
                showClickme && profileNotViewed &&(
                <motion.span
                    className='absolute hidden sm:inline top-12 z-[10] right-28 sm:top-2 sm:right-36 rounded-[20px] text-center text-gray-900 bg-white px-2 py-[1px]  truncate'
                    initial={{y:-40}}
                    animate={{
                        y:0
                    }}
                    transition={{type:'spring', stiffness: 300, damping: 10}}
                >
                Check Profile...!
                </motion.span>
                )
            }
            <AnimatePresence>
               {profileHover && (
                 <motion.div
                    ref={popUpRef}
                    className='absolute w-40 h-50 top-[60px] right-30 bg-red-300'
                    initial={{scale:0, opacity:0}}
                    exit={{scale:0, opacity:0}}
                    animate={{
                        scale:1,
                        opacity: profileHover ? 1 : 0
                    }}
            >      
            </motion.div>
               )}
            </AnimatePresence>
            <motion.div 
                onHoverStart={()=>setMessageHover(true)}
                onHoverEnd={()=>setMessageHover(false)}
                onClick={showHamburger}
                className={`relative flex ${hamburger ? 'flex-row' : 'flex-col'} flex-col gap-2 cursor-pointer p-4`}>
                <motion.span
                    animate={hamburger?{
                        rotate:130,
                        x:40,
                        scale:1.1,
                        transition: {type:'spring', stiffness: 300, damping : 15}
                    }:{}}
                    className='w-8 h-[2px] bg-white'></motion.span>
                <span className={`w-8 h-[2px] bg-white ${hamburger ? 'hidden' : 'inline'}`}></span>
                <motion.span
                    animate={hamburger?{
                        rotate:-130,
                        x:0,
                        scale:1.1,
                        transition: {type:'spring', stiffness: 300, damping : 15}
                    }:{}}
                    className='w-8 h-[2px] bg-white'></motion.span>

            </motion.div>
                <motion.div 
                    animate={ messageHover ?{
                        opacity: 1,
                        x:0,
                        scale:1
                    }:{
                        opacity: 0,
                        x:10,
                        scale:0.8
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className='w-30 h-10 bg-yellow-300 opacity-0 top-[67px] right-12 absolute'>
                        <motion.span
                            className='relative block'
                            animate={messageHover ?{
                                y:5,
                                x:30,
                                opacity:1,
                                scale:1.2,
                                transition: {type: 'spring', stiffness: 300, damping: 10 }
                            }:{
                                y:40,
                                opacity:0
                            }}                            
                        >
                            Messages
                        </motion.span>
                </motion.div>
        </div>
    </div>
  )
}

export default Navbar
