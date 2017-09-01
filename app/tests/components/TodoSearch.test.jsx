var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist',() => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text',() => {
    var searchText = 'Check mail';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper checked value',() => {
    var searchCompleted = true;
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = searchCompleted;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(searchCompleted, '');
  });

  it('it should not have called TodoSearch if todo null',() => {
/*    var todoText = '';
    var spy = expect.createSpy();
    var TodoSearch = TestUtils.renderIntoDocument(<TodoSearch onTodoSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(TodoSearch));

    TodoSearch.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
*/  });

});
