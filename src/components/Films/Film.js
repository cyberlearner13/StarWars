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

  render(){

      const renderFirst = characters => {
        return characters.map((val,ind)=>{
          return  <li key={ind}>{val}</li>
        })
      }
      const renderSecond = characters => {
        return characters.map((val,ind)=>{
          return <li key={ind}>{val}</li>
        })
      }
      const renderThird = characters => {
        return characters.map((val,ind)=>{
          return <li key={ind}>{val}</li>
        })
      }

    if(Object.keys(this.props.stats).length){

        const {title,opening_crawl,director,episode_id, release_date} = this.props.stats;

        const { data } = this.props.people;

        const firstColumn = data.slice(0,6);
        const secondColumn = data.slice(6,12);
        const thirdColumn = data.slice(12,18);

        const renderFirstCol = renderFirst(firstColumn)
        const renderSecondCol = renderSecond(secondColumn)
        const renderThirdCol = renderThird(thirdColumn)


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

            { this.props.people.fetching ? <Col span={3}><Spin size="large" style={{"margin":"20px"}} /></Col> : <Col span={3} style={{"margin":"20px"}}><ul>{renderFirstCol}</ul></Col> }
            { this.props.people.fetching ? <Col span={3}><Spin size="large" style={{"margin":"20px"}} /></Col> : <Col span={3} style={{"margin":"20px"}}><ul>{renderSecondCol}</ul></Col> }
            { this.props.people.fetching ? <Col span={3}><Spin size="large" style={{"margin":"20px"}} /></Col> : <Col span={3} style={{"margin":"20px"}}><ul>{renderThirdCol}</ul></Col> }


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
