import { ADD_LIST, DELETE_LIST } from "./action"

const initialState = [
    {
        id: 1,
        name: "List1"
    }
]

const lists = (state = initialState, { id, name,type }) => {
    switch (type) {
        case ADD_LIST:
            return [...state, {
                id,
                name
            }
            ]

        case DELETE_LIST:
            return [...state].filter(list => list.id !== id)

        default:
            return state;
    }
}

export default lists

