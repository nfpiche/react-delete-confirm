var React = require('react');

module.exports = React.createClass({
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
      <button onClick={this.toggleModal}>
        DELETE {this.props.name}
      </button>
    );
  },

  renderConfirmModal: function() {
    return (
      <Modal deleteMethod={this.props.deleteMethod} 
             name={this.props.name}
             closeMethod={this.toggleModal} />
    );
  }
});

Modal = React.createClass({
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
        <button onClick={this.props.closeMethod}>
          CLOSE MODAL
        </button>
      </div>
    );
  }
});
