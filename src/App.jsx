import React, { useState, useEffect } from 'react'
import TaskList from './components/Task/TaskList'
import Card from './components/UI/Card'
import ButtonSmall from './components/UI/ButtonSmall'
import { useSelector } from 'react-redux';
import { selectSelectionTasks } from './redux/features/taskSlice';

const App = () => {
  const [disableButton, setDisableButton] = useState(true);
  const selectedTask = useSelector(selectSelectionTasks);
  console.log(selectedTask)

  useEffect(() => {

    selectedTask.length > 0 ? setDisableButton(false) : setDisableButton(true);

  }, [selectedTask.length]);

  return (
    <div className='px-4 py-8 min-h-screen bg-background flex flex-col gap-8'>
      <Card className='bg-[#eaf6f6]' title='' buttonText=''>
        <div className="mb-8 flex items-center justify-between">
          <h2 className='text-title font-medium text-3xl'>All Data</h2>
          <ButtonSmall text='Add' disable={ disableButton } />
        </div>
        <TaskList />
      </Card>
      <Card className='bg-[#eaf6f6]' title='' buttonText=''>
        <div className="mb-8 flex items-center justify-between">
          <h2 className='text-title font-medium text-3xl'>Selected Data</h2>
          <ButtonSmall text='Delete' disable={true} />
        </div>
      </Card>
    </div>
  )
}

export default App