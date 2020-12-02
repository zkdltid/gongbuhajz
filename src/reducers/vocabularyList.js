import {
    VOCABULARY_LIST,
} from '../constants/action_type';

const initState = {
    data: '',
  };

export default function listReducer(state=initState, action){
    switch(action.type){
      case VOCABULARY_LIST:
        console.log(action.payload.data)
        return {
          data: action.payload.data,
        }
      default:
       return state;
      }
  }

