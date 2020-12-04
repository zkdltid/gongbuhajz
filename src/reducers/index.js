import { combineReducers } from 'redux';
// import { pageReducer, sizeReducer, searchKeywordReducer } from './paginations';
import listReducer from './vocabularyList';
// import sizeReducer from './size';
const rootReducer = combineReducers({
    // searchKeywordReducer,
    // pageReducer,
    // sizeReducer,
    listReducer,
});

export default rootReducer;
