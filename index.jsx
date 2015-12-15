var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return { modalOpen: false };
  },

  openModal: function() {
    this.setState({ modalOpen: !this.state.modalOpen });
  },

  closeModal: function() {
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
      <button onClick={this.openModal}>
        DELETE {this.props.name}
      </button>
    );
  },

  renderConfirmModal: function() {
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
        <button onClick={this.closeModal}>
          CLOSE MODAL
        </button>
      </div>
    )
  }
});
