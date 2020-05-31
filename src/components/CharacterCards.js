import React, { Component } from "react";
import { Card, Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import { OpeningCrawl } from "../utils/utils";

class CharacterCards extends Component {
  renderLink = () => {
    return (
      <div className="App-button">
        <Button type="primary">Let's Go!</Button>
      </div>
    );
  };
  renderRow = () => {
    return OpeningCrawl.map((val, ind) => {
      return (
        <Col key={val.title} span={8} style={{ marginTop: "10px" }}>
          <Card title={val.title}>
            {val.text}
            <Link to={val.path} className="App-button">
              {this.renderLink()}
            </Link>
          </Card>
        </Col>
      );
    });
  };

  render() {
    return (
      <Row gutter={16} className="happy-landing">
        {this.renderRow()}
      </Row>
    );
  }
}

export default CharacterCards;
