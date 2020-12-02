import { combineReducers } from 'redux';
import reducer from './paginations';
import listReducer from './vocabularyList';
import sizeReducer from './size';
const rootReducer = combineReducers({
    reducer,
    sizeReducer,
    listReducer,
});

export default rootReducer;
