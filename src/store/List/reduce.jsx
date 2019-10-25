import { ADD_LIST, DELETE_LIST, GET_LISTS,CHANGE_LISTS } from "./action"

const initialState = []

const lists = (state = initialState, { id, name, type, payload }) => {
    switch (type) {
        case ADD_LIST:
            return [...state, {
                id,
                name
            }
            ]

        case DELETE_LIST:
            return [...state].filter(list => list.id !== id)

        case GET_LISTS:
            return payload

        case CHANGE_LISTS:
            return [...state].map(task => {
                task.listId = id
                return task
            })

        default:
            return state;
    }
}

export default lists

