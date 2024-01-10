import axios from "axios";
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_DETAIL = "GET_DETAIL"
export const CLEAR_DETAIL = "CLEAR_DETAIL"





export const onSearch = (query) => {
    return async (dispatch) => {
        try {
          const {data} = await axios.get(`http://localhost:3001/rickAndMorty/name/${query}`);
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
          return dispatch({
            type: GET_DETAIL,
            payload: data
          })  
        } catch (error) {
          console.error('Error fetching character:', error);
        }
      };
  }

  export const clearDetail = () => {
    return async (dispatch) => {
        try {
            return dispatch({
                type: CLEAR_DETAIL,
                payload: {}
            })
        } catch (error) {
            
        }
    }
  }