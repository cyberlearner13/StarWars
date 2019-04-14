import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row,Col,Card } from 'antd';
import { fetchPeopleFromList } from '../../actions/fetchPeople'

class Film extends Component {

  renderPeople = () => {
    if(Object.keys(this.props.stats).length){
      const { characters } = this.props.stats;
      return characters.map((url,ind) =>{
        return <li key={ind}>{url}</li>
      })
    }
    else{
      return ""
    }
  }
  render(){
    console.log(this.props)
    if(Object.keys(this.props.stats).length){
      const {title,opening_crawl,director,episode_id, release_date} = this.props.stats;
      return (
        <div style={{'marginTop':'2.5%'}}>
          <Row>
             <Col span={24}><strong>{title}</strong></Col>
           </Row>
           <Row>
             <Col span={6}></Col>
             <Col span={12}>{opening_crawl}</Col>
             <Col span={6}></Col>
          </Row>
           <Row gutter={8}>
             <Col span={2}></Col>
             <Col span={4}>
             <Card title="Movie Facts">
               <p>Director: {director}</p>
               <p>Episode: {episode_id}</p>
               <p>Release Date: {release_date}</p>
             </Card>
             </Col>
             <Col span={4}>{this.renderPeople()}</Col>
             <Col span={4}>col-4</Col>
             <Col span={4}>col-4</Col>
             <Col span={4}>col-4</Col>
             <Col span={4}>col-4</Col>
           </Row>
           <Row>
           </Row>
        </div>
      )
    }
    else{
      return <div style={{'marginTop':'2.5%','fontSize':'20px'}}>The Galaxy is far,far away...</div>
    }

  }

}

export default connect(null,{fetchPeopleFromList})(Film);
