import React from "react";
import { Row, Col } from "antd";
import GetData from "../GetData";
const AllFilms = () => {
  return (
    <div>
      <GetData />
      <Row gutter={16}>
        <Col span={6}>Jikan desu, icha ki gch ki mas</Col>
        <Col span={6}>Jikan desu, icha ki gch ki mas</Col>
        <Col span={6}>Jikan desu, icha ki gch ki mas</Col>
        <Col span={6}>Jikan desu, icha ki gch ki mas</Col>
      </Row>
    </div>
  );
};

export default AllFilms;
