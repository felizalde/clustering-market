import React from 'react'


class FileDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const _file = this.props.filename;
    const _sales = this.props.sales;
    const _items = this.props.items;
    return (
        <div className="data-details">
          <div className="padded-horizontally-more">
            <h4>Dataset details</h4>
            <p><strong>File name:</strong> {_file}</p>
            <p><strong>Number of sales:</strong> {_sales}</p>
            <p><strong>Items:</strong> {_items}</p>
          </div>
        </div>
    );
  }
}



export default FileDetails;
