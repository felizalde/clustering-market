import React from 'react'
import Header from './Header'
import Loading from './panes/Loading'
import {connect} from 'react-redux'


class Layout extends React.Component {
  constructor(props){
    super();
  }

  renderLoading(){
      if (this.props.calculating){
          return (
              <Loading />
          );
      }
      return (this.props.children);
  }

  render() {
    return  (
      <div className="window">
        <Header />
        <div className="window-content">
            {this.renderLoading()}
        </div>
        </div>
    );
  }
}

function mapStoreToProps(store){
    return {
        calculating: store.slr.calculating,
    };
}

export default connect(mapStoreToProps)(Layout);
