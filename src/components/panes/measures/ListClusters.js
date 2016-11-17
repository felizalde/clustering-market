import React from 'react'
import {connect} from 'react-redux'
import Inspector from 'react-json-inspector'
import InteractiveSelection from './interactive-selection'


function generateFreq(map){
    let freq = [];
    map.forEach(function(value, key){
      freq.push({
        'item': key,
        'freq': value,
      });
    });
    return freq;
  }

class ListClusters extends React.Component {
  constructor(props) {
    super(props);
  }

  dataFormatting(){
    return this.props.clusters.map(function(value){
      return {
        'Cluster id': value.id,
        'Sales': value.transactions,
        'Frequencies': generateFreq(value.support),
      }
    })
  }

  render() {
    const data = this.dataFormatting(this);
    return (
      <div className = "padded-more">
        <Inspector
          data = {data}
          interactiveLabel = {InteractiveSelection}
        />
      </div>

    );
  }
}

export default ListClusters;
