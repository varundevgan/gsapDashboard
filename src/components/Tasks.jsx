import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { closestCorners, DndContext } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Tasks = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1, title : 'Add tests to homepage'
    },
    {
      id: 2, title : 'Fix div styling'
    },
    {
      id: 3, title : 'Learn how to center a div'
    },
  ])

  function handleDragEnd({active,over}){

    if(!over) return
    const taskId = active.id
    const newStatus = over.id
  }

  return (
    <div className='w-full h-full text-white'>
      <div className='w-full h-full p-4'>
        <div className='flex justify-between'>
          <h2 className='text-black text-4xl tracking-wide'>All Tasks</h2>
          <button className='px-4 py-1 rounded-2xl bg-blue-500 cursor-pointer'>Add Task <GoPlus className='mx-auto ' /></button>
        </div>
        <DndContext onDragEnd={handleDragEnd}>
          <div className='flex justify-between gap-10 mt-10 text-black'>
            <div className='flex w-full h-screen flex-col border-r border-gray-300'>
              <h2>Pending</h2>
              <div>
                <div className='w-full h-40 bg-black'></div>
              </div>
            </div>
            <div className='flex w-full h-screen flex-col border-r border-r-gray-300'>
              <h2>Done</h2>
              <div className='flex flex-col gap-5 items-center'>
                  {tasks.map((task)=>{
                    return(
                      <div key={task.id} className='bg-black h-20 w-[80%] rounded-lg text-white flex items-center justify-center'>{task.title}</div>
                    )
                  })}
              </div>
            </div>
            <div className='flex h-screen w-full flex-col'>
              <h2>Completed</h2>
              <div>
                <div className='w-full h-40 bg-black'></div>
              </div>
            </div>
          </div>
        </DndContext>
      </div>
    </div>
  )
}

export default Tasks
