import { GET_BY_NAME, GET_DETAIL, CLEAR_DETAIL, MAKE_FAVORITE, DELETE_FAVORITE, ORDER_ASC, ORDER_DES, FILTER_BY_GENDER, DELETE_RESULT } from "../Actions/actions"


const initialState = {
    results : [],
    detail : {},
    favorites: [],
    copyFavorites: []
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
                ...state, favorites: [...state.favorites, action.payload], copyFavorites: [...state.copyFavorites, action.payload]
            }
        case DELETE_FAVORITE :
            const deleted = state.favorites.filter((obj) => obj.id !== action.payload && obj._id !== action.payload)
            console.log("ESTOS SON LOS QUE QUEDAN DESPUES DE ELIMINAR: ", deleted)
            return {
                ...state, favorites: deleted, copyFavorites: deleted 
            }
        case ORDER_ASC :
            return {
                ...state, favorites: [...state.favorites.slice().sort((a, b) => a.name.localeCompare(b.name))]
            }
        case ORDER_DES :
            return {
                ...state, favorites: [...state.favorites.slice().sort((a, b) => b.name.localeCompare(a.name))]
            }
        case FILTER_BY_GENDER:
            const originalFavorites = state.copyFavorites
            let filtered = []
            if(action.payload === ""){
                filtered = originalFavorites
            }else{
                filtered = originalFavorites.filter(obj => obj.gender === action.payload)
                console.log("copyFavorites:", state.copyFavorites, "favorites:", state.favorites)
                if(filtered.length < 1){
                    return {
                        ...state, copyFavorites: state.copyFavorites, favorites: [],
                    }
                }
            }
            return {
                ...state, copyFavorites: state.copyFavorites, favorites: filtered,
                
            }
        case DELETE_RESULT:
            const del = state.results.filter((obj) => obj.id || obj._id !== action.payload)
            return {
                ...state, results: del
            }
            default:
            return state;
    }
}

export default reducer;


  