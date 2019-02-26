import React, { Component } from 'react';

import MainNav from '../Nav/MainNav';
import env from '../../../config/env.config.js';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <MainNav />
      </React.Fragment>
    );
  }
}

export default Header;
