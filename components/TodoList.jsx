var React = require("react");
var Todo = require("./Todo.jsx");

var TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
      completed: React.PropTypes.bool.isRequired,
      text: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired
    }).isRequired).isRequired,
    onTodoToggle: React.PropTypes.func.isRequired,
    onTodoDelete: React.PropTypes.func.isRequired,
    onTodoUpdate: React.PropTypes.func.isRequired
  },
  render: function() {
    var todoNodes = [];
    this.props.todos.map(function(todo) {
      todoNodes.push(
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onUpdate={this.props.onTodoUpdate}
          onDelete={this.props.onTodoDelete}
          onToggle={this.props.onTodoToggle}
        />
      )
    }.bind(this));
    return (
      <div className="todoList">
        {todoNodes}
      </div>
    );
  }
});

module.exports = TodoList;
