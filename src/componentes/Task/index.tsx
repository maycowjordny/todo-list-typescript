import { useState, ChangeEvent } from "react"
import styles from "./index.module.css"
import { Trash } from "@phosphor-icons/react"

export function Task(props: any,) {

    const [checkboxState, setCheckboxState] = useState(props.data.completed)

    const handleCheckBoxChange = (event: ChangeEvent<HTMLInputElement>, id: number) => {
        const checked = event.target.checked

        setCheckboxState(checked)
        props.checkboxChange(id, checked)
    }

    const handleDeleteTask = (id: number) => {
        props.deleteTask(id)
    }

    return (
        <div className={styles.taskWrapper}>
            <label className={styles.container}>
                <input type="checkbox"
                    checked={checkboxState}
                    onChange={(e) => handleCheckBoxChange(e, props.data.id)}
                />
                <span className={styles.checkmark}></span>
                <p>{props.data.description}</p>
            </label>
            <button className={styles.button} onClick={() => handleDeleteTask(props.data.id)}>
                <Trash size={16} weight="thin" />
            </button>
        </div>
    )
}