import styles from './TaskForm.module.css'
import { PlusCircle } from 'phosphor-react'
import { TaskListStatus } from './TaskListStatus'
export function TaskForm() {
  return (
    <div>
      <form /* onSubmit={handleCreateNewComment} */>
        <div className={styles.taskForm}>
          <input
            name="task"
            placeholder="Adicione uma nova tarefa"
            // value={newCommentText}
            // onChange={handleNewCommentChange}
            // onInvalid={handleNewCommentInvalid}
            // required
          />

          <button type="submit">
            <PlusCircle />
            Criar
          </button>
        </div>
      </form>
      <TaskListStatus />
    </div>
  )
}
