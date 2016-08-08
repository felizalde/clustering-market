import React from 'react';
import Header from './Header';

class Layout extends React.Component {
  constructor(props){
    super();
  }

  render() {
    return  (
      <div className="window">
        <Header />
        <div className="window-content">
            {this.props.children}
        </div>
        </div>
    );
  }
}

export default Layout;
