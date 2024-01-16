import axios from "axios";
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_DETAIL = "GET_DETAIL"
export const CLEAR_DETAIL = "CLEAR_DETAIL"
export const GET_FAVORITES = "GET_FAVORITES"





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
  }

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
}
