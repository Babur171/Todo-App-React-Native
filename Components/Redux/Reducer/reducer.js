import { ADD_TODO, DELETE_TODO,UPDATE_TODO} from "../Action/action";
const initialState = {
    todos: []
}
const todoReducer=(state = initialState, action)=> {
    switch (action.type) {
        //Adding List
        case ADD_TODO:
            const {id,taskName}=action.payload
            return {...state,
                todos:[...state.todos,
                    {
                        id:id,
                        taskName:taskName
                    }
                ]
            } 
            // Delete List 
            case DELETE_TODO:
               return {...state,todos:action.id}
            // Update List 
            case UPDATE_TODO:
                return {...state,todos:action.payload}
        default:
            return state;
    }
}

export default todoReducer;