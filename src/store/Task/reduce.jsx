import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_MODE, INPUT_EDIT,GET_TASKS } from "./action"


const initialState = []

const tasks = (state = initialState, {id, text, isCompleted, type,mode, newText,listId,payload }) => {
    switch (type) {
        case ADD_TASK:
            return [...state, {
                id,
                text,
                isCompleted,
                mode,
                listId
            }
            ]

        case DELETE_TASK:
            return [...state].filter(task => task.id !== id)

        case COMPLETE_TASK:
            return [...state].map(task => {
                if (task.id === id) {
                    task.isCompleted = isCompleted
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
                if (task.id === id) {
                    task.text = text
                }
                return task
            })
        
        case GET_TASKS:
            return payload
               
        default:
            return state;
    }
}

export default tasks