import React, { Component } from "react";
import { Row, Col, Button, Spin } from "antd";
import { connect } from "react-redux";

import { fetchMovie, resetMovie } from "../../actions/fetchFilms";
import Film from "./Film";
import { movies, ot, pt, st } from "../../utils/utils";
import BackButton from "../common/BackButton";
import "./films.css";

class AllFilms extends Component {
  state = {
    message: ""
  };
  getMovie = e => {
    let movieNum = movies.findIndex(movie => movie === e.target.outerText) + 1;
    if(movieNum < 8){
      this.props.fetchMovie(movieNum)
    }
    else{
      this.props.resetMovie();
      this.setState({
        message:
          "Oops!! A Galaxy still far,far away! Maybe we will reach there someday"
      });
    }
  };

  renderButtonsForTrilogy = movies => {
    return (
      <Row gutter={16} className="margin-row">
        {
          movies.map(movie => (
          <Button
            type="primary"
            className="margin-button"
            onClick={e => this.getMovie(e)}
          >
            {movie}
          </Button>
        ))}
      </Row>
    )
  }
 renderButtonsForMovies = ind => {
   switch (ind) {
     case 1:
       return this.renderButtonsForTrilogy(ot);
     case 2:
       return this.renderButtonsForTrilogy(pt);
     case 3:
       return this.renderButtonsForTrilogy(st);
     default: return <div>Hello There</div>
   }
 }
  render() {

    return (
      <div style={{ marginTop: "20px" }}>
        <Row gutter={16}>
          {
            [1,2,3].map(i => (
              <Col span={8}>
                { i === 1 ? 'Original Trilogy' : i === 2 ? 'Prequel Trilogy' : 'Sequel Trilogy' }
                { this.renderButtonsForMovies(i)}
              </Col>
            ))
          }
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
