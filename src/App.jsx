import React from 'react'
import TaskList from './components/Task/TaskList'
import Card from './components/UI/Card'

const App = () => {
  return (
    <div className='px-4 py-8 min-h-screen bg-background flex flex-col'>
      <Card className='bg-[#eaf6f6]' title='All Data'>
        <TaskList />
      </Card>
    </div>
  )
}

export default App