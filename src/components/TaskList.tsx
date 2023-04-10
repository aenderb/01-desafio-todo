import styles from './TaskList.module.css'
import { Trash } from 'phosphor-react'

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>
                <div className={styles.round}>
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox"></label>
                </div>
              </td>
              <td className={styles.taskTd}>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </td>
              <td className={styles.trash}>
                <Trash />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.round}>
                  <input type="checkbox" id="checkbox1" />
                  <label htmlFor="checkbox1"></label>
                </div>
              </td>
              <td className={styles.taskTd}>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </td>
              <td className={styles.trash}>
                <Trash />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.round}>
                  <input type="checkbox" id="checkbox2" />
                  <label htmlFor="checkbox2"></label>
                </div>
              </td>
              <td className={styles.taskTd}>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </td>
              <td className={styles.trash}>
                <Trash />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.round}>
                  <input type="checkbox" id="checkbox3" />
                  <label htmlFor="checkbox3"></label>
                </div>
              </td>
              <td className={styles.taskTd}>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </td>
              <td className={styles.trash}>
                <Trash />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.round}>
                  <input type="checkbox" id="checkbox4" />
                  <label htmlFor="checkbox4"></label>
                </div>
              </td>
              <td className={styles.taskTd}>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </td>
              <td className={styles.trash}>
                <Trash />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
