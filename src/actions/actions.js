import { 
  ADD_TODO,
  LIST_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  UPDATE_TODO,
  REMOVE_TODO 
} from '../constants/actionTypes';

// Actions
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function toggleTodo(index) {
  return { 
    type: TOGGLE_TODO, 
    index 
  };
}
​
export function setVisibilityFilter(filter) {
  return { 
    type: SET_VISIBILITY_FILTER, 
    filter 
  };
}

// Dispatchers
export function boundAddTodo(text) {
  return dispatch(addTodo(text));
}
