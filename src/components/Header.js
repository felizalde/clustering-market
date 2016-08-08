import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {selected : 0};
  }

  handleClick(active) {
    this.setState({selected : active});
  }

  isActive(value) {
    return 'btn btn-default ' + ((value === this.state.selected) ? 'active' : '');
  }

  render() {
    return  (
        <header className="toolbar toolbar-header">
          <div className="toolbar-actions">
            <div className="btn-group">
              <Link to="/">
              <button className={this.isActive(0)} onClick={this.handleClick.bind(this, 0)}>
                <span className="icon icon-basket icon-text"></span>
              Sales
              </button>
              </Link>
              <Link to="measures">
              <button className={this.isActive(1)} onClick={this.handleClick.bind(this, 1)}>
                <span className="icon icon-chart-area icon-text"></span>
              Measures
              </button>
              </Link>
              <Link to="about">
              <button className={this.isActive(2)} onClick={this.handleClick.bind(this, 2)}>
                <span className="icon icon-info-circled icon-text"></span>
              About
              </button>
              </Link>
            </div>
          </div>
        </header>
     );
  }
}

export default Header;
