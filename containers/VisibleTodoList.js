var connect = require("react-redux").connect;
var actions = require("../actions/index.js");
var TodoList = require("../components/TodoList.jsx");

var getVisibleTodos = function(todos, filter) {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(function(todo) {
        return todo.completed;
      });
    case "SHOW_ACTIVE":
      return todos.filter(function(todo) {
        return !todo.completed;
      });
  }
};

var mapStateToProps = function(state) {
  return {
    todos: getVisibleTodos(state.todos, state.displayFilter)
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    onTodoToggle: function(id) {
      dispatch(actions.toggleTodo(id));
    },
    onTodoDelete: function(id) {
      dispatch(actions.deleteTodo(id));
    },
    onTodoUpdate: function(id, text) {
      dispatch(actions.updateTodo(id, text));
    }
  };
};

var VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

module.exports = VisibleTodoList;
