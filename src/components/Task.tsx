import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ITaskProps } from "../types";

function Task({task, list, setList, setDoneCount}: ITaskProps) {

  const [done, setDone] = useState(task.done);

  const doneHandle = () => {
    setDone(!done)
    const newList = list.map( item => {
      if (item.id === task.id) {
        item.done = !item.done
      }
      return item
    })

    localStorage.setItem("savedTodolist", JSON.stringify(newList))

    const newDoneCount = list.filter(item => item.done === true).length
    setDoneCount(newDoneCount)
    localStorage.setItem("doneCount", JSON.stringify(newDoneCount))
  }

  // useEffect(() => {
  //   console.log(list);
    
  // }, [list])

  const deleteHandle = () => {
    if (!list) return
    const filterList = list.filter((item) => item.id !== task.id)
    setList(filterList)
    localStorage.setItem("savedTodolist", JSON.stringify(filterList))
    if(task.done) setDoneCount(prev => prev -1)
  }

  return (
    <div className=" bg-zinc-800 border border-zinc-800 h-16 rounded-lg px-4 flex items-center bg-opacity-50 mb-3">
      <button
        onClick={doneHandle}
        className={` flex items-center justify-center h-6 w-6 rounded-full border-2 text-white active:scale-90 transition mr-5 ${ done? "border-green-500" : "border-zinc-500"}`}
      >
        {done ? <FontAwesomeIcon icon={faCheck} size="xs" /> : ""}
      </button>
      <h6 className={` text-white grow ${ done? "line-through" : ""} decoration-1`}>
        {task.taskName}
      </h6>
      <button onClick={deleteHandle} className=" active:scale-75 transition">
      <FontAwesomeIcon icon={faTrashAlt} size="lg" className=" text-zinc-500"/>
      </button>
    </div>
  );
}

export default Task;
