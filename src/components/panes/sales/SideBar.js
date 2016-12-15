import React from 'react';
import {connect} from 'react-redux'

import Actions from './ActionsSB'
import Settings from './SettingsSB'

import { fetchSales } from '../../../actions/sales-actions'
import { calculateClusters } from '../../../actions/slr-actions'

class SideBar extends React.Component {
  constructor(props) {
    super(props);

  }

  openFile(){
      this.props.dispatch(fetchSales());
  }

  calculate(){
      this.props.dispatch(calculateClusters());
  }

  render() {
    return (
      <div className="pane-md sidebar">
          <Actions
            onClickOpenFile = {this.openFile.bind(this)}
            onClickCalculate = {this.calculate.bind(this)}
            />
          <br />
          <Settings />

        </div>
    );
  }

}

SideBar.contextTypes = {
   router: React.PropTypes.object
 }

export default connect()(SideBar)
