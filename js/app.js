var App = React.createClass({
  getInitialState: function() {
    // ex: todos: {1: {description: "Do this", status: "Active"}}
    return {todos: {}, count: 0, display: "all"};
  },
  handleTodoSubmit: function(todo) {
    var todos = this.state.todos;
    todos[todo.id] = {description: todo.description, status: "active"};

    var count = this.state.count;
    count++;

    this.setState({todos: todos, count: count});
  },
  handleDelete: function(id) {
    var todos = this.state.todos;
    delete todos[id];
    this.setState({todos: todos});
  },
  handleToggle: function(id) {
    var todos = this.state.todos;
    var count = this.state.count;

    if (todos[id]['status'] === 'active') {
      todos[id]['status'] = 'completed';
      count--;
    } else {
      todos[id]['status'] = 'active';
      count++;
    }

    this.setState({todos: todos, count: count});
  },
  handleClearCompleted: function() {
    var todos = this.state.todos;
    for (var key in todos) {
      if (todos[key]['status'] === 'completed') {
        delete todos[key];
      }
    }
    this.setState({todos: todos});
  },
  handleDisplayUpdate: function(display) {
    this.setState({display: display});
  },
  handleTodoUpdate: function(id, todo) {
    var todos = this.state.todos;
    todos[id] = todo;
    this.setState({todos: todos});
  },
  render: function() {
    return (
      <div className="app">
        <TodoForm onTodoSubmit={this.handleTodoSubmit} />
        <TodoList todos={this.state.todos} display={this.state.display} onDelete={this.handleDelete} onToggle={this.handleToggle} onTodoUpdate={this.handleTodoUpdate} />
        <TodoControls count={this.state.count} display={this.state.display} onClearCompleted={this.handleClearCompleted} onDisplayUpdate={this.handleDisplayUpdate} />
      </div>
    );
  }
});

var TodoForm = React.createClass({
  getInitialState: function() {
    return {description: ""};
  },
  handleTodoSubmit: function(event) {
    event.preventDefault();
    var description = this.state.description
    var id = Math.random();
    this.props.onTodoSubmit({description: description, id: id});
    this.setState({description: ""});
  },
  handleChange: function(event) {
    this.setState({description: event.target.value});
  },
  render: function() {
    return (
      <form className="todoForm" onSubmit={this.handleTodoSubmit}>
        <input
          type="text"
          placeholder="What needs to be done"
          value={this.state.description}
          className="form-control"
          onChange={this.handleChange} />
      </form>
    );
  }
});

var TodoList = React.createClass({
  render: function() {
    var display = this.props.display;
    var todos = this.props.todos;
    var todoNodes = [];

    if (display === "all") {
      for(var key in todos) {
        todoNodes.push(
          <Todo
            description={todos[key]['description']}
            status={todos[key]['status']}
            key={key}
            id={key}
            onDelete={this.props.onDelete}
            onToggle={this.props.onToggle}
            onTodoUpdate={this.props.onTodoUpdate}/>
        )
      }
    } else {
      for(var key in todos) {
        if (todos[key]['status'] === display) {
          todoNodes.push(
            <Todo
              description={todos[key]['description']}
              status={todos[key]['status']}
              key={key}
              id={key}
              onDelete={this.props.onDelete}
              onToggle={this.props.onToggle}
              onTodoUpdate={this.props.onTodoUpdate} />
          )
        }
      }
    }
    return (
      <div className="todoList">
        {todoNodes}
      </div>
    );
  }
});

var Todo = React.createClass({
  getInitialState: function() {
    return {editing: false, description: this.props.description};
  },
  handleDelete: function(id) {
    this.props.onDelete(id);
  },
  handleToggle: function(id) {
    this.props.onToggle(id);
  },
  handleTodoUpdate: function(event) {
    event.preventDefault();
    var description = this.state.description;
    this.stopEditing();
    this.props.onTodoUpdate(this.props.id, {description: description, status: this.props.status});
  },
  handleChange: function(event) {
    this.setState({description: event.target.value});
  },
  startEditing: function() {
    this.setState({editing: true});
  },
  stopEditing: function() {
    this.setState({editing: false});
  },
  render: function() {
    var todoClass = classNames("todo", "row", this.props.status);
    var ctnTodoDescriptionClass = classNames("ctn-todo-description", {"editing": this.state.editing});
    return (
      <div className={todoClass}>
        <div className="checkbox col-xs-1">
          <input
            type="checkbox"
            className="status"
            checked={this.props.status === "completed"}
            onChange={this.handleToggle.bind(null, this.props.id)} />
        </div>
        <form className="col-xs-10" onSubmit={this.handleTodoUpdate}>
          <input
            type="text"
            className={ctnTodoDescriptionClass}
            readOnly={!this.state.editing}
            value={this.state.description}
            onDoubleClick={this.startEditing}
            onBlur={this.stopEditing}
            onChange={this.handleChange} />
        </form>
        <button type="button" className="close col-xs-1" aria-label="Close" onClick={this.handleDelete.bind(null, this.props.id)}><span aria-hidden="true">×</span></button>
      </div>
    );
  }
});

var TodoControls = React.createClass({
  handleDisplayUpdate: function(display) {
    this.props.onDisplayUpdate(display);
  },
  render: function() {
    var btnDisplayAll = classNames("btn",  "btn-default", "btn-display-all", {"active": this.props.display === "all"});
    var btnDisplayActive = classNames("btn",  "btn-default", "btn-display-active", {"active": this.props.display === "active"});
    var btnDisplayCompleted = classNames("btn",  "btn-default", "btn-display-completed", {"active": this.props.display === "completed"});
    return (
      <div className="todoControls row">
        <div className="col-xs-3">
          {this.props.count} items left
        </div>
        <div className="col-xs-6 row display-controls">
          <div className={btnDisplayAll} onClick={this.handleDisplayUpdate.bind(null, "all")}>All</div>
          <div className={btnDisplayActive} onClick={this.handleDisplayUpdate.bind(null, "active")}>Active</div>
          <div className={btnDisplayCompleted} onClick={this.handleDisplayUpdate.bind(null, "completed")}>Completed</div>
        </div>
        <div className="col-xs-3 btn btn-clear-completed" onClick={this.props.onClearCompleted}>Clear completed</div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById("app")
);