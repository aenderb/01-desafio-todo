import styles from './TaskListEmpty.module.css'
import taskImg from '../assets/taskImg.png'

export function TaskListEmpty() {
  return (
    <div className={styles.taskList}>
      <div className={styles.taskListEmpty}>
        <div className={styles.taskListEmptyImg}>
          <img src={taskImg} alt="" width="56" height="56" />
        </div>
        <div className={styles.textoTaskListEmpty}>
          <p className={styles.textoTaskListEmptyBold}>
            Você ainda não tem tarefas cadastradas
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
}
