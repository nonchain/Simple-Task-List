import React, { useState } from 'react';
import Checkbox from '../UI/Checkbox';
import TaskSubItem from './TaskSubItem';

const TaskMainItem = ({ category, tasks }) => {
   const [visibility, setVisibility] = useState(false);
   const subTasks = tasks.filter(task => task.id === category);

   const showTaskListHandler = () => {
      console.log(`${category} clicked`)
      setVisibility(!visibility)
   }

   return (
      <div className="flex flex-col gap-2">
         <div className='px-4 py-3 w-full bg-primary flex items-center justify-between rounded'>
            <div className='w-8 h-8 flex items-center justify-center rounded-full bg-title'>
               <span className='text-white text-sm font-semibold'>{category}</span>
            </div>
            <h3 className='font-medium text-base'>quantity: {subTasks.length}</h3>
            <div className='flex items-center gap-2'>
               <Checkbox />
               <button onClick={showTaskListHandler}>
                  <i className={`ri-arrow-${visibility ? 'up' : 'down'}-s-line text-xl cursor-pointer`} ></i>
               </button>
            </div>
         </div>
         {
            visibility && <ul className='flex flex-col'>
               {
                  subTasks?.map(item => (
                     <li key={item.uniqueId} className='my-1'>
                        <TaskSubItem title={item.title} date={item.created} task={item}/>
                     </li>
                  ))
               }
            </ul>
         }
      </div>
   )
}

export default TaskMainItem