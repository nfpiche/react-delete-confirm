var React = require('react');

var Button = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.handleClick}>
        {this.props.label}
      </button>
    );
  }
});
