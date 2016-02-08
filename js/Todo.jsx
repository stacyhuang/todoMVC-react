var React = require('react');
var ReactDOM = require('react-dom');

var Todo = React.createClass({
  getInitialState: function() {
    return {editing: false, description: this.props.description};
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
  handleDelete: function(id) {
    this.props.onDelete(id);
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
            onChange={this.handleToggle.bind(this, this.props.id)}
          />
        </div>
        <form className="col-xs-10" onSubmit={this.handleTodoUpdate}>
          <input
            type="text"
            className={ctnTodoDescriptionClass}
            readOnly={!this.state.editing}
            value={this.state.description}
            onDoubleClick={this.startEditing}
            onBlur={this.stopEditing}
            onChange={this.handleChange}
          />
        </form>
        <button type="button" className="close col-xs-1" aria-label="Close" onClick={this.handleDelete.bind(this, this.props.id)}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
    );
  }
});

module.exports = Todo;
