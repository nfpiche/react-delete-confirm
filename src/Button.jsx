var React = require('react');

var Button = React.createClass({
  render: function() {
    var buttonStyle = {
      textAlign: 'center',
      verticalAlign: 'middle',
      cursor: 'pointer',
      border: '1px solid transparent',
      backgroundColor: '#D9534F',
    }

    return (
      <button style={this.props.buttonClass ? {} : buttonStyle}
              onClick={this.props.handleClick} 
              className={this.props.buttonClass}>
        {this.props.label}
      </button>
    );
  }
});
