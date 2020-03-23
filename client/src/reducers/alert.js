//Reducer
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== action.payload); //all ele except one that matched
    default:
      return state;
  }
}
