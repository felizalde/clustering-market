import React, { Component } from 'react'
import { WeigthCluster } from '../../../modules/ponderar'

class ResultWeighted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weigths : WeigthCluster(props.sales, props.clusters, props.support, props.ceiling)
    }
  }

  render () {
    let rows = [];
    this.state.weigths.forEach((s, index) => {
      let comb = '';
      s.items.forEach((i) => {(comb === '') ? comb += 'C: ' + s.clusterID + ' | ' +  i : comb += ' - ' + i});
      rows.push(<tr key={index}>
                  <td>{comb}</td>
                  <td>{s.value.toFixed(3)}</td>
                </tr>);
    });
    return (
      <div className='result-weighted'>
        <h5><strong>Ponderación de los resultados</strong></h5>
        <table >
          <thead>
            <tr>
              <th>
                Combinación
              </th>
              <th>
                Ponderación
              </th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ResultWeighted;
