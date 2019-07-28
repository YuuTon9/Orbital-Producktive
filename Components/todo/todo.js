import React from 'react';
import { connect } from 'react-redux'

const Todos = ({todos, deleteTodo, addCoins}) => {
    console.log(todos);
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
              <div className="collection-item" key={ todo.id }>
                <div>
                  { todo.content }
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <button class="btn btn-secondary float-right" onClick={() => {deleteTodo(todo.id)}} >
                    <i className='material-icons'>delete </i>
                    </button>
                    <button class="btn btn-secondary float-right" onClick={() => {addCoins(todo.id)}} >
                    <i className='material-icons'>done </i>
                    </button>
                  </div>
                </div>
              </div>
            )
        })
      ) : null;
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}


const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Todos)