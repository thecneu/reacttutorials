import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({dispatch}) => {
	return (
		<form onSubmit={e => {
      e.preventDefault()
      dispatch(addTodo(e.currentTarget.text.value))
      e.currentTarget.text.value = ''
    }}>
      <input type="text" name="text" placeholder="Add Todo" autoComplete="off" />
      <button type="submit">Add</button>
    </form>
	)
}

export default connect()(AddTodo)