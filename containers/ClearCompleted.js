var React = require("react");
var connect = require("react-redux").connect;
var actions = require("../actions/index.js");

var ClearCompleted = React.createClass({
  handleClearCompleted: function() {
    this.props.dispatch(actions.clearCompleted());
  },
  render: function() {
    return (
      <button className="btn btn-clear-completed" onClick={this.handleClearCompleted}>Clear completed</button>
    );
  }
});

var ClearCompleted = connect()(ClearCompleted);

module.exports = ClearCompleted;
