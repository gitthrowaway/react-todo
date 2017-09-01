var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'Fart';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed status on handleToggle', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});

    // check todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(todoData.id);

    // check todos value change
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
