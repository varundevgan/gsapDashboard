import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { gsap } from 'gsap';
import { useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [showSignup, setShowSignup] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const matchMedia = gsap.matchMedia()

    function login(e){
        e.preventDefault()
        console.log('clicked')
    }

    function showSignupPage(e){
        e.preventDefault()
        setShowSignup(!showSignup)
        
        matchMedia.add('(min-width: 1024px)', () => {
            if(!showSignup){
                navigate('/sign-up')
    
                gsap.to('#bigBalls',{
                x:'95%',
                duration: 1
                })
                gsap.to('#login',{
                    x:'100%',
                    duration:1,
                    opacity:0
                })
                gsap.to('#signup',{
                    x:'0%',
                    duration:1,
                    opacity:1
                })
            }
            else{
                navigate('/login-in')
    
                gsap.to('#bigBalls',{
                x:'0%',
                duration: 1
                })
                gsap.to('#signup',{
                    x:'-100%',
                    duration:1,
                    opacity:0
                })
                gsap.to('#login',{
                    x:'0%',
                    duration:1,
                    opacity:1
                })
            }
        })

        matchMedia.add('(max-width: 1023px)',() => {
             if(!showSignup){
                navigate('/sign-up')
    
                gsap.to('#bigBalls',{
                y:'130%',
                duration: 1
                })
                gsap.to('#login',{
                    y:'400',
                    duration:1,
                    opacity:0
                })
                gsap.to('#signup',{
                    y:'40',
                    duration:1,
                    opacity:1
                })
            }
            else{
                navigate('/login-in')
    
                gsap.to('#bigBalls',{
                y:'0%',
                duration: 1
                })
                gsap.to('#signup',{
                    y:'-400',
                    duration:1,
                    opacity:0
                })
                gsap.to('#login',{
                    y:'-40',
                    duration:1,
                    opacity:1
                })
            }
        })
        
    }
    


  return (
    <div className='w-full relative flex flex-col lg:flex-row  justify-between h-screen bg-gray-900 bg-[url(https://i.postimg.cc/RFqSM2rc/bg.jpg)] bg-no-repeat bg-cover bg-center overflow-hidden '>
        {/* signup */}
            <div id='signup' className={`flex w-full justify-center opacity-0 `}>
            <div className='absolute  lg:left-[10%] lg:bottom-[10%]  border-1 border-[rgba(255,255,255,0.2)] rounded-[20px] backdrop-blur-xl px-12 py-10'>
           <form onSubmit={login} className='flex h-120 flex-col justify-between'>
                <div>
                    <h1 className='text-bold uppercase tracking-wide text-4xl text-white text-center font-bold'>Sign Up</h1>
                </div>
                <div className='flex flex-col gap-7'>
                    <label className='w-75 px-5 py-3.5 flex justify-between items-center border-1 border-[rgba(255,255,255,0.2)]  rounded-[30px]'>
                        <input 
                            type="text"
                            placeholder='Enter Username'
                            className='text-white placeholder:text-white outline-none border-none'
                            />
                        <FaUser className='text-white text-sm' />
                    </label>
                    <label className='w-75 px-5 py-3.5 flex justify-between items-center border-1 border-[rgba(255,255,255,0.2)]  rounded-[30px]'>
                        <input 
                            type="text"
                            placeholder='Enter Email'
                            className='text-white placeholder:text-white outline-none border-none'
                            />
                        <FaUser className='text-white text-sm' />
                    </label>
                    <label className='w-full px-5 py-3.5 flex justify-between items-center border-1 border-[rgba(255,255,255,0.2)] rounded-[30px]'>
                        <input 
                            type="password" 
                            placeholder='Enter your password'
                            className='text-white placeholder:text-white outline-none border-none'

                        />
                        <FaEyeSlash className='text-white' />
                    </label>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex gap-1 items-center text-white tracking-wide font-[400]'>
                        <input 
                            type="checkbox" 
                            className='text-[16px]'
                        />
                        <span className='text-[16px]'>Remember Me</span>
                    </div>
                    <div>
                        <span><a onClick={showSignupPage} className='text-white decoration-none text-[16px]' href="#">Forgot Password?</a></span>
                    </div>
                </div>
                <div>
                    <button className='w-full bg-white text-black py-2.5 px-5 rounded-[50px] font-bold' type='submit'>Sign Up</button>
                </div>
                <div></div>
           </form>
        </div>
            </div>
        {/* big balls */}
        <div id='bigBalls' className='w-full h-[90%] top-[-60%] md:top-[-50%] lg:w-[180%]  lg:h-[200%] absolute lg:top-[-100%] lg:left-[-125%]  bg-white rounded-full'>

        </div>
        {/* login */}
            <div id='login' className={`flex w-full justify-center`}>
            <div className='absolute mx-auto bottom-[5%] lg:right-[10%] lg:bottom-[10%]  border-1 border-[rgba(255,255,255,0.2)] rounded-[20px] backdrop-blur-xl px-12 py-10'>
           <form onSubmit={login} className='flex h-100 flex-col justify-between'>
                <div>
                    <h1 className='text-bold uppercase tracking-wide text-4xl text-white text-center font-bold'>Login</h1>
                </div>
                <div className='flex flex-col gap-7'>
                    <label className='w-75 px-5 py-3.5 flex justify-between items-center border-1 border-[rgba(255,255,255,0.2)]  rounded-[30px]'>
                        <input 
                            type="text"
                            placeholder='Enter Username'
                            className='text-white placeholder:text-white outline-none border-none'
                            />
                        <FaUser className='text-white text-sm' />
                    </label>
                    <label className='w-full px-5 py-3.5 flex justify-between items-center border-1 border-[rgba(255,255,255,0.2)] rounded-[30px]'>
                        <input 
                            type="password" 
                            placeholder='Enter your password'
                            className='text-white placeholder:text-white outline-none border-none'

                        />
                        <FaEyeSlash className='text-white' />
                    </label>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex gap-1 items-center text-white tracking-wide font-[400]'>
                        <input 
                            type="checkbox" 
                            className='text-[16px]'
                        />
                        <span className='text-[16px]'>Remember Me</span>
                    </div>
                    <div>
                        <span><a  onClick={showSignupPage} className='text-white decoration-none text-[16px]' href="#">Forgot Password?</a></span>
                    </div>
                </div>
                <div>
                    <button className='w-full bg-white text-black py-2.5 px-5 rounded-[50px] font-bold' type='submit'>Login</button>
                </div>
                <div></div>
           </form>
        </div>
        </div>
    </div>
  )
}

export default Signup
