
import axios from "axios"
export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const COMPLETE_TASK = "COMPLETE_TASK"
export const EDIT_MODE = "EDIT_MODE"
export const INPUT_EDIT = "INPUT_EDIT"
export const GET_TASKS = "GET_TASKS"


export const addTask = (text, isCompleted, mode,listId) => async dispatch => {
        const response = await axios.post(`http://localhost:3001/lists/${listId}/tasks`, { text, isCompleted, mode, listId })
        dispatch({
                id: response.data.id,
                type: ADD_TASK,
                text: response.data.text,
                isCompleted:response.data.isCompleted,
                mode: response.data.mode,
                listId: response.data.listId
        })
};

export const deleteTask = (id) => async dispatch => {
        await axios.delete(`http://localhost:3001/tasks/${id}`, )
        dispatch({
                type: DELETE_TASK,
                id
        })

}

export const completeTask = (id,text, isCompleted,mode,listId) => async dispatch => {
        await axios.put(`http://localhost:3001/tasks/${id}`,{text, isCompleted, mode, listId })
        dispatch({
                type: COMPLETE_TASK,
                id,
                isCompleted
        }) 
};

export const inputEdit = (id,text, isCompleted, mode, listId ) => async dispatch =>  {
        await axios.put(`http://localhost:3001/tasks/${id}`,{text, isCompleted, mode, listId })
        dispatch({
                type: INPUT_EDIT,
                id,
                text
        }) 
};

export const editMode = (id) => ({
        type: EDIT_MODE,
        id
});

export const getTasks = listId => async dispatch => {
        const response = await axios.get(`http://localhost:3001/lists/${listId}/tasks`)
        dispatch({
                type: GET_TASKS,
                payload: response.data
        })
}