module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <DeleteConfirm name={this.props.name}
                       deleteMethod={this.props.deleteMethod} />
      </div>
    );
  }
});
