var React = require("react");
var ReactDOM = require("react-dom");
var TodoForm = require("./TodoForm.jsx");
var TodoList = require("./TodoList.jsx");
var Footer = require("./Footer.jsx");

var App = React.createClass({
  getInitialState: function() {
    // ex: todos: {1: {description: "Do this", status: "Active"}}
    return {todos: {}, count: 0, display: "all"};
  },
  handleTodoSubmit: function(id, todo) {
    var todos = this.state.todos;
    var count = this.state.count;
    todos[id] = todo;
    count++;
    this.setState({todos: todos, count: count});
  },
  handleTodoUpdate: function(id, todo) {
    var todos = this.state.todos;
    todos[id] = todo;
    this.setState({todos: todos});
  },
  handleDelete: function(id) {
    var todos = this.state.todos;
    delete todos[id];
    this.setState({todos: todos});
  },
  handleToggle: function(id) {
    var todos = this.state.todos;
    var count = this.state.count;

    if (todos[id]["status"] === "active") {
      todos[id]["status"] = "completed";
      count--;
    } else {
      todos[id]["status"] = "active";
      count++;
    }
    this.setState({todos: todos, count: count});
  },
  handleDisplayUpdate: function(display) {
    this.setState({display: display});
  },
  handleClearCompleted: function() {
    var todos = this.state.todos;
    for (var key in todos) {
      if (todos[key]["status"] === "completed") {
        delete todos[key];
      }
    }
    this.setState({todos: todos});
  },
  render: function() {
    return (
      <div className="app">
        <TodoForm onTodoSubmit={this.handleTodoSubmit} />
        <TodoList
          todos={this.state.todos}
          display={this.state.display}
          onDelete={this.handleDelete}
          onToggle={this.handleToggle}
          onTodoUpdate={this.handleTodoUpdate}
        />
        <Footer
          count={this.state.count}
          display={this.state.display}
          onDisplayUpdate={this.handleDisplayUpdate}
          onClearCompleted={this.handleClearCompleted}
        />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
