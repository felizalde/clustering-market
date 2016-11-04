import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class ClustersChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chart">
        <BarChart width={450} height={200} data={this.props.data}
              margin={{top: 25, right: 5, left: 5, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Bar dataKey="Small" stackId="a" fill="#8884d8" />
         <Bar dataKey="Medium" stackId="a" fill="#B99A9A" />
         <Bar dataKey="Large" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  }
}

export default ClustersChart;
