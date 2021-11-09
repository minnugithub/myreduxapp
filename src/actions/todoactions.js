// Create Redux action types
export const GET_TODOS = 'GET_TODOS'
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS'
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE'

// Create Redux action creators that return an action
export const getTodos = () => ({
    type: GET_TODOS,
  })
  
  export const getTodosSuccess = (todos) => ({
    type: GET_TODOS_SUCCESS,
    payload: todos,
  })
  
  export const getTodosFailure = () => ({
    type: GET_TODOS_FAILURE,
  })

  // Combine them all in an asynchronous thunk
export function fetchTodos() {
    return async (dispatch) => {
      dispatch(getTodos())
  
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await response.json()
  
        dispatch(getTodosSuccess(data))
      } catch (error) {
        dispatch(getTodosFailure())
      }
    }
  }

  //https://jsonplaceholder.typicode.com/comments