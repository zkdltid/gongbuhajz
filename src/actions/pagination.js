// import { createAction } from 'redux-actions';
import {
    DEFAULT_PAGE,
    NEXT_PAGE,
    PREV_PAGE,
    SELECT_SIZE,
} from '../constants/action_type';

export const nextPage = () => ({
     type: NEXT_PAGE 
    })
export const prevPage = () => ({
     type: PREV_PAGE 
    })

export const defaultPage = () => ({
    type: DEFAULT_PAGE 
    })

export const sizeSelect = ( selectedSize ) => {
    console.log('actions:')
    console.log(selectedSize)
    return {
     type: SELECT_SIZE,
     size: selectedSize
    }
}