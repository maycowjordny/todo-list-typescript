
export interface TaskProps {
    completed: boolean
    id: number
    description: string
}

export interface FunctionsProps {
    checkboxChange: (id: number, checked: boolean) => void
    deleteTask: (id: number) => void
    data: {
        completed: boolean
        id: number
        description: string
    }
}