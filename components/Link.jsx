var React = require("react");

var Link = React.createClass({
  propTypes: {
    active: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired
  },
  render: function() {
    var btnDisplayFilter = classNames("btn",  "btn-default", {"active": this.props.active});
    return (
      <div className={btnDisplayFilter} onClick={this.props.onClick}>{this.props.children}</div>
    );
  }
});

module.exports = Link;
