import { fetchTopik2Vocabulary } from "../api/featchList";
import {
    VOCABULARY_LIST,
} from '../constants/action_type';



// 不同於一般同步 action 直接發送 action
// 非同步 action 會回傳一個帶有 dispatch 參數的 function
export const vocabularyList = ( params={} ) => {
    return async function(dispatch) {
      const response = await fetchTopik2Vocabulary( params );
      dispatch({ type: VOCABULARY_LIST, payload: { data: response.data } });
    };
  };

