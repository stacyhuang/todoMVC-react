var React = require('react');

var Todo = React.createClass({
  propTypes: {
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onUpdate: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {editing: false, text: this.props.text};
  },
  handleUpdate: function(event) {
    event.preventDefault();
    this.stopEditing();
    this.props.onUpdate(this.props.id, this.state.text);
  },
  handleChange: function(event) {
    this.setState({text: event.target.value});
  },
  startEditing: function() {
    this.setState({editing: true});
  },
  stopEditing: function() {
    this.setState({editing: false});
  },
  render: function() {
    var todoClass = classNames("todo", "row", {"completed": this.props.completed});
    var ctnTodoTextClass = classNames("ctn-todo-text", {"editing": this.state.editing});
    return (
      <div className={todoClass}>
        <div className="checkbox col-xs-1">
          <input
            type="checkbox"
            checked={this.props.completed}
            onChange={this.props.onToggle.bind(null, this.props.id)}
          />
        </div>
        <form className="col-xs-10" onSubmit={this.handleUpdate}>
          <input
            type="text"
            className={ctnTodoTextClass}
            readOnly={!this.state.editing}
            value={this.state.text}
            onDoubleClick={this.startEditing}
            onBlur={this.stopEditing}
            onChange={this.handleChange}
          />
        </form>
        <button type="button" className="close col-xs-1" aria-label="Close" onClick={this.props.onDelete.bind(null, this.props.id)}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
    );
  }
});

module.exports = Todo;
