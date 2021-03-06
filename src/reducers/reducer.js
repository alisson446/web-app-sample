import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../constants/actionTypes';

/**
 * Application state has structure below:
 * 
 * {
 *   visibilityFilter: '',
 *   todos: [
 *      {
 *         text: '',
 *         completed: false
 *      }
 *   ]
 * }
 */

const { SHOW_ALL } = VisibilityFilters;

function todos(state = [], action) {
  switch (action.type) {
    
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo;
      });

    default:
      return state;

  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {

    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });

    default:
      return state;

  }
}

// Main reducer
const todoApp = combineReducers({
  visibilityFilter: visibilityFilter,
  todos: todos
});

export default todoApp;
