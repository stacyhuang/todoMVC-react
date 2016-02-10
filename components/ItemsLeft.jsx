var React = require("react");

var ItemsLeft = React.createClass({
  propTypes: {
    count: React.PropTypes.number.isRequired
  },
  render: function() {
    var itemsLeftText = this.props.count === 1 ? '1 item left' : this.props.count + " items left";
    return (
      <span>{itemsLeftText}</span>
    );
  }
});

module.exports = ItemsLeft;