import React from 'react';
import { Link } from 'react-router-dom';
import { Row,Col,Button } from 'antd';

const BackToPrevious = props => (
  <Row style={{ marginBottom: "20px" }}>
    <Col span={24} style ={props.colStyle ? {"marginTop":"20px"} : {}}>
      <Link to={props.prev}>
        <Button type="primary">Back To The Cruiser</Button>
      </Link>
    </Col>
  </Row>
);

export default BackToPrevious;
