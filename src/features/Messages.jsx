import React from 'react'
import { motion } from "motion/react"

const Messages = ({messages,width}) => {

  return (
    <motion.div 
        animate= {{
            width: width <= 768 ? messages ? '100%' : 0 : messages ? 420 : 0 ,
            transition: {duration: 1}
        }}
        className='h-[calc(100%_-_67px)] bg-gray-900 absolute right-0'>
      
    </motion.div>
  )
}

export default Messages
