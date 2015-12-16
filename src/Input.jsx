var Input = React.createClass({
  render: function() {
    return (
      <input value={this.props.inputValue}
             onChange={this.props.handleChange}
             type='text' />
    );
  }
});
