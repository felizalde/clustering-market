import React from 'react';

class Actions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav-group">
          <h5 className="nav-group-title item-border">Actions</h5>
          <label className="nav-group-item" onClick={this.props.onClickNewSale}>
              <span className="icon icon-plus"></span>
              New Sale
          </label>
          <label className="nav-group-item" onClick={this.props.onClickOpenFile}>
              <span className="icon icon-folder"></span>
              Open file
          </label>
          <label className="nav-group-item" onClick={this.props.onClickCalculate}>
            <span className="icon icon-hourglass"></span>
              Calculate
          </label>
      </nav>
    );
  }

}

Actions.propTypes = {
    onClickOpenFile:  React.PropTypes.func.isRequired,
    onClickNewSale:   React.PropTypes.func.isRequired,
    onClickCalculate: React.PropTypes.func.isRequired,
}

export default Actions;
