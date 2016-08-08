import React from 'react';

import Actions from './ActionsSB';
import Settings from './SettingsSB';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="pane-md sidebar">

          <Actions />
          <Settings />

        </div>
    );
  }

}

export default SideBar;
