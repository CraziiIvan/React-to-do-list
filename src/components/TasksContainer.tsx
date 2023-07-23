import { useEffect, useState } from "react"
import { IListProps, ITask } from "../types"
import Task from "./Task"

function TasksContainer({list, setList}: IListProps) {

  const [ doneCount, setDoneCount ] = useState<number>(0)

  useEffect(() => {
    const savedDoneCount = localStorage.getItem("doneCount")
    if (savedDoneCount) setDoneCount(parseInt(savedDoneCount))
  }, [])

  return (
    <div className=" mt-10">
        <div className=" text-zinc-500 mb-5">
            Complete {doneCount} of {list.length}
        </div>
        {
          list.map((task: ITask) => {
            return <Task key={task.id} task={task} list={list} setList={setList} setDoneCount={setDoneCount}/>
          })
        }
    </div>
  )
}

export default TasksContainer
