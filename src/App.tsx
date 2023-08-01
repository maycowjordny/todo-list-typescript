import "./global.css";
import { Header } from "./componentes/Header";
import { BsPlusCircle } from "react-icons/bs";
import styles from "./app.module.css";
import { Task } from "./componentes/Task";
import noTasksSvg from "./assets/noTasksIcon.svg";
import { useEffect, useState } from "react";

export function App() {

  interface TaskProps {
    completed: boolean
    id: number
    description: string
  }

  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [description, setDescription] = useState("")

  useEffect(() => {
    function fetchTasks() {
      const response = JSON.parse(localStorage.getItem("@tasks")!)
      if (response) {
        setTasks(response.tasks)
      }
    }
    fetchTasks()
  }, [])

  function handleCreateTask() {
    const task = {
      description: description,
      id: Date.now(),
      completed: false
    }
    setTasks((oldTasks) => [...oldTasks, task])
    localStorage.setItem("@tasks", JSON.stringify({ tasks: [...tasks, task] }));
    setDescription("")
  }

  const checkboxChange = (id: number, checked: boolean) => {

    const updatedTasks = tasks.map((task: any) => {

      if (task.id === id) {
        return { ...task, completed: checked }
      }
      return task
    })
    setTasks(updatedTasks);
    localStorage.setItem("@tasks", JSON.stringify({ tasks: updatedTasks }));
  };

  const deleteTask = (id: number) => {
    const deleteTasks = tasks.filter((task: any) => task.id !== id)
    localStorage.setItem("@tasks", JSON.stringify({ tasks: deleteTasks }));

    setTasks(deleteTasks);
    alert("Tarefa excluida com sucesso!")
  }

  const taskCompleted = tasks.filter(task => task.completed).length

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
            <span>{taskCompleted} de {tasks.length}</span>
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
                    tasks={tasks}
                    deleteTask={deleteTask}
                    checkboxChange={checkboxChange}
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


