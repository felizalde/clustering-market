import React from 'react';
import TableSales from './sales/TableSales';
import SideBar from './sales/SideBar';

import openFile from '../../modules/OpenFile';

class Sales extends React.Component{
  constructor(props) {
    super(props);
    this.showOpenFile = this.showOpenFile.bind(this);
  }

  showOpenFile(){
    openFile();
  }

  render() {
    return (
      <div className="pane-group">
        <TableSales />
        <SideBar />
      </div>
    );
  }
}

export default Sales;
