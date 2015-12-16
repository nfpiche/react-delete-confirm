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
              label={"DELETE"} />
    );
  },

  renderConfirmModal: function() {
    return (
      <Modal deleteMethod={this.props.deleteMethod} 
             name={this.props.name}
             handleClick={this.toggleModal} />
    );
  }
});
