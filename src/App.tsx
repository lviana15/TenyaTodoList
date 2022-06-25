import { ClipboardText, PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";


function App() {
  const [tasks, setTasks] = useState([
    'Adicione uma tarefa'
  ])
  const [task, setTask] = useState('')
  
  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
    console.log(task)
  }
  
  function handleSubmit(event: FormEvent) {
    event?.preventDefault()
    setTasks([...tasks, task])
    setTask('')
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
   })

    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <>
      <Header />
      <main className='w-[736px] mx-auto flex flex-col flex-1 -mt-7'>
        <form onSubmit={handleSubmit} className='flex w-full h-14 gap-2'>
          <input 
            type='text' 
            className='flex-1 bg-gray-500 border border-gray-700 placeholder:text-gray-300 p-4 rounded-lg resize-none outline-none focus:border-purple-dark focus:text-gray-100' 
            placeholder='Adicione uma nova tarefa' 
            value={task}
            onChange={handleTextChange}
          />

          <button className='w-24 flex  items-center justify-center gap-2 bg-blue-dark rounded-lg text-gray-100 text-sm font-bold' type='submit'>
            Criar
            <PlusCircle size={16} weight='bold' />
          </button>
        </form>

        <div className='mt-16'>
          <div className='w-full mb-6 flex items-center justify-between'>
            <span className='flex gap-1 ml-2 text-blue text-sm font-bold'>
              Tarefas criadas
              <span className='bg-gray-400 text-gray-200 text-xs py-0.5 px-2 rounded-full'>
                5
              </span>
            </span>
            <span className='flex gap-1 mr-2 text-purple text-sm font-bold'>
              Concluidas
              <span className='bg-gray-400 text-gray-200 text-xs py-0.5 px-2 rounded-full'>
                2 de 5
              </span>
            </span>
          </div>
        
                   
        {tasks.length === 0 &&  
          <div className='flex flex-col items-center justify-center text-gray-300 p-12 border-t-2 border-gray-400 rounded-lg'>
            <ClipboardText className='text-gray-300' size={56}/>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>      
        } 
        
        {tasks.map(task => {
          return (
            <Task 
              key={task}
              taskText={task}
              onDeleteTask={deleteTask}
            />
          )
        })}

        </div>
      </main>
    </>
  )
}

export default App