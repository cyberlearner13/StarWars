import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieWithURL } from '../../actions/fetchFilms';

class Character extends Component {
  componentDidMount(){
      this.props.fetchMovieWithURL(this.props.location.state.films[0])
  }

  render(){
    const { name } = this.props.location.state;
    console.log(this.props.location.state);
    console.log('film: ',this.props.film)
    return (
      <div>{name}</div>
    )
  }
}

const mapStateToProps = state => {
  const { film } = state;
  return {
    film
  };
};
export default connect(mapStateToProps,{ fetchMovieWithURL})(Character);
