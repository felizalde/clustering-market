import React from 'react';
import {connect} from 'react-redux'


class TableSales extends React.Component {
  constructor(props) {
    super(props);
  }

  createItemList(items) {
      return items.map((item) => {
          return (
            <li>{item}</li>
            )
          })
  }

  createTableItems() {
      return this.props.sales.map((sale) =>{
         return (
            <tr key={sale.id}>
                <td>{sale.id}</td>
                <td>{sale.date}</td>
                <td>
                    {this.createItemList(sale.items)}
                </td>
            </tr>
         );
      });
  }

  render() {
    return (
      <div className="pane">
           <table>
            <thead>
              <tr>
                <th>IDSale</th>
                <th>Date Sale</th>
                <th>Items</th>
              </tr>
            </thead>
            <tbody>
                {this.createTableItems()}
            </tbody>
          </table>
      </div>
    );
  }

}

function mapStateToProps(state){
    return {
        sales : state.sales
    };
}

export default connect(mapStateToProps)(TableSales);
