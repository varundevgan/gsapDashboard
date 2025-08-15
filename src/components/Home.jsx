import React, { useState } from 'react'
import { motion } from 'motion/react' 
import { IoIosArrowRoundUp } from "react-icons/io";
import { BiTransferAlt } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { BsBank2 } from "react-icons/bs";
import { IoIosArrowRoundDown } from "react-icons/io";




const Home = () => {

  const text = 'Good Morning User...!'
  const [selectedDiv, setSelectedDiv] = useState(0);

  const wallets = [
    {
      country:'NGN',
      flag:'',
      amount:'₦94,060.00',
      limit:'Limit is ₦100k a month',
      status:'Active'
    },
    {
      country:'GBP',
      flag:'',
      amount:'£72,122.40',
      limit:'Limit is £10k a month',
      status:'Active'
    },
    {
      country:'EUR',
      flag:'',
      amount:'€32,883.04',
      limit:'Limit is €8k a month',
      status:'Inactive'
    },
  ]

  const expenses = [
    {
      label:'Total earnings',
      icons:<FaMoneyBillTrendUp/>,
      amount:'₦850,300',
      profit_loss:'7%',
      month:'This month',
      profit:true
    },
    {
      label:'Total spending',
      icons:<MdAttachMoney/>,
      amount:'₦80,070',
      profit_loss:'5%',
      month:'This month',
      profit:false
    },
    {
      label:'Total income',
      icons:<HiOutlineCircleStack/>,
      amount:'₦250,370',
      profit_loss:'7%',
      month:'This month',
      profit:true
    },
    {
      label:'Total revenue',
      icons:<BsBank2/>,
      amount:'₦750,354',
      profit_loss:'5%',
      month:'This month',
      profit:true
    }
  ]

  const chart_amount = [
    {
      amount : '50k',
    },
    {
      amount : '40k'
    },
    {
      amount : '30k'
    },
    {
      amount : '20k'
    },
    {
      amount : '10k'
    },
    {
      amount : '0'
    }
   
  ]

  const chart_month = ['Jan','Feb','Mar','Apr','May','Jun','Jul']

  const months = [
    {
      month: 'Jan',
      orange: '10',
      black:'40'
    },
    {
      month: 'Feb',
      orange: '20',
      black:'20'
    },
    {
      month: 'Mar',
      orange: '20',
      black:'10'
    },
    {
      month: 'Apr',
      orange: '20',
      black:'10'
    },
    {
      month: 'May',
      orange: '10',
      black:'20'
    },
    {
      month: 'June',
      orange: '40',
      black:'10'
    },
    {
      month: 'July',
      orange: '10',
      black:'40'
    }
  ]

  
  return (
    <div className='flex-1 h-full text-black px-4 py-6 overflow-y-auto bg-[#f6f6f6] '>
      <div>
        <motion.h1
        transition={{delay:1, delayChildren:0.5}}
        className='text-4xl inline text-gray-900 tracking-wider font-[500] relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-black after:transition-all after:duration-400 after:ease-in-out hover:after:w-full'>
          {text.split("").map((each,index)=>(
            <motion.span
              key={index}
              initial={{y:-40, opacity:0}}
              animate={{y:100, opacity:1}}
              transition={{ease:'easeOut', delay:index * 0.1}}

            >
              {each}
            </motion.span>
          ))}
      </motion.h1>
      <p className='uppercase tracking-wider mt-1'>Stay on top of your tasks, monitor progress, and track status.</p>
      </div>


      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10'>
        <div className='bg-white flex flex-col max-h-90 rounded-2xl p-4'>
          {/* head */}
           <div className='w-full flex items-start justify-between'>
              <div className=''>
                <p className='text-[15px] text-gray-400'>Total Balance</p>
                <h2 className='font-[500] text-2xl mt-2 tracking-wide'>₦1,230,045.00</h2>
                <p className='text-[15px] flex items-center gap-1 mt-1 text-gray-400 '><span className='bg-[#f0fdf4] flex items-center px-1 text-[#51df85] text-[12px] rounded-4xl'><IoIosArrowRoundUp />25%</span>than last month</p>
              </div>
              <div>
                <p className='px-4 inline py-1 border border-gray-300 rounded-sm text-sm'>NGN</p>
              </div>
           </div>
          {/* transfer */}
           <div className='flex items-center gap-3 mt-3'>
            <button
              className='w-full bg-black text-white rounded-4xl flex items-center gap-4 justify-center py-2 truncate'
            >
              <BiTransferAlt />
              Transfer
            </button>
            <button
              className='w-full bg-[#f4f4f5] text-gray-700 rounded-4xl flex items-center gap-4 justify-center py-2 truncate'
            >
              <BiTransferAlt />
              Request
            </button>
           </div>
          {/* wallet */}
           <div className='w-full bg-[#f4f4f5] p-3 rounded-2xl mt-4 overflow-y-scroll'>
              <p>Wallets | Total 6 Wallets</p>
              <div className='flex flex-wrap gap-2 mt-3 rounded-2xl '>
              {wallets && wallets.map((wallet)=>(
                <div key={wallet.country} className='bg-white rounded-2xl flex-1 min-w-[140px] px-2 py-1'>
                  <div className='flex justify-between items-center '>
                    <p>{wallet.country}</p>
                    <div className='flex flex-col items-center gap-[1px] cursor-pointer px-2'>
                      <span className='w-[3px] h-[3px] bg-gray-800 rounded-full'></span>
                      <span className='w-[3px] h-[3px] bg-gray-800 rounded-full'></span>
                      <span className='w-[3px] h-[3px] bg-gray-800 rounded-full'></span>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <h2 className='text-xl font-[500] text-black tracking-wide'>{wallet.amount}</h2>
                    <p className='text-[12px] text-gray-400'>{wallet.limit}</p>
                    <span className={`${wallet.status === 'Active' ? 'text-[#72de80]' : 'text-[#f05252]'} mt-1`}>{wallet.status}</span>
                  </div>
                </div>
              ))}
              </div>
           </div>
        </div>
        <div className='bg-white max-h-90 rounded-4xl'>
          <div className='grid-cols-1 lg:grid-cols-2 h-full p-4 flex flex-wrap gap-2 overflow-y-auto overflow-x-hidden '>
              {expenses && expenses.map((expense,index)=>(
                <div
                  onClick={()=>setSelectedDiv(index)}
                  key={index} className={`relative ${selectedDiv === index ? ' bg-[#ff6a3d] text-white' : 'bg-[#fafafa] text-gray-800'} flex-1 h-40 min-w-50  flex flex-col justify-between rounded-2xl px-3 pt-5 pb-2`}>
                  <div className='flex justify-between items-center'>
                    <h4>{expense.label}</h4>
                      <span className={`p-2 rounded-full ${selectedDiv === index ? 'bg-white/20' : 'bg-[#efeff2]'}`}>{expense.icons}</span>
                  </div>
                  <div className='mb-2'>
                    <h2 className='text-3xl tracking-wide mb-2'>{expense.amount}</h2>
                    <p className={`flex items-center gap-1 text-gray-500 text-sm tracking-wide ${selectedDiv === index ? 'text-white/80' : ''}`}><span className={`flex items-center font-[500] ${selectedDiv === index ? 'text-white  bg-white/20' : (expense.profit ? 'bg-[#dcfce7] text-[#4ade80]' : 'bg-[#fee2e2] text-[#ef4444]')} $ px-2 text-xs  rounded-4xl`}>{expense.profit ? <IoIosArrowRoundUp className='w-5 h-5' /> : <IoIosArrowRoundDown className='w-5 h-5'/>}{expense.profit_loss}</span>{expense.month}</p>
                  </div>
                  <div className='absolute left-[50%] top-0 w-[100%] h-[100%] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_70%)] -translate-x-1/2'></div>
                </div>

              ))
              }           
          </div>
        </div>
        <div className='bg-white max-h-90 rounded-4xl'>
          <div className='p-4 flex flex-col h-full gap-3 '>
              <div>
                <h3 className='text-xl text-black font-[500]'>Total Income</h3>
                <p className='text-gray-500 text-[13px]'>View your income in a certain period of time</p>
              </div>
              <div className='h-full w-full flex flex-col bg-[#f4f4f5] rounded-2xl p-3'>
                <div className='flex items-center justify-between w-full'>
                  <h2 className='text-lg font-[500]'>Profit and Loss</h2>
                  <div className='flex items-center gap-2'>
                    <span className='text-sm font-[500] flex items-center gap-1'><span className='w-3 h-3 bg-[#ee5229] rounded-full'></span>Profit</span>
                    <span className='text-sm font-[500] flex items-center gap-1'><span className='w-3 h-3 bg-[#18181b] rounded-full'></span>Loss</span>
                  </div>
                </div>
                <div className='mt-2 flex h-full  '>
                  <div className='flex flex-col ml-3 pb-2 items-center justify-between'>
                    {chart_amount && chart_amount.map((amount,index)=>(
                      <span key={index} className='text-gray-500 text-[13px]'>
                        {amount.amount}
                      </span>
                    ))}
                  </div>
                  <div className='w-full flex pl-4 h-full items-end gap-3 overflow-x-scroll '>
                    {months.map((month,index)=>(
                      <div key={index} className='flex flex-col w-full items-center gap-1'>
                        <div className={`w-12 h-${month.orange} hover:scale-[1.1] transition-all duration-300 ease-in-out bg-orange-400 rounded-lg`}></div>
                        <div className={`w-12 h-${month.black} hover:scale-[1.1] transition-all duration-300 ease-in-out bg-black rounded-lg`}></div>
                        <div>{month.month}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
