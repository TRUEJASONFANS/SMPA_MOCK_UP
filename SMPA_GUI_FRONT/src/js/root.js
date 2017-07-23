import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Redirect, IndexRoute } from 'react-router';
import 'antd/dist/antd.css';
import App from './components/App';
import SMPAIndex from './components/smpa_index';
require('../css/app.css'); 
export default class Root extends React.Component {
	render() {
		return (
			<div>
				<Router history={hashHistory}>
					<Route path="/" component={App} >
						<IndexRoute component={SMPAIndex} />
					</Route>
				</Router>
			</div>
		);
	};
}
ReactDOM.render(
	<Root />, document.getElementById('mainContainer'));
