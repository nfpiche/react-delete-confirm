var Modal = React.createClass({
  getInitialState: function() {
    return ({ 
      inputValue: '',
      canDelete: false
    });
  },

  handleChange: function(event) {
    this.setState({ inputValue: event.target.value });
  },

  render: function() {
    divStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      marginTop: '-75px',
      marginLeft: '-150px',
      backgroundColor: 'red',
      height: '150px',
      width: '300px',
      zIndex: '9999'
    }

    return (
      <div style={divStyle}>
        <Button handleClick={this.props.handleClick}
                label={"NEVERMIND!"} />
        <Input handleChange={this.handleChange} />
        {this.renderDeleteButton()}
      </div>
    );
  }

  renderDeleteButton: function() {
    return (
      <Button handleClick={this.props.deleteMethod}
              label={"REALLY DELETE IT!"} />
    );
  }
});
