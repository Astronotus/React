import axios from "axios"

export const ADD_LIST = "ADD_LIST"
export const DELETE_LIST = "DELETE_LIST"
export const GET_LISTS = "GET_LISTS"
export const CHANGE_LISTS = "CHANGE_LISTS"


export const addList = (name) => async dispatch => {
        const response = await axios.post(`http://localhost:3001/lists`, { name })
        dispatch({
                type: ADD_LIST,
                name: response.data.name,
                id: response.data.id,
        })
}

export const deleteList = id => async dispatch => {
         await axios.delete(`http://localhost:3001/lists/${id}`)
        dispatch({
                type: DELETE_LIST,
                id
        })

}

export const getLists = () => async dispatch => {
        const response = await axios.get(`http://localhost:3001/lists`)
        dispatch({
                type: GET_LISTS,
                payload: response.data
        })

}

export const changeList = id => ({
        type: CHANGE_LISTS,
        id,       
})




