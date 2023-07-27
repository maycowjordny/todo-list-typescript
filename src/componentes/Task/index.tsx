import styles from "./index.module.css"
import { Trash } from "@phosphor-icons/react"

export function Task() {
    return (
        <div className={styles.taskWrapper}>
            <label className={styles.container}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
            </label>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button className={styles.button}>
                <Trash size={24} weight="thin" />
            </button>
        </div>
    )
}