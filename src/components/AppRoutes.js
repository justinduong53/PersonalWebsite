import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Layout from './Layout';
import IndexPage from './IndexPage';
import NotFoundPage from './NotFoundPage';
import routes from '../routes';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router>
      	<div>
	     <Route exact path="/" component={IndexPage}/>
	     <Route path="/error404" component={NotFoundPage}/>
		</div>
      </Router>
    );
  }
}