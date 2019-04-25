import React, { Component } from "react";
import { Card, Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import { OpeningCrawlFirstRow, OpeningCrawlSecondRow } from "../utils/utils";

class CharacterCards extends Component {
  renderLink = () => {
    return (
      <div className="App-button">
        <Button type="primary">Let's Go!</Button>
      </div>
    );
  };
  renderFirstRow = () => {
    return OpeningCrawlFirstRow.map(val => {
      return (
        <Col key={val.title} span={8}>
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
  renderSecondRow = () => {
    return OpeningCrawlSecondRow.map(val => {
      return (
        <Col key={val.title} span={8}>
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
      <div>
        <Row gutter={16} className="happy-landing">
          {this.renderFirstRow()}
        </Row>
        <Row gutter={16} className="happy-landing">
          {this.renderSecondRow()}
        </Row>
      </div>
    );
  }
}

export default CharacterCards;
