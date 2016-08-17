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

  newSale(){
      console.log('new-sale')
  }

  calculate(){
      this.props.dispatch(calculateClusters());
      this.context.router.push('/measures');
  }

  render() {
    return (
      <div className="pane-md sidebar">
          <Actions
            onClickOpenFile = {this.openFile.bind(this)}
            onClickNewSale = {this.newSale.bind(this)}
            onClickCalculate = {this.calculate.bind(this)}
            />
          <Settings />

        </div>
    );
  }

}

SideBar.contextTypes = {
   router: React.PropTypes.object
 }

export default connect()(SideBar)
