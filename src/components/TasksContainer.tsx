import Task from "./Task"

function TasksContainer() {
  return (
    <div className=" mt-10">
        <div className=" text-zinc-600 mb-3">
            Complete 10 / 20
        </div>
      <Task/>
    </div>
  )
}

export default TasksContainer
