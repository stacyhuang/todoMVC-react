var React = require("react");
var ReactDOM = require("react-dom");

var Footer = React.createClass({
  handleDisplayUpdate: function(display) {
    this.props.onDisplayUpdate(display);
  },
  render: function() {
    var btnDisplayAll = classNames("btn",  "btn-default", "btn-display-all", {"active": this.props.display === "all"});
    var btnDisplayActive = classNames("btn",  "btn-default", "btn-display-active", {"active": this.props.display === "active"});
    var btnDisplayCompleted = classNames("btn",  "btn-default", "btn-display-completed", {"active": this.props.display === "completed"});
    return (
      <div className="footer row">
        <div className="col-xs-3">
          {this.props.count} items left
        </div>
        <div className="col-xs-6 row display-controls">
          <div className={btnDisplayAll} onClick={this.handleDisplayUpdate.bind(this, "all")}>All</div>
          <div className={btnDisplayActive} onClick={this.handleDisplayUpdate.bind(this, "active")}>Active</div>
          <div className={btnDisplayCompleted} onClick={this.handleDisplayUpdate.bind(this, "completed")}>Completed</div>
        </div>
        <div className="col-xs-3 btn btn-clear-completed" onClick={this.props.onClearCompleted}>Clear completed</div>
      </div>
    );
  }
});

module.exports = Footer;
