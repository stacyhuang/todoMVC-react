var React = require("react");
var Todo = require("./Todo.jsx");

var TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      text: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onTodoUpdate: React.PropTypes.func.isRequired,
    onTodoDelete: React.PropTypes.func.isRequired,
    onTodoToggle: React.PropTypes.func.isRequired
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
          onUpdate={this.props.onTodoUpdate.bind(null, todo.id)}
          onDelete={this.props.onTodoDelete.bind(null, todo.id)}
          onToggle={this.props.onTodoToggle.bind(null, todo.id)}
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
