import React from 'react';

class Actions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav-group">
          <h5 className="nav-group-title item-border">Actions</h5>
          <label className="nav-group-item">
              <span className="icon icon-plus"></span>
              New Sale
          </label>
          <label className="nav-group-item">
              <span className="icon icon-folder"></span>
              Open file
          </label>
          <label className="nav-group-item">
            <span className="icon icon-hourglass"></span>
              Calculate
          </label>
      </nav>
    );
  }

}


export default Actions;
