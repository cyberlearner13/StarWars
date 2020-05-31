import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row,Col,Card,Spin } from 'antd';
import { fetchPeopleFromList } from '../../actions/fetchPeople';
import './films.css'

class Film extends Component {

  componentDidMount(){
    if(Object.keys(this.props.stats).length){
      const { characters } = this.props.stats;
      characters.forEach( val => {
         this.props.fetchPeopleFromList(val);
      })
    }

  }

  renderColsData = characters => {
    return characters.map((val,ind)=>{
      return  <li key={ind}>{val}</li>
    })
  }
  render(){

    if(Object.keys(this.props.stats).length){

        const {title,opening_crawl,director,episode_id, release_date} = this.props.stats;

        const { data, fetching } = this.props.people;

        const renderCols = {
           renderFirstCol: this.renderColsData(data.slice(0,6)),
           renderSecondCol: this.renderColsData(data.slice(6,12)),
           renderThirdCol: this.renderColsData(data.slice(12,18))
        }

      return (
        <div style={{'marginTop':'2.5%'}}>
          <Row>
             <Col span={24} className="movie-name"><strong>{title}</strong></Col>
           </Row>
           <Row>
             <Col span={6}></Col>
             <Col span={12} style={{"fontSize":"1.5em"}}>{opening_crawl}</Col>
             <Col span={6}></Col>
          </Row>
          <Row>
             <Col span={24} className="movie-details"><strong>Movie Details and Characters</strong></Col>
          </Row>
           <Row gutter={8} style={{"marginTop":"20px"}}>
             <Col span={4}></Col>
             <Col span={4}>
             <Card title="Movie Facts">
               <p>Director: {director}</p>
               <p>Episode: {episode_id}</p>
               <p>Release Date: {release_date}</p>
             </Card>
             </Col>

             {
               Object.keys(renderCols).map((renderCol, index)=>{
                  fetching ? <Col span={3} key={index}><Spin size="large" style={{"margin":"20px"}} /></Col>:
                  <Col span={3} style={{"margin":"20px"}} key={index}><ul>{renderCol}</ul></Col>
               })
             }

           </Row>
           <Row>
           </Row>
        </div>
      )
    }
    else if(this.props.message.length){
      return <div className="movie">{this.props.message}</div>
    }
    else{
      return <div className="movie">The Galaxy is far,far away...</div>
    }

  }

}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps,{fetchPeopleFromList})(Film);
