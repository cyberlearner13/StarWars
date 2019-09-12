import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieWithURL } from '../../actions/fetchFilms';

class Planet extends Component{
  componentDidMount(){
      this.props.fetchMovieWithURL(this.props.location.state.films[0])
  }

  render(){
    return (
      <div>
        Planet
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { film } = state;
  return {
    film
  };
}

export default connect(mapStateToProps,{ fetchMovieWithURL })(Planet);
