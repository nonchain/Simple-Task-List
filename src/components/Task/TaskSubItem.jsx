import React from 'react'
import Checkbox from '../UI/Checkbox'

const TaskSubItem = ({title, date}) => {
   const convertDate = new Date(date)
  return (
    <div className='px-3 py-2 w-full bg-light-300 flex items-center justify-between rounded'>
      <h3 className='font-medium text-base'>{title}</h3>
      <h3 className='font-medium text-base'>{convertDate.toLocaleDateString()}</h3>
      <Checkbox />
    </div>
  )
}

export default TaskSubItem