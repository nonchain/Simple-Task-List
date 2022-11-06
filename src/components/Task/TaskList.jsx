import React from 'react';
import TaskMainItem from './TaskMainItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCategories, selectAllTasks } from '../../redux/features/taskSlice';




const TaskList = () => {
   const categories = useSelector(selectAllCategories);
   const tasks = useSelector(selectAllTasks);

   return (
      <div className='flex flex-col gap-4'>
         {
            categories.map(category => (
               <TaskMainItem key={category.id} category={category.name} tasks={tasks}/>
            ))
         }
      </div>
   )
}

export default TaskList