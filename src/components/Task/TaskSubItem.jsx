import React, {useState} from 'react'
import Checkbox from '../UI/Checkbox'
import { taskAdd } from '../../redux/features/taskSlice';
import { useDispatch } from 'react-redux';

const TaskSubItem = ({ title, date, task, checkedAll }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const convertDate = new Date(date);

  const onChangeCheckedHandler = () => {
    setChecked(!checked);
    !checked && dispatch(taskAdd(task));
  }
  return (
    <div className='px-3 py-2 w-full bg-light-300 flex items-center justify-between rounded'>
      <h3 className='font-medium text-base'>{title}</h3>
      <h3 className='font-medium text-base'>{convertDate.toLocaleDateString()}</h3>
      <Checkbox checked={checkedAll || checked} onChange={onChangeCheckedHandler} />
    </div>
  )
}

export default TaskSubItem