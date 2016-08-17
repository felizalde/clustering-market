import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

class Measures extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      {name: 'Cluster 1', small: 4000, large: 2400, amt: 2400},
      {name: 'Cluster 2', small: 3000, large: 1398, amt: 2210},
      {name: 'Cluster 3', small: 2000, large: 9800, amt: 2290},
      {name: 'Cluster 4', small: 2780, large: 3908, amt: 2000},
      {name: 'Cluster 5', small: 1890, large: 4800, amt: 2181},
      {name: 'Cluster 6', small: 2390, large: 3800, amt: 2500},
      {name: 'Cluster 7', small: 3490, large: 4300, amt: 2100},
    ];
    return (
      <div>
          <LineChart layout="vertical" width={600} height={300} data={data}
              margin={{top: 20, right: 30, left: 20, bottom: 5}}>
             <XAxis type="number"/>
             <YAxis dataKey="name" type="category"/>
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Line dataKey="small" stroke="#8884d8" />
             <Line dataKey="large" stroke="#82ca9d" />
         </LineChart>
      </div>
    );
  }
}


export default Measures;
