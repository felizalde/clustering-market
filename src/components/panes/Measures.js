import React from 'react'
import {connect} from 'react-redux'
import AlgorithmDetails from './measures/AlgorithmDetails'
import FileDetails from './measures/FileDetails'
import Chart from './measures/Chart'
import ListClusters from './measures/ListClusters'


const data = [
      {name: 'Cluster A', Small: 10, Medium: 13, Large: 40},
      {name: 'Cluster B',  Small: 7, Medium: 3, Large: 16},
      {name: 'Cluster C',  Small: 4, Medium: 6, Large: 13},
      {name: 'Cluster D',  Small: 6, Medium: 4, Large: 22},
      {name: 'Cluster E',  Small: 12, Medium: 11, Large: 32},
      {name: 'Cluster F',  Small: 3, Medium: 16, Large: 36},
      {name: 'Cluster G',  Small: 13, Medium: 13, Large: 27},
];

class Measures extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="data-content">

          <div className="market-details">
            <FileDetails
              filename = "Pepe"
              sales = {160}
              items = {130}
              />
            <AlgorithmDetails
              clusters = {13}
              ratio = {3.5}
              ceiling = {0.3}
              support = {0.7}
              />
            <Chart
              data = {data}
              />
          </div>

          <div className="list-clusters">
            <ListClusters />
          </div>
        </div>

    );
  }
}

function mapStoreToProps(store) {
  return {
    
  };
}

export default connect(mapStoreToProps)(Measures);
