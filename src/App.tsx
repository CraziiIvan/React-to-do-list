import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import TasksContainer from './components/TasksContainer'
import { ITask } from './types'

function App() {

  const [ list, setList ] = useState<ITask[]>([])
  
  return (
    <div className=' h-screen w-screen bg-gradient-to-br from-zinc-950 via-gray-950 to-zinc-950 font-primary'>
      <div className=' mx-auto max-w-xl pt-10'>
        <AddTask list={list} setList={setList}/>
        <TasksContainer list={list} setList={setList}/>
      </div>
    </div>
  )
}

export default App
