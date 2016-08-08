import React from 'react';

class Settings extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav-group">
          <h5 className="nav-group-title item-border">
            <span className="icon icon-cog icon-text">Settings</span>            
          </h5>

          <form>
            <div className="checkbox">
              <label>
              <input className="form-control form-control-own"
              type="number" name="clusters" id="clusters"
              min="1" max="10" step="1" value="6" />
              Number of clusters
            </label>
            </div>
            <div className="checkbox">
              <label>
            <input className="form-control form-control-own"
            type="number" nameName="threshold" id="threshold"
            min="0" max="20" step="0.5" value="4.5" />
            SLR Threshold
            </label>
            </div>
            <div className="checkbox">
              <label>
            <input className="form-control form-control-own"
            type="number" name="support" id="support"
            min="0" max="1" step="0.1" value="0.7" />
              Maximum Support
            </label>
            </div>
            <div className="checkbox">
              <label>
            <input className="form-control form-control-own"
            type="number" name="ceiling" id="ceiling"
            min="0" max="1" step="0.1" value="0.3" />
              Minimum Ceiling
            </label>
            </div>
          </form>
      </nav>

    );
  }
}


export default Settings;
