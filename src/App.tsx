import './App.css'
import AddTask from './components/AddTask'
import TasksContainer from './components/TasksContainer'

function App() {

  return (
    <div className=' h-screen w-screen bg-zinc-950 font-primary'>
      <div className=' mx-auto max-w-xl pt-10'>
        <AddTask/>
        <TasksContainer/>
      </div>
    </div>
  )
}

export default App
