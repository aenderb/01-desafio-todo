import styles from './TaskList.module.css'
import { Trash } from 'phosphor-react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { ITask } from './TaskForm'

interface TaskListProps {
  task: ITask
  onDeleteTask: (taskId: string) => void
  onCompletedTask: (taskId: string) => void
}

export function TaskList({
  task,
  onDeleteTask,
  onCompletedTask,
}: TaskListProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  function handleCompletedTask() {
    onCompletedTask(task.id)
  }

  return (
    <div key={task.id} className={styles.table}>
      <button className={styles.checkContainer} onClick={handleCompletedTask}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.title}
      </p>

      <button
        className={styles.trash}
        onClick={handleDeleteTask}
        title="Deletar Tarefa"
      >
        <Trash size={20} />
      </button>
    </div>
  )
}
