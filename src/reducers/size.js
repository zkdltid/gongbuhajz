import {
    SELECT_SIZE,
} from '../constants/action_type';

const initState = {
    size: 10,
  };

export default function sizeReducer(state=initState, action){
    switch(action.type){
      case SELECT_SIZE :
        console.log('reducer:')
        console.log(action.size)
        return {
          size: action.size,
        }
      default:
       return state;
      }
}

