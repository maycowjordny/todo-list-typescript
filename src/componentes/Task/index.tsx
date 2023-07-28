import { useState } from "react"
import styles from "./index.module.css"
import { Trash } from "@phosphor-icons/react"

export function Task(props: any) {

    return (
        <div className={styles.taskWrapper}>
            <label className={styles.container}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
            </label>
            <div id={styles.description}>
                <p>{props.data.description}</p>
            </div>
            <button className={styles.button}>
                <Trash size={24} weight="thin" />
            </button>
        </div>
    )
}