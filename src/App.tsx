
import "./global.css"
import logo from "./assets/rocket.svg"
import styles from "./app.module.css"

export function App() {

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo todoList" />
      <h2><span>to</span><span>do</span></h2>
    </header>
  )
}


