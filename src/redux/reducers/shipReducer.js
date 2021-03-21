
export const initialState={
    Data:[]
}

export const shipReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_SHIPS":{
            return {...state, Data:[...action.payload]}
        }
        case "DELETE_SHIPS":{
            return {...state, Data:[]}
        }
        default:
            return state;
    }

}