import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { TaskForm } from './components/TaskForm'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <main>
          <TaskForm />
        </main>
      </div>
    </div>
  )
}
