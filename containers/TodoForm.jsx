var React = require("react");
var connect = require("react-redux").connect;
var actions = require("../actions/index.js");

var TodoForm = React.createClass({
  getInitialState: function() {
    return {text: ""};
  },
  handleTodoSubmit: function(event) {
    event.preventDefault();
    if (this.state.text.trim()) {
      this.props.dispatch(actions.addTodo(this.state.text));
      this.setState({text: ""});
    }
  },
  handleChange: function(event) {
    this.setState({text: event.target.value});
  },
  render: function() {
    return (
      <form className="todoForm" onSubmit={this.handleTodoSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </form>
    );
  }
});

TodoForm = connect()(TodoForm);

module.exports = TodoForm;
