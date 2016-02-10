var connect = require("react-redux").connect;
var actions = require("../actions/index.js");
var ClearCompleted = require("../components/ClearCompleted.jsx");

var mapDispatchToProps = function(dispatch) {
  return {
    onClearCompleted: function() {
      dispatch(actions.clearCompleted());
    }
  };
};

var ClearCompletedTodo = connect(
  null,
  mapDispatchToProps
)(ClearCompleted);

module.exports = ClearCompletedTodo;
