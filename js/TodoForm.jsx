var React = require("react");
var ReactDOM = require("react-dom");

var TodoForm = React.createClass({
  getInitialState: function() {
    return {description: ""};
  },
  handleTodoSubmit: function(event) {
    event.preventDefault();
    var description = this.state.description;
    var id = Math.random();
    this.props.onTodoSubmit(id, {description: description, status: "active"});
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
          className="form-control"
          placeholder="What needs to be done"
          value={this.state.description}
          onChange={this.handleChange}
        />
      </form>
    );
  }
});

module.exports = TodoForm;
