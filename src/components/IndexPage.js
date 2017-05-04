'use strict';

import React from 'react';
import Test from './Test';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
		<h1>Place index page components in here.</h1>
		<Test/>
      </div>
    );
  }
}