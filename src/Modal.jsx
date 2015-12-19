var Modal = React.createClass({
  getInitialState: function() {
    return ({ 
      inputValue: '',
      canDelete: false
    });
  },

  handleChange: function(event) {
    this.setState({ inputValue: event.target.value }, function() {
      this.setState({ canDelete: this.doNameAndInputMatch() });
    });
  },

  renderDeleteButton: function() {
    return (
      <Button handleClick={this.props.deleteMethod}
              buttonClass={this.props.buttonClass}
              label={"DELETE"} />
    );
  }, 

  doNameAndInputMatch: function() {
    return this.state.inputValue === this.props.name
  },

  render: function() {
    var styles = {
      modalStyle: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#C4C4C4',
        height: '250px',
        width: '500px',
        zIndex: '9999',
        border: '1px solid transparent',
        borderRadius: '5px',
        color: 'black'
      },
      spanStyle: {
        textAlign: 'center',
        fontSize: '14px',
        color: 'black',
      },
    }

    return (
      <div style={this.props.modalClass ? {} : styles.modalStyle} className={this.props.modalClass}>
        <span>You'll have to type in the name <em>exactly</em> if you want the delete button to appear!</span>
        <div>
          <Input handleChange={this.handleChange} />
        </div>
        <div>
          <Button handleClick={this.props.handleClick}
                  buttonClass={this.props.buttonClass}
                  label={"NEVERMIND!"} />
          {this.state.canDelete ? this.renderDeleteButton() : null}
        </div>
      </div>
    );
  }
});
