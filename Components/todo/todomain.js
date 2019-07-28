import React, { Component } from 'react';
import Todos from './todo'
import Add from './todoadd'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Todo extends Component {
	constructor(props) {
		super(props)
		this.state= {
			render: false,
		}
		this.checkData = this.checkData.bind(this)
	}
	
	componentDidMount() {
		this.checkData()
	}

	checkData() {	
		if (this.props.users == null ) {
			setTimeout(function() {
				this.checkData()
				return
			}.bind(this),200)
		} else { 
			if (this.props.users[0].todos.length === 0) {
				this.setState({
					todos: this.props.users[0].todos,
					render: true,
					coins: this.props.users[0].coins,
				})
			} else {
				this.setState({
					todos: this.props.users[0].todos,
					render: true,
					coins: this.props.users[0].coins,
				})
			}
    }
    console.log(this.state.todos);
  }
  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
    this.props.firestore.update(
      { collection: 'users', doc: this.props.auth.uid}, {
          todos: todos,
      }
    )
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
    this.props.firestore.update(
        { collection: 'users', doc: this.props.auth.uid}, {
            todos: todos,
        }
    )
  }
  addCoins = (id) => {
    const coins = this.state.coins + 1
    const todos = this.state.todos.filter(todo => {
        return todo.id !== id
      });
      this.setState({
        todos
      });
    this.props.firestore.update(
      { collection: 'users', doc: this.props.auth.uid },
      { coins: coins, todos: todos, }
    )
  }

  render() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var str = date + " " + months[month] + " " + year + " " + days[day];
    var c = this.state.coins;
    return (
      <div className="todo-app container">
        <h1 className="center pink-text">To do</h1>
        <h5 className="center purple-text">{str}</h5>
        <h6 className="center green-text">Coins: {c} </h6>
        console.log(todos)
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Add addTodo={this.addTodo} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid,
        todos: state.firebase.todos,
        auth: state.firebase.auth

    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    if (!props.auth.uid) return []
    return [
      {
        collection: 'users',
        doc: props.auth.uid,
  
      }
    ]
  }
  )
)(Todo)