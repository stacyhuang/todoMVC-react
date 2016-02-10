var React = require("react");
var TodoForm = require("../containers/TodoForm.jsx");
var VisibleTodoList = require("../containers/VisibleTodoList.js");
var Footer = require("./Footer.jsx");

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <TodoForm />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
});

module.exports = App;