import React from 'react';

class TableSales extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pane">
           <table className="table-striped">
            <thead>
              <tr>
                <th>IDSale</th>
                <th>Date Sale</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
      </div>
    );
  }

}

export default TableSales;
