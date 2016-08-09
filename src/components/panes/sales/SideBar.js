import React from 'react';
import {connect} from 'react-redux'

import Actions from './ActionsSB';
import Settings from './SettingsSB';

import { fetchSales } from '../../../actions/sales-actions'

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
      console.log('calculate')
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

function mapStoreToProps(store){
    return {
        salesFetching : store.sales.fetching,
        salesFetched: store.sales.fetched,
        errorFetching: store.sales.error,
    };
}

export default connect(mapStoreToProps)(SideBar);
