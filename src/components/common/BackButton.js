import React from 'react';
import { Link } from 'react-router-dom';
import { Row,Col,Button } from 'antd';

const BackButton = props => (
  <Row style={{ marginBottom: "20px" }}>
    <Col span={24} style ={props.colStyle ? {"marginTop":"20px"} : {}}>
      <Link to="/">
        <Button type="primary">Back To Coruscant</Button>
      </Link>
    </Col>
  </Row>
);

export default BackButton;
