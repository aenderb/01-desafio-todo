import styles from './TaskForm.module.css'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TaskList } from './TaskList'
import { TaskListEmpty } from './TaskListEmpty'

export interface ITask {
  id: string
  title: string
  isCompleted: boolean
}

export function TaskForm() {
  // const [tasks, setTasks] = useState<ITask[]>([])
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: uuidv4(),
      title: 'Task 1',
      isCompleted: true,
    },
    {
      id: uuidv4(),
      title: 'Task 2',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: 'Task 3',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: 'Task 4',
      isCompleted: false,
    },
  ])

  const [newTask, setNewTask] = useState('')

  const taskCounter = tasks.length
  const taskCompleted = tasks.filter((task) => task.isCompleted).length

  function handleCreateNewTask() {
    event.preventDefault()
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: newTask,
        isCompleted: false,
      },
    ])

    setNewTask('')
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function deleteTask(taskToDelete: String) {
    const tasksWithoutdeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete
    })

    setTasks(tasksWithoutdeletedOne)
  }

  function setCompletedTask(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasks(newTasks)
  }

  return (
    <div>
      <div>
        <form onSubmit={handleCreateNewTask}>
          <div className={styles.taskForm}>
            <input
              name="task"
              placeholder="Adicione uma nova tarefa"
              onChange={handleNewTaskChange}
              value={newTask}
              required
            />

            <button type="submit">
              <PlusCircle />
              Criar
            </button>
          </div>
        </form>
      </div>

      <div>
        <div className={styles.taskListStatus}>
          <header>
            <div className={styles.taskC}>
              <span className={styles.taskCreated}>Tarefas Criadas</span>
              <span className={styles.taskCounter}>{taskCounter}</span>
            </div>
            <div className={styles.taskD}>
              <span className={styles.taskDone}>Concluídas</span>
              <span className={styles.taskCounterDone}>
                {taskCompleted} de {taskCounter}
              </span>
            </div>
          </header>
        </div>

        {taskCounter !== 0 ? (
          <div className={styles.taskList}>
            {tasks.map((task) => {
              return (
                <TaskList
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask}
                  onCompletedTask={setCompletedTask}
                />
              )
            })}
          </div>
        ) : (
          <div>
            <TaskListEmpty />
          </div>
        )}
      </div>
    </div>
  )
}
