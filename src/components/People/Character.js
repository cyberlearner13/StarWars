import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieWithURL } from '../../actions/fetchFilms';
import BackButton from '../common/BackButton';

class Character extends Component {
  componentDidMount(){
      this.props.fetchMovieWithURL(this.props.location.state.films[0])
  }

  render(){
    const { name } = this.props.location.state;

    return (
      <div>
        <p>{name}</p>
        <BackButton />
      </div>
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
