import React from 'react'
import {connect} from 'react-redux'
import AlgorithmDetails from './measures/AlgorithmDetails'
import FileDetails from './measures/FileDetails'
import Chart from './measures/Chart'
import ListClusters from './measures/ListClusters'


class Measures extends React.Component {
  constructor(props) {
    super(props);
  }

  generateDataChart() {
    return this.props.algorithmData.clustering.map((cluster) => {
      let small = cluster.smallI(this.props.algorithmData.ceiling).size;
      let large = cluster.largeI(this.props.algorithmData.support).size;
      return {
        name   : 'Cluster ' + cluster.id,
        Small  : small,
        Medium : cluster.support.size - small - large,
        Large  : large,
      };
    })
  }

  render() {
    if (!this.props.algorithmData.calculated) {
       return (
         <div className="not-calculate">
           <h2><i>No se ha calculado..</i></h2>
         </div>
       );
    }
    return (
      <div className="data-content">
        <div className="market-details">
          <FileDetails
            filename = {this.props.salesData.name}
            sales = {this.props.salesData.size}
            items = {this.props.salesData.itemsSize}
          />
          <AlgorithmDetails
            clusters = {this.props.algorithmData.clusters}
            ratio = {this.props.algorithmData.threshold}
            ceiling = {this.props.algorithmData.ceiling}
            support = {this.props.algorithmData.support}
          />
          <Chart
            data = {this.generateDataChart()}
          />
          </div>
          <div className="list-clusters">
            <ListClusters
              clusters = {this.props.algorithmData.clustering}
            />
          </div>
        </div>
    )
  }
}

function mapStoreToProps(store) {
  return {
    algorithmData : store.slr,
    salesData: store.sales
  };
}

export default connect(mapStoreToProps)(Measures);
