var Input = React.createClass({
  render: function() {
    var styles = {
      inputStyle: {
        margin: 'auto',
      }
    }

    return (
      <input value={this.props.inputValue}
             onChange={this.props.handleChange}
             type='text'
             style={styles.inputStyle} />
    );
  }
});
