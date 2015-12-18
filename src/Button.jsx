var React = require('react');

var Button = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.handleClick} className={this.props.buttonClass}>
        {this.props.label}
      </button>
    );
  }
});
