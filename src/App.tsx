
import "./global.css"
import { Header } from "./componentes/Header"
import { BsPlusCircle } from "react-icons/bs";
import styles from "./app.module.css"

export function App() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.inputWrapper}>
          <input type="text" />
          <button>Criar <BsPlusCircle size={16} /></button>
        </div>
        <div className={styles.tasksWrapper}>
          <div className={styles.completedTasks}>
            <h2>Tarefas Concluídas</h2>
            <span>5</span>
          </div>
          <div className={styles.createTasks}>
            <h2>Tarefas Concluídas</h2>
            <span>2 de 5</span>
          </div>
        </div>
      </main>


    </>

  )
}


