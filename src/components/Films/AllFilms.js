import React, { Component } from "react";
import { Row, Col, Button,Spin } from "antd";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions/fetchFilms";
import Film from "./Film";
import './films.css';

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
            <Row gutter={16} className="margin-row">
              <Button type="primary" className="margin-button" onClick={e => this.getMovie(e)}>First</Button>
              <Button type="primary" className="margin-button">Second</Button>
              <Button type="primary" className="margin-button">Third</Button>
            </Row>
          </Col>
          <Col span={8}>
            Prequel Trilogy
            <Row gutter={16} className="margin-row">
              <Button type="primary" className="margin-button">First</Button>
              <Button type="primary" className="margin-button">Second</Button>
              <Button type="primary" className="margin-button">Third</Button>
            </Row>
          </Col>
          <Col span={8}>
            Sequel Trilogy
            <Row gutter={16} className="margin-row">
              <Button type="primary" className="margin-button">First</Button>
              <Button type="primary" className="margin-button">Second</Button>
              <Button type="primary" className="margin-button">Third</Button>
            </Row>
          </Col>
        </Row>
        {this.props.film.fetching ? <Spin size="large" /> : <Film stats = {this.props.film.data} /> }
      </div>
    );
  }

};

const mapStateToProps = state => {
  const { film } = state;
  return {
    film
  }
}
export default connect(mapStateToProps, { fetchMovie })(AllFilms);
