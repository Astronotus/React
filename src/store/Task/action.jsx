
export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const COMPLETE_TASK = "COMPLETE_TASK"
export const EDIT_MODE="EDIT_MODE"
export const INPUT_EDIT="INPUT_EDIT"

export const addTask = (id,text,isCompleted,mode) => ({
        type: ADD_TASK,
        id,
        text,
        isCompleted,
        mode,

});

export const deleteTask = id => ({
        type: DELETE_TASK,
        id,
});

export const completeTask = id => ({
        type: COMPLETE_TASK,
        id,
});

export const inputEdit = (newText) => ({
        type: INPUT_EDIT,
        newText      
});

export const editMode = (id) => ({
        type: EDIT_MODE,
        id
});