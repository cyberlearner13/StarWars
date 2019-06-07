import React, { Component } from "react";
import { Row, Col, Button, Spin } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovie, resetMovie } from "../../actions/fetchFilms";
import Film from "./Film";
import { movies } from "../../utils/utils";
import BackButton from "../common/BackButton";
import "./films.css";

class AllFilms extends Component {
  state = {
    message: ""
  };
  getMovie = e => {
    switch (e.target.outerText) {
      case movies[0]:
        this.props.fetchMovie(4);
        break;
      case movies[1]:
        this.props.fetchMovie(5);
        break;
      case movies[2]:
        this.props.fetchMovie(6);
        break;

      case movies[3]:
        this.props.fetchMovie(1);
        break;

      case movies[4]:
        this.props.fetchMovie(2);
        break;

      case movies[5]:
        this.props.fetchMovie(3);
        break;

      case movies[6]:
        this.props.fetchMovie(7);
        break;
      case movies[7]:
        this.props.resetMovie();
        this.setState({
          message:
            "Oops!! A Galaxy still far,far away! Maybe we will reach there someday"
        });
        break;
      case movies[8]:
        this.props.resetMovie();
        this.setState({
          message:
            "Oops!! A Galaxy still far,far away! Maybe we will reach there someday"
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <Row gutter={16}>
          <Col span={8}>
            Original Trilogy
            <Row gutter={16} className="margin-row">
              <Button
                type="primary"
                className="margin-button"
                onClick={e => this.getMovie(e)}
              >
                Episode IV
              </Button>
              <Button
                type="primary"
                className="margin-button"
                onClick={e => this.getMovie(e)}
              >
                Episode V
              </Button>
              <Button
                type="primary"
                className="margin-button"
                onClick={e => this.getMovie(e)}
              >
                Episode VI
              </Button>
            </Row>
          </Col>
          <Col span={8}>
            Prequel Trilogy
            <Row gutter={16} className="margin-row">
              <Button
                type="primary"
                className="margin-button"
                onClick={e => this.getMovie(e)}
              >
                Episode I
              </Button>
              <Button
                type="primary"
                className="margin-button"
                onClick={e => this.getMovie(e)}
              >
                Episode II
              </Button>
              <Button
                type="primary"
                className="margin-button"
                onClick={e => this.getMovie(e)}
              >
                Episode III
              </Button>
            </Row>
          </Col>
          <Col span={8}>
            Sequel Trilogy
            <Row gutter={16} className="margin-row">
              <Button
                type="primary"
                className="margin-button"
                onClick={e => this.getMovie(e)}
              >
                Episode VII
              </Button>
              <Button
                type="primary"
                className="margin-button"
                onClick={e => this.getMovie(e)}
              >
                Episode VIII
              </Button>
              <Button
                type="primary"
                className="margin-button"
                onClick={e => this.getMovie(e)}
              >
                Episode IX
              </Button>
            </Row>
          </Col>
        </Row>
        {this.props.film.fetching ? (
          <Spin size="large" className="movie" />
        ) : (
          <Film stats={this.props.film.data} message={this.state.message} />
        )}
        <BackButton colStyle />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { film } = state;
  return {
    film
  };
};
export default connect(mapStateToProps, { fetchMovie, resetMovie })(AllFilms);
