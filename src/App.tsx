
import "./global.css"
import { Header } from "./componentes/Header"
import { BsPlusCircle } from "react-icons/bs";
import styles from "./app.module.css"
import { Task } from "./componentes/Task";
import noTasksSvg from "./assets/noTasksIcon.svg"
export function App() {

  const Tasks = true
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
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
        {
          Tasks ?
            <>
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
            </>
            :
            <div className={styles.noTasksWrapper}>
              <img src={noTasksSvg} alt="icone informando que não tem tarefas a fazer" id={styles.svgTask} />
              <strong> Você ainda não tem tarefas cadastradas</strong>
              <p>  Crie tarefas e organize seus itens a fazer</p>
            </div>
        }

      </main>
    </>

  )
}


