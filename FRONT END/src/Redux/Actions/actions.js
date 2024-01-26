import axios from "axios";
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_DETAIL = "GET_DETAIL"
export const CLEAR_DETAIL = "CLEAR_DETAIL"
export const MAKE_FAVORITE = "MAKE_FAVORITE"
export const DELETE_FAVORITE = "DELETE_FAVORITE"
export const ORDER_ASC = "ORDER_ASC"
export const ORDER_DES = "ORDER_DES"
export const FILTER_BY_GENDER = "FILTER_BY_GENDER"
export const DELETE_RESULT = "DELETE_RESULT"





export const onSearch = (query) => {
    return async (dispatch) => {
        try {
          const {data} = await axios.get(`http://localhost:3001/rickAndMorty/name/${query}`);
          console.log("este es la data por name", data)
          return dispatch({
            type: GET_BY_NAME,
            payload: data
          })
        } catch (error) {
          console.error('Error al realizar la búsqueda:', error);
        }

    }
};

export const getDetail = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/rickAndMorty/by/${id}`);
            console.log("EL ID LLEGA A LAS ACTIONS??", id)
            console.log('Respuesta de la petición GET_DETAIL:', data);
            return await dispatch({
                type: GET_DETAIL,
                payload: data
            })  
            } catch (error) {
            console.error('Error fetching character:', error);
        }
    };
};

export const clearDetail = () => {
    return async (dispatch) => {
        try {
            await dispatch({
                type: CLEAR_DETAIL,
                payload: {}
            });

            console.log('Detail cleared successfully.');
        } catch (error) {
            console.error('Error clearing detail:', error);
        }
    }
};

export const makeFavorite = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/rickAndMorty/by/${id}`);
            console.log("EL ID LLEGA A LAS ACTIONS??", id)
            console.log('Respuesta de la petición MAKE_FAVORITE:', data);
            return await dispatch({
                type: MAKE_FAVORITE,
                payload: data
            })  
            } catch (error) {
            console.error('Error fetching character:', error);
        }
    };
};

export const deleteFavorite = (id) => {
    console.log("SE EJECUTA DELETE FAVORITE CON ESTE ID", id)
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
};

export const orderASC = () => {
    return {
        type: ORDER_ASC,
        payload: ""
    }
};

export const orderDES = () => {
    return {
        type: ORDER_DES,
        payload: ""
    }
};

export const filterByGender = (gender) => {
    return {
        type: FILTER_BY_GENDER,
        payload: gender
    }
};

export const deleteResults = (id) => {
    return {
        type: DELETE_RESULT,
        payload: id
    }
};
