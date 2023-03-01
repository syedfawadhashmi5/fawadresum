const initialState = []
const StudentRedux = (state = initialState, action) => {
    switch(action.type){
        case "ADD_STUDENT":
            const tempdata = state.find((item) => item.id === action.payload.id)
            if(!tempdata){
                return [...state, action.payload]
            }else {
                return state
            }
            break;
        case "DELETE_CLASS":
            return state.filter((item) => item.id !== action.payload.id);
            break;
        default:{
           return state 
        }
        break;
    }
}

export default StudentRedux
