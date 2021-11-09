import * as actions from '../actions/todoactions';

export const initialState = {
  todos: [],
  loading: false,
  hasErrors: false,
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TODOS:
      return { ...state, loading: true }
    case actions.GET_TODOS_SUCCESS:
      return { todos: action.payload, loading: false, hasErrors: false }
    case actions.GET_TODOS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}