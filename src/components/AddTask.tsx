import React, { useEffect, useState } from "react";
import { IListProps, ITask } from "../types";
import { v4 } from "uuid"

function AddTask({ list, setList }: IListProps) {
  const [task, setTask] = useState<string>("");

  useEffect(()=> {
    const savedList = localStorage.getItem("savedTodolist")
    if (!savedList) return
    setList(JSON.parse(savedList))
    
  }, [])

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTaskHandle = (): void => {
    if (task === "") return;
    const newTask: ITask = { id: v4() , taskName: task, done: false }
    setList([...list, newTask ]);
    localStorage.setItem("savedTodolist", JSON.stringify([...list, newTask]));
    setTask("");
  };

  return (
    <div className=" flex">
      <input
        value={task}
        onChange={onChangeHandle}
        className=" grow py-2.5 text-white px-3 rounded-lg bg-zinc-800 border-2 border-zinc-800 outline-none mr-3 focus:border-indigo-700 bg-opacity-50 "
        placeholder="Enter your task"
      />
      <button
        onClick={addTaskHandle}
        className=" text-zinc-300 px-4 rounded-lg bg-indigo-700 shadow-sm hover:bg-indigo-600 hover:text-zinc-100 transition active:scale-95"
      >
        Add task{" "}
      </button>
    </div>
  );
}

export default AddTask;
