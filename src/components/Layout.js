'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

 export default class Layout extends React.Component {
 	render(){
 		return(
 			<div>
 			<p>Text located in Layout.js</p>
 			<div className="app-content">{this.props.children}</div>
 			</div>
 			)
 	}
 }