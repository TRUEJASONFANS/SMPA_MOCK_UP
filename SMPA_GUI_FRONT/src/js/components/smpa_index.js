import React from 'react';
import ReactDOM from 'react-dom';
import SMPAHeader from './smpa_header';
import SMPAFooter from './smpa_footer';
import SMPABody from './smpa_body';
export default class SMPAIndex extends React.Component {
    render() {
		return (
		<div>
			<SMPAHeader/>
            <SMPABody/>
            <SMPAFooter/>
		</div>
		) 
	};
}