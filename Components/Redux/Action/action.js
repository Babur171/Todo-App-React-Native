export const ADD_TODO="ADD_TODO";
export const DELETE_TODO="DELETE_TODO";
export const UPDATE_TODO="UPDATE_TODO";

export const addTodo = todo=> dispatch=>dispatch({
    type: ADD_TODO,
    payload:{
        id:new Date().getTime().toString(),
        taskName:todo
    }   
}
);
export const deleteTodo = id=>dispatch=>dispatch ({
    type: DELETE_TODO,
    id
});
export const updateTodo = list=>dispatch=>dispatch ({
    type: UPDATE_TODO,
    payload:list
    
});