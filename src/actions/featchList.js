import { fetchTopik2Vocabulary } from "../api/featchList";
import {
    VOCABULARY_LIST,
} from '../constants/action_type';



export const vocabularyList = ( params={} ) => {
    return async function(dispatch) {
      const response = await fetchTopik2Vocabulary( params );
      dispatch({
          type: VOCABULARY_LIST,
          payload: { data: response.data
        }});
    };
  };  
