var React = require("react");

var ClearCompleted = React.createClass({
  propTypes: {
    onClearCompleted: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <button className="btn btn-clear-completed" onClick={this.props.onClearCompleted}>Clear completed</button>
    );
  }
});

module.exports = ClearCompleted;
