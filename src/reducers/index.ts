import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState> ({
  //counter: () => 1 // a fctn that always return 1
  todos: todosReducer
});

