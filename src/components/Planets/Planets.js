import React,{ Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Spin, Table, Button, Row, Col } from "antd";
import { fetchPlanets } from '../../actions/fetchPlanets';
import BackButton from '../common/BackButton';

class Planets extends Component{

  componentDidMount(){
      this.props.fetchPlanets();
  }

  render(){
    const planetData = this.props.planets.data.length ? this.props.planets.data[0].results : []

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Climate",
        dataIndex: "climate",
        key: "name"
      },
      {
        title: "Diameter",
        dataIndex: "diameter",
        key: "diameter"
      },
      {
        title: "Gravity",
        dataIndex: "gravity",
        key: "gravity"
      },
      {
        title: "Period of Orbit",
        dataIndex: "orbital_period",
        key: "orbital_period"
      },
      {
        title: "Population",
        dataIndex: "population",
        key: "population"
      },
      {
        title: "Rotation Period",
        dataIndex: "rotation_period",
        key: "rotation_period"
      },
      {
        title: "Surface Water",
        dataIndex: "surface_water",
        key: "surface_water"
      },
      {
        title: "Terrain",
        dataIndex: "terrain",
        key: "terrain"
      },
      {
        title: "Character Details",
        key: "Details",
        render: (text, record) => (
          <Link
            to={{
              pathname: `/planets/${record.name.trim()}`,
              state: record
            }}
          >
            <Button type="primary">Detials</Button>
          </Link>
        )
      }
    ];

    return(
      <div style={{ marginTop: "3rem" }}>
        {this.props.planets.fetching ? (
          <Spin size="large" style={{ marginTop: "5%" }} />
        ) : (
          <div>
            <Row>
              <Col span={24}>
                <Table
                  dataSource={planetData}
                  columns={columns}

                />
              </Col>
            </Row>
            <BackButton />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ planets }) => {
  return { planets }
}
export default connect(mapStateToProps,{ fetchPlanets })(Planets);
