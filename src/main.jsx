module.exports = React.createClass({
  getInitialState: function() {
    return ({
      customModalClass: '',
      customButtonClass: ''
    });
  },

  componentDidMount: function() {
    if (!this.props.deleteMethod) {
      console.warn("Warning from react-delete-confirm: Woops, looks like you forgot your deletion method.");
    }

    if (!this.props.name) {
      console.warn("Warning from react-delete-confirm: Woops, looks like you forgot to include the name of the object you want to delete.");
    }

    if (this.props.modalClassName) {
      this.setState({ customModalClass: this.props.modalClassName });
    }

    if (this.props.buttonClassName) {
      this.setState({ customButtonClass: this.props.buttonClassName });
    }
  },

  render: function() {
    return (
      <div>
        <DeleteConfirm name={this.props.name}
                       modalClass={this.state.customModalClass}
                       buttonClass={this.state.customButtonClass}
                       deleteMethod={this.props.deleteMethod} />
      </div>
    );
  }
});
