import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Task() {
  const [done, setDone] = useState(false);

  return (
    <div className=" bg-zinc-900 border border-zinc-800 h-16 rounded-lg px-4 flex items-center">
      <button
        onClick={() => setDone(!done)}
        className={` flex items-center justify-center h-6 w-6 rounded-full border-2 text-white active:scale-90 transition mr-5 ${ done? "border-green-500" : "border-zinc-500"}`}
      >
        {done ? <FontAwesomeIcon icon={faCheck} size="xs" /> : ""}
      </button>
      <h6 className={` text-white grow ${ done? "line-through" : ""} decoration-1`}>
        To get a girlFriend
      </h6>
      <button className=" active:scale-75 transition">
      <FontAwesomeIcon icon={faTrashAlt} size="lg" className=" text-zinc-500"/>
      </button>
    </div>
  );
}

export default Task;
