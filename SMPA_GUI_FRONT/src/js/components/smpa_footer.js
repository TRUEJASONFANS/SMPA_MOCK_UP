import React from 'react';
import {Row, Col} from 'antd';
export default class PCFooter extends React.Component {

	render() {
		return (
			<footer>
				<Row>
					<Col span={5}></Col>
					<Col span={14} class="footer">
            &copy;&nbsp;2017 SPMA. All Rights Reserved.
					</Col>
					<Col span={5}></Col>
				</Row>
			</footer>
		);
	};
}
