import React from 'react'

class AlgorithmDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const _cluster = this.props.clusters;
    const _ratio = this.props.ratio;
    const _ceiling = this.props.ceiling;
    const _support = this.props.support;

    return (
        <div className="data-details">
          <div className="padded-horizontally-less">
            <h4>Algorithm settings</h4>
            <p><strong>Clusters:</strong> {_cluster}</p>
            <p><strong>SLR Threshold:</strong> {_ratio}</p>
            <p><strong>Minimum Support:</strong> {_support}</p>
            <p><strong>Maximum Ceiling:</strong> {_ceiling}</p>
          </div>
        </div>
    );
  }
}

export default AlgorithmDetails;
