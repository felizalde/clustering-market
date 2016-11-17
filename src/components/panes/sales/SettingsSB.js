import React from 'react';
import {connect} from 'react-redux'
import * as conf from '../../../actions/slr-actions'

class Settings extends React.Component{
  constructor(props) {
      super(props);
  }

  handleChangeClusters(event){
      this.props.dispatch(conf.updateClusters(parseInt(event.target.value)));
  }
  handleChangeThreshold(event){
      this.props.dispatch(conf.updateThreshold(parseFloat(event.target.value)));
  }
  handleChangeSupport(event){
      this.props.dispatch(conf.updateMaximumSupport(parseFloat(event.target.value)));
  }
  handleChangeCeiling(event){
      this.props.dispatch(conf.updateMinimumCeiling(parseFloat(event.target.value)));
  }

  render() {
    return (
      <nav className="nav-group">
          <h5 className="nav-group-title item-border">
            <span className="icon icon-cog icon-text"> Settings</span>
          </h5>

          <form>
            <div className="checkbox">
              <label className="setting-label">
              <input className="form-control form-control-own"
              type="number" name="clusters" id="clusters"
              min="1" max="50" step="1" value={this.props.clusters}
              onChange = {this.handleChangeClusters.bind(this)}
              />
              Number of clusters
            </label>
            </div>
            <div className="checkbox">
              <label className="setting-label">
            <input className="form-control form-control-own"
            type="number" name="threshold" id="threshold"
            min="0" max="20" step="0.5" value={this.props.threshold}
            onChange =  {this.handleChangeThreshold.bind(this)}
            />
            SLR Threshold
            </label>
            </div>
            <div className="checkbox">
              <label className="setting-label">
            <input className="form-control form-control-own"
            type="number" name="support" id="support"
            min="0" max="1" step="0.1" value={this.props.support}
            onChange = {this.handleChangeSupport.bind(this)}
            />
              Maximum Support
            </label>
            </div>
            <div className="checkbox">
              <label className="setting-label">
            <input className="form-control form-control-own"
            type="number" name="ceiling" id="ceiling"
            min="0" max="1" step="0.1" value={this.props.ceiling}
            onChange = {this.handleChangeCeiling.bind(this)}
            />
              Minimum Ceiling
            </label>
            </div>
          </form>
      </nav>

    );
  }
}

function mapStoreToProps(store){
    return {
        clusters: store.slr.clusters,
        support: store.slr.support,
        threshold: store.slr.threshold,
        ceiling: store.slr.ceiling,
    };
}

export default connect(mapStoreToProps)(Settings);
