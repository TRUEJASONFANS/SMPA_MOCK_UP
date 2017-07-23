import React from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb, Row, Col } from 'antd';

export default class SMPAHeader extends React.Component {
    render() {
        return <div>
            <Row>
                <Col span={5}></Col>
                <Col span={14} class="header" >
                <Breadcrumb>
                    <Breadcrumb.Item>Session Info</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">MASK setup</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Scanner setup</a></Breadcrumb.Item>
                    <Breadcrumb.Item>Process setup</Breadcrumb.Item>
                    <Breadcrumb.Item>Proximity Analysis</Breadcrumb.Item>
                    <Breadcrumb.Item>Result Review</Breadcrumb.Item>
                    <Breadcrumb.Item>Log</Breadcrumb.Item>
                </Breadcrumb>
                </Col>
                <Col span={5} />
            </Row>
        </div>
    }
}