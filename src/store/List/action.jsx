
export const ADD_LIST = "ADD_LIST"
export const DELETE_LIST = "DELETE_LIST"


export const addList = (id,name) => ({
        type: ADD_LIST,
        id,
        name
});

export const deleteList = id => ({
        type: DELETE_LIST,
        id,
});

