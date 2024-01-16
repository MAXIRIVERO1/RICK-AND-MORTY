import { GET_BY_NAME, GET_DETAIL, CLEAR_DETAIL, MAKE_FAVORITE, DELETE_FAVORITE, ORDER_ASC, ORDER_DES } from "../Actions/actions"


const initialState = {
    results : [],
    detail : {},
    favorites: []
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
        case MAKE_FAVORITE :
            return {
                ...state, favorites: [...state.favorites, action.payload]
            }
        case DELETE_FAVORITE :
            return {
                ...state, favorites: state.favorites.filter(obj => obj.id !== action.payload.id)
            }
        case ORDER_ASC :
            return {
                ...state, favorites: [...state.favorites.slice().sort((a, b) => a.name.localeCompare(b.name))]
            }
        case ORDER_DES :
            return {
                ...state, favorites: [...state.favorites.slice().sort((a, b) => b.name.localeCompare(a.name))]
            }
        default:
            return state;
    }
}

export default reducer;


  