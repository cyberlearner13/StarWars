import React, { Component } from "react";
import { Card, Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
import { OpeningCrawlFirstRow, OpeningCrawlSecondRow } from "../utils/utils";

export default class CharacterCards extends Component {
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
    console.log(OpeningCrawlFirstRow);
    console.log(OpeningCrawlSecondRow);
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
/*I just learnt the hard way that without credit card you can have no girl friends or great sex
I am so angry that I am not angry
Or I guess I am not ready yet....Damn...I am cursed...but to evoke fantassises and desires from women is an art
I was correct!! I was correct!! Evolutionary feature need to learn need to learn at all costs....but no credit card no secret knowledge*/
/*
Shock her in a good way!!
Something pleasurable
Pull Back
Create a vivid image(you+icr cream #2)
Getting her to meet up(false choice)
*/
