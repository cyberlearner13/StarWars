import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Collapse, PageHeader   } from "antd";
import { fetchMovieWithURL } from '../../actions/fetchFilms';
import BackButton from '../common/BackButton';
import BackToPrevious from '../common/BackToPrevious';

const { Panel } = Collapse;

class Character extends Component {

  componentDidMount(){
      this.props.fetchMovieWithURL(this.props.location.state.films[0])
  }

  renderFilms = state => {
    if(state.films.length){
      return state.films.map(film =><p>{film}</p>)
    }
    return <p>No Data</p>
  }

  renderSpecies = state => {
    if(state.species.length){
      return state.species.map(film =><p>{film}</p>)
    }
    return <p>No Data</p>
  }

  renderStarships = state => {
    if(state.starships.length){
      return state.starships.map(film =><p>{film}</p>)
    }
    return <p>No Data</p>
  }

  renderVehicles = state => {
    if(state.vehicles.length){
      return state.vehicles.map(film =><p>{film}</p>)
    }
    return <p>No Data</p>
  }

  render(){
    const { name } = this.props.location.state;
    const { state } = this.props.location;

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
              <Panel header="Species" key="2">
                  {this.renderSpecies(state)}
              </Panel>
              <Panel header="Starships" key="3">
                  {this.renderStarships(state)}
              </Panel>
              <Panel header="Vehicles" key="4">
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
