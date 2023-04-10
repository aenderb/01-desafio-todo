import { TaskList } from './TaskList'
import { TaskListEmpty } from './TaskListEmpty'
import styles from './TaskListStatus.module.css'

export function TaskListStatus() {
  const taskCounter = 5

  if (taskCounter !== 0) {
    return (
      <div>
        <div className={styles.taskListStatus}>
          <header>
            <div className={styles.taskC}>
              <span className={styles.taskCreated}>Tarefas Criadas</span>
              <span className={styles.taskCounter}>{taskCounter}</span>
            </div>
            <div className={styles.taskD}>
              <span className={styles.taskDone}>Tarefas Concluídas</span>
              <span className={styles.taskCounterDone}>2 de 5</span>
            </div>
          </header>
        </div>
        <TaskList />
      </div>
    )
  } else {
    return (
      <div>
        <div className={styles.taskListStatus}>
          <header>
            <div className={styles.taskC}>
              <span className={styles.taskCreated}>Tarefas Criadas</span>
              <span className={styles.taskCounter}>{taskCounter}</span>
            </div>
            <div className={styles.taskD}>
              <span className={styles.taskDone}>Tarefas Concluídas</span>
              <span className={styles.taskCounterDone}>2 de 5</span>
            </div>
          </header>
        </div>
        <TaskListEmpty />
      </div>
    )
  }
}
