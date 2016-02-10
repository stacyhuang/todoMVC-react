var nextTodoId = 0;

module.exports.addTodo = function(text) {
  return {
    type: 'ADD_TODO',
    text: text,
    id: nextTodoId++
  };
};

module.exports.toggleTodo = function(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};

module.exports.deleteTodo = function(id) {
  return {
    type: 'DELETE_TODO',
    id: id
  };
};

module.exports.updateTodo = function(id, text) {
  return {
    type: 'UPDATE_TODO',
    id: id,
    text: text
  };
};

module.exports.setDisplayFilter = function(filter) {
  return {
    type: 'SET_DISPLAY_FILTER',
    filter: filter
  };
};

module.exports.clearCompleted = function(){
  return {
    type: 'CLEAR_COMPLETED'
  };
};
