import styles from "./index.module.css"

import logo from "../../assets/rocket.svg"
export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={logo} alt="logo todoList" />
                <h2><span>to</span><span>do</span></h2>
            </header>
        </>
    )
}