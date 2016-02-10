var React = require("react");
var TodoItemsLeft = require("../containers/TodoItemsLeft.js");
var FilterLink = require("../containers/FilterLink.js");
var ClearCompletedTodo = require("../containers/ClearCompletedTodo.js");

var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer row">
        <div className="col-xs-3">
          <TodoItemsLeft />
        </div>
        <div className="col-xs-6 row filterLinks">
          <FilterLink
            filter="SHOW_ALL"
          >
            All
          </FilterLink>
          <FilterLink
            filter="SHOW_ACTIVE"
          >
            Active
          </FilterLink>
          <FilterLink
            filter="SHOW_COMPLETED"
          >
            Completed
          </FilterLink>
        </div>
        <div className="col-xs-3">
          <ClearCompletedTodo />
        </div>
      </div>
    );
  }
});

module.exports = Footer;
