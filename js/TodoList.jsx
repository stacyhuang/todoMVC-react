var React = require("react");
var ReactDOM = require("react-dom");
var Todo = require("./Todo.jsx");

var TodoList = React.createClass({
  render: function() {
    var display = this.props.display;
    var todos = this.props.todos;
    var todoNodes = [];

    for(var key in todos) {
      if (todos[key]["status"] === display || display === "all") {
        todoNodes.push(
          <Todo
            key={key}
            id={key}
            status={todos[key]["status"]}
            description={todos[key]["description"]}
            {...this.props}
          />
        )
      }
    }
    return (
      <div className="todoList">
        {todoNodes}
      </div>
    );
  }
});

module.exports = TodoList;
