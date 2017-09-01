var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI',() => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set todos with valid array', () => {
      var todos = [{
        id: 23,
        text: 'test Text',
        completed: false
      }];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);

    });

    it('should not set todos with invalid array', () => {
      var todos = 'Invalid Array';

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toBe(null);

    });

  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return array for valid localstorage data', () => {
      var todos = [{
        id: 23,
        text: 'test Text',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'some text here',
        completed: true
      },
      {
        id: 2,
        text: 'other text here 2',
        completed: false
      },
      {
        id: 3,
        text: 'some text here 3',
        completed: true
      }
    ];

    it('should show all todos when showCompleted true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toEqual(3);
    });

    it('should only show one todo when showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos).toEqual([{
        id: 2,
        text: 'other text here 2',
        completed: false
      }]);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toEqual(3);
    });

    it('should filter by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');

      expect(filteredTodos.length).toEqual(2);
    });
  });
});
