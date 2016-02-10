var createStore = require("redux").createStore;
var combineReducers = require("redux").combineReducers;
var todos = require("./todos.js");
var displayFilter = require("./displayFilter.js");

var todoApp = combineReducers({
  todos: todos,
  displayFilter: displayFilter
});

module.exports = createStore(todoApp);