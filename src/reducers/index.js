import { combineReducers } from 'redux'

import todosReducer from './todoreducers'

const rootReducer = combineReducers({
  todos: todosReducer,
})

export default rootReducer