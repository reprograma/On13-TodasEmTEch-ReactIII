import { useState } from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import './list.styles.css'

const List = () => {
  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    const task = {
      id: Math.random(),
      title: newTask,
      isComplete: false
    }

    if(task.title === '') {
      return
    }

    setList([...list, task])
    setNewTask('')
  }

  function handleRemoveTask(id) {
    const tasksFiltered = list.filter(task => task.id !== id)
    setList(tasksFiltered)
  }

  return(
    <>
     <section className='list'>
      <header>
        <h2>Tarefas a fazer:</h2>
        <div className='input-container'>
          <input 
            type='text'
            placeholder='Adicionar nova tarefa'
            onChange={(e) => {setNewTask(e.target.value)}}
            value={newTask}
          />
          <button 
            type='submit' 
            className='add-task' 
            data-testid='add-task'
            onClick={handleCreateNewTask}
          >
           <FiPlus size={16} color='#fff'/> 
          </button>
        </div>
      </header>

      <main>
        <ul>
          {list.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    checked={task.isComplete}
                    onClick={() => {}}
                    readOnly
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>
              <button 
                className="remove-task"
                type="button" 
                data-testid="remove-task" 
                onClick={() => handleRemoveTask(task.id)}
              >
                <FiTrash2 size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>

    </section> 
    </>
  )
}

export default List