import { Trash } from "phosphor-react";

export interface TaskProps {
  taskText: string;
  onDeleteTask: (taskText: string) => void;
}


export function Task({taskText, onDeleteTask}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(taskText)
  }

  return(
    <div className='flex mt-3 justify-between p-4 rounded-lg items-center gap-4 border border-gray-400 bg-gray-500 '>
      <label className='flex gap-3'>
        <input 
          id='checkInput'
          type='checkbox'
          className='bg-transparent peer border-2 border-blue  checked:text-purple-dark checked:hover:text-purple w-6 h-6 rounded-full hover:border-blue-dark hover:bg-blue-dark hover:bg-opacity-20 focus:ring-0' 
        />
        <p className='text-md text-gray-100 peer-checked:line-through peer-checked:text-gray-300'>{taskText}</p>
      </label>

      <button className='p-1 text-gray-300 hover:text-danger' onClick={handleDeleteTask}>
        <Trash weight='bold' size={16} />
      </button>
    </div>
  )
}