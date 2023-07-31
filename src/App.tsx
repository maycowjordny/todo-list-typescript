
import "./global.css"
import { Header } from "./componentes/Header"
import { BsPlusCircle } from "react-icons/bs";
import styles from "./app.module.css"
import { Task } from "./componentes/Task";
import noTasksSvg from "./assets/noTasksIcon.svg"
import { useState } from "react";

export function App() {

  interface TaskProps {
    completed: boolean
    id: number
    description: string
  }

  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [description, setDescription] = useState("")

  console.log(tasks);

  function handleCreateTask() {
    const task = {
      description: description,
      id: Date.now(),
      completed: false
    }
    setTasks((oldTasks) => [...oldTasks, task])
    localStorage.setItem("@tasks", JSON.stringify(tasks))

  }



  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={description}
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={() => handleCreateTask()}>Criar <BsPlusCircle size={16} /></button>
        </div>
        <div className={styles.tasksWrapper}>
          <div className={styles.completedTasks}>
            <h2>Tarefas criadas</h2>
            <span>{tasks.length}</span>
          </div>
          <div className={styles.createTasks}>
            <h2>Tarefas Concluídas</h2>
            <span>2 de 5</span>
          </div>
        </div>
        {
          tasks.length ?
            <>
              {
                tasks.map(task => (
                  < Task
                    key={task.id}
                    data={task}
                  />
                ))
              }

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


