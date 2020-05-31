import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collapse, PageHeader,Button, Modal   } from "antd";
import { fetchMovieWithURL } from '../../actions/fetchFilms';
import { fetchPlanetsWithURL } from '../../actions/fetchPlanets';
import BackButton from '../common/BackButton';
import BackToPrevious from '../common/BackToPrevious';
import ModalFilms from '../common/ModalFilms';

const { Panel } = Collapse;

class Character extends Component {

  state = {
    showMovieModal: false,
    movie: ''
  }

  getFilmNames = film => {
      this.props.fetchMovieWithURL(film)
      this.setState({
        showMovieModal: true,
        movie: film
      })
  }

  getPlanetNames = planet => {
    this.props.fetchPlanetsWithURL(planet)
    this.setState({
      showMovieModal: true,
      movie: planet
    })
  }
  closeMovieModal = () =>{
    this.setState({
      showMovieModal: false,
      movie: ''
    })
  }

  renderFilms = state => {
    if(state.films.length){
      return [state.films.map(film =>
               <Button type="primary" style={{marginLeft:'10px'}} key={film}
                        onClick = {() => this.getFilmNames(film)}>Get Film Details
               </Button>)
             ]

    }
    return <p>No Data</p>
  }

  renderPlanets = state => {
      if(state.planets && state.planets.length){
        return [state.planets.map(planet =>
          <Button type="primary" style={{marginLeft:'10px'}} key={planet}
                   onClick = {() => this.getPlanetNames(planet)}>Get Planet Details
          </Button>)]
      }
      return <p>No Data</p>

  }


  renderSpecies = state => {
    if(state.species.length){
      return state.species.map(fauna =><p key={fauna}>{fauna}</p>)
    }
    return <p>No Data</p>
  }

  renderStarships = state => {
    if(state.starships.length){
      return state.starships.map(starship =><p key={starship}>{starship}</p>)
    }
    return <p>No Data</p>
  }

  renderVehicles = state => {
    if(state.vehicles.length){
      return state.vehicles.map(vehicle =><p key={vehicle}>{vehicle}</p>)
    }
    return <p>No Data</p>
  }

  render(){
    const { name } = this.props.location.state;
    const details  = this.props.film.data ? this.props.film.data : [];
    const { state } =  this.props.location;

    return (
      <div>
        <Row>
          <Col span={3}></Col>
          <Col span={18} style={{textAlign:"left"}}>
              <PageHeader title={name}></PageHeader>
          </Col>
          <Col span={3}></Col>
         </Row>
        <Row>
          <Col span={3}></Col>
          <Col span={18} style={{textAlign:"left"}}>
            <Collapse accordion>
              <Panel header="Films" key="1">
                { this.renderFilms(state)}
              </Panel>
              <Panel header="Planets" key="2">
                  { this.renderPlanets(details)}
              </Panel>
              <Panel header="Species" key="3">
                  {this.renderSpecies(state)}
              </Panel>
              <Panel header="Starships" key="4">
                  {this.renderStarships(state)}
              </Panel>
              <Panel header="Vehicles" key="5">
                  {this.renderVehicles(state)}
              </Panel>
            </Collapse>
          </Col>
          <Col span={3}></Col>
        </Row>

        <Row style={{marginTop:"5%"}}>
          <Col span={4}></Col>
          <Col span={8}><BackButton /></Col>
          <Col span={8}><BackToPrevious prev="/people" /></Col>
          <Col span={4}></Col>
        </Row>

      { this.state.showMovieModal ?

          <ModalFilms visible={this.state.showMovieModal}
               title="The Movie" onOk={this.closeMovieModal}
               onCancel={this.closeMovieModal}
               movieURL = {this.state.movie}>
          </ModalFilms> : ''
      }

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
export default connect(mapStateToProps,{ fetchMovieWithURL, fetchPlanetsWithURL})(Character);
