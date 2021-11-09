import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from '../actions/todoactions'
import { Todo } from '../components/todo'

const TodosPage = ({ dispatch, loading, todos, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  // Show loading, error, or success state
  const renderTodos = () => {
    if (loading) return <p>Loading todos...</p>
    if (hasErrors) return <p>Unable to display todos.</p>
    return todos.map((todo) => <Todo key={todo.id} todo={todo} />)
  }

  return (
    <section>
      <h1>Todos</h1>
      {renderTodos()}
    </section>
  )
}

const mapStateToProps = (state) => ({
  loading: state.todos.loading,
  todos: state.todos.todos,
  hasErrors: state.todos.hasErrors,
})

export default connect(mapStateToProps)(TodosPage)