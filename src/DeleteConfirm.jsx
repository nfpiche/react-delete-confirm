var DeleteConfirm = React.createClass({
  getInitialState: function() {
    return { modalOpen: false };
  },

  toggleModal: function() {
    this.setState({ modalOpen: !this.state.modalOpen });
  },

  render: function() {
    return (
      <div>
        {this.renderDeleteButton()}
        {this.state.modalOpen ? this.renderConfirmModal() : null}
      </div>
    );
  },

  renderDeleteButton: function() {
    return (
      <Button handleClick={this.toggleModal}
              buttonClass={this.props.buttonClass}
              label={"DELETE"} />
    );
  },

  renderConfirmModal: function() {
    return (
      <Modal deleteMethod={this.props.deleteMethod}
             modalClass={this.props.modalClass}
             buttonClass={this.props.buttonClass}
             name={this.props.name}
             handleClick={this.toggleModal} />
    );
  }
});
