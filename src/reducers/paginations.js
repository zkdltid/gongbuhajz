// import {
//     DEFAULT_PAGE,
//     NEXT_PAGE,
//     PREV_PAGE,
//     SELECT_SIZE,
//     SEARCH_KEYWORD,
// } from '../constants/action_type';

// const initPageState = {
//     page_index: 1,
//   };

// const initSizeState = {
//     size: 10,
//   };

// const initSearchKeyword = {
//     keyword: null,
//   };

// export function pageReducer(state=initPageState, action){
//     switch(action.type){
//         case DEFAULT_PAGE:
//             console.log(state.page_index)
//             return {
//               page_index: 1,
//             }
//       case NEXT_PAGE:
//         console.log(state.page_index)
//         return {
//           page_index: state.page_index + 1,
//         }
//       case PREV_PAGE :
//         console.log(state.page_index)
//         return {
//           page_index: state.page_index - 1,
//         }
//       default:
//        return state;
//       }
//   }

// export function sizeReducer(state=initSizeState, action){
//     switch(action.type){
//       case SELECT_SIZE :
//         console.log('reducer:')
//         console.log(action.size)
//         return {
//           size: action.size,
//         }
//       default:
//        return state;
//       }
// }

// export function searchKeywordReducer(state=initSearchKeyword, action){
//     switch(action.type){
//       case SEARCH_KEYWORD :
//         return {
//           keyword: action.keyword
//         }
//       default:
//        return state;
//       }
// }
