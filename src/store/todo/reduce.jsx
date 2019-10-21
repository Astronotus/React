import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_MODE, INPUT_EDIT } from "./action"

const initialState = [
    {
        id: 1,
        text: "Learn ReactJS",
        isCompleted: false,
        mode: false
    }
]

const tasks = (state = initialState, { id, text, isCompleted, type,mode, newText }) => {
    switch (type) {
        case ADD_TASK:
            return [...state, {
                id,
                text,
                isCompleted,
                mode
            }
            ]

        case DELETE_TASK:
            return [...state].filter(task => task.id !== id)

        case COMPLETE_TASK:
            return [...state].map(task => {
                if (task.id === id) {
                    task.isCompleted = !task.isCompleted
                }
                return task
            })

        case EDIT_MODE:
            return [...state].map(task => {
                if (task.id === id) {
                    task.mode = true
                }
                return task
            })

        case INPUT_EDIT:
            return [...state].map(task => {
                if (task.mode === true) {
                    task.text=newText
                    task.mode = false
                }
                return task
            })
               

        default:
            return state;
    }
}

export default tasks