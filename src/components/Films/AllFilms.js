import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions/fetchFilms";

//import starwars from '../../apis/starwars';
class AllFilms extends Component {
  getMovie = (e) =>{
    this.props.fetchMovie(1)
  }
  render(){
    return (
      <div style={{"marginTop":"20px"}}>
        <Row gutter={16}>
          <Col span={8}>
            Original Trilogy
            <Row gutter={16} style={{"margin":"15px"}}>
              <Button type="primary" style={{"margin":"5px"}} onClick={e => this.getMovie(e)}>First</Button>
              <Button type="primary" style={{"margin":"5px"}}>Second</Button>
              <Button type="primary" style={{"margin":"5px"}}>Third</Button>
            </Row>
          </Col>
          <Col span={8}>
            Prequel Trilogy
            <Row gutter={16} style={{"margin":"15px"}}>
              <Button type="primary" style={{"margin":"5px"}}>First</Button>
              <Button type="primary" style={{"margin":"5px"}}>Second</Button>
              <Button type="primary" style={{"margin":"5px"}}>Third</Button>
            </Row>
          </Col>
          <Col span={8}>
            Sequel Trilogy
            <Row gutter={16} style={{"margin":"15px"}}>
              <Button type="primary" style={{"margin":"5px"}}>First</Button>
              <Button type="primary" style={{"margin":"5px"}}>Second</Button>
              <Button type="primary" style={{"margin":"5px"}}>Third</Button>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }

};

export default connect(null, { fetchMovie })(AllFilms);
