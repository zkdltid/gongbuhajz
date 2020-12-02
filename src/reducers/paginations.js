import {
    DEFAULT_PAGE,
    NEXT_PAGE,
    PREV_PAGE,
    // SELECT_SIZE,
} from '../constants/action_type';

const initState = {
    page_index: 1,
  };

export default function pageReducer(state=initState, action){
    switch(action.type){
        case DEFAULT_PAGE:
            console.log(state.page_index)
            return {
              page_index: 1,
            }
      case NEXT_PAGE:
        console.log(state.page_index)
        return {
          page_index: state.page_index + 1,
        }
      case PREV_PAGE :
        console.log(state.page_index)
        return {
          page_index: state.page_index - 1,
        }
      default:
       return state;
      }
  }


