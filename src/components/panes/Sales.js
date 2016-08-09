import React from 'react';
import TableSales from './sales/TableSales';
import SideBar from './sales/SideBar';

class Sales extends React.Component{
  constructor(props) {
    super(props);

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
