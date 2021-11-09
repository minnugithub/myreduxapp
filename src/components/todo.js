import React from 'react'

export const Todo = ({ todo }) => (
  <article className="post-excerpt">
    <h2>{todo.title}</h2>
    <p>{todo.body.substring(0, 15)}</p>
  </article>
)