import { GET_BY_NAME, GET_DETAIL, CLEAR_DETAIL } from "../Actions/actions"


const initialState = {
    results : [],
    detail : {}
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_BY_NAME :
            return {
                ...state, results: action.payload
            }
        case GET_DETAIL : 
        
            return {
                ...state, detail: action.payload
            }
        case CLEAR_DETAIL : 
            return {
                ...state, detail: action.payload
            }
        default:
            return state;
    }
}

export default reducer;


  