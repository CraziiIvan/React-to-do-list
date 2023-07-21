function AddTask() {
  return (
    <div className=" flex">
      <input className=" grow py-2.5 text-white px-3 rounded-lg bg-zinc-900 border-2 border-zinc-800 outline-none mr-3 focus:border-indigo-700 " placeholder="Enter your task"/>
      <button className=" text-zinc-400 px-4 rounded-lg bg-indigo-900 hover:bg-indigo-800 hover:text-zinc-200 transition active:scale-95">Add task  </button>
    </div>
  )
}

export default AddTask
