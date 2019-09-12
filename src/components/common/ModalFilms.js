import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { fetchMovieWithURL } from '../../actions/fetchFilms';

class ModalFilms extends Component{
  componentDidMount(){
    this.props.fetchMovieWithURL(this.props.movieURL)
  }
  render(){
    return (
      <Modal visible={this.props.visible}
           title={Object.keys(this.props.film.data).length > 0 ? this.props.film.data.title :"The Movie..."}  onOk={this.props.onOk}
           onCancel={this.props.onCancel}>
           <p>Name: {Object.keys(this.props.film.data).length > 0 ? this.props.film.data.title : 'SomeName...'} </p>
           <p>Director: {Object.keys(this.props.film.data).length > 0 ? this.props.film.data.director : 'SomeName...'} </p>
           <p>Episode: {Object.keys(this.props.film.data).length > 0 ? this.props.film.data.episode_id : 'SomeName...'} </p>
           <p>Producer: {Object.keys(this.props.film.data).length > 0 ? this.props.film.data.producer : 'SomeName...'} </p>
      </Modal>
    )
  }
}


const mapStateToProps = state => {
  const { film } = state;
  return {
    film
  };
};

export default connect(mapStateToProps,{ fetchMovieWithURL })(ModalFilms);
