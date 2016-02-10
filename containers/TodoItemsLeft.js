var connect = require("react-redux").connect;
var ItemsLeft = require("../components/ItemsLeft.jsx");

var getItemsLeftCount = function(todos) {
  var itemsLeft = todos.filter(function(todo) {
    return todo.completed === false;
  });
  return itemsLeft.length;
};

var mapStateToProps = function(state) {
  return {
    count: getItemsLeftCount(state.todos)
  };
};

var TodoItemsLeft = connect(
  mapStateToProps,
  null
)(ItemsLeft);

module.exports = TodoItemsLeft;
