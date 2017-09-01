var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false

        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'Sleep',
          completed: false
        },
        {
          id: uuid(),
          text: 'Eat',
          completed: true
        }
      ]
    };
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      todo.id === id ? todo.completed = !todo.completed: null;

      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
      ...this.state.todos,
      {
        id: uuid(),
        text: text,
        completed: false
      }
    ]
  });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
