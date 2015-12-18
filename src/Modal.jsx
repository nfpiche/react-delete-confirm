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
              label={"REALLY DELETE IT!"} />
    );
  }, 

  doNameAndInputMatch: function() {
    return this.state.inputValue === this.props.name
  },

  render: function() {
    var styles = {
      modalClass: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'red',
        height: '150px',
        width: '300px',
        zIndex: '9999',
      }
    }

    return (
      <div style={this.props.modalClass ? {} : styles.modalClass} className={this.props.modalClass}>
        <Button handleClick={this.props.handleClick}
                buttonClass={this.props.buttonClass}
                label={"NEVERMIND!"} />
        <span>You'll have to type in the name <em>exactly</em> if you want the delete button to appear!</span>
        <Input handleChange={this.handleChange} />
        {this.state.canDelete ? this.renderDeleteButton() : null}
      </div>
    );
  }
});
