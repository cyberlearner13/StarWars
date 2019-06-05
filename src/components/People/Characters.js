import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spin,Table,Button,Row,Col } from 'antd';
import { fetchPeoples} from "../../actions/fetchPeople";

class Characters extends Component{

  componentDidMount(){
    this.props.fetchPeoples();
  }

  render(){
    const tableData = this.props.characters.data.length ? this.props.characters.data[0].results : [];

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.length - b.name.length
        },
        {
          title: 'Year of Birth',
          dataIndex: 'birth_year',
          key: 'birth_year'
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' },{text:'Other', value:'n/a'}],
          onFilter: (value, record) => record.gender.indexOf(value) === 0,
          key: 'gender'
        },
        {
          title: 'Height',
          dataIndex: 'height',
          key: 'height',
          sorter: (a, b) => a.height - b.height
        },
        {
          title: 'Weight',
          dataIndex: 'mass',
          key: 'mass',
          sorter: (a, b) => a.mass - b.mass
        },
        {
          title: 'Color of Eye',
          dataIndex: 'eye_color',
          key: 'eye_color'
        },
        {
          title: 'Color of Hair',
          dataIndex: 'hair_color',
          key: 'hair_color'
        },
        {
          title: 'Color of Skin',
          dataIndex: 'skin_color',
          key: 'skin_color'
        },
        {
          title: 'Character Details',
          key: 'Details',
          render: (text,record) =>
            (<Link to={{
              pathname: `/people/${record.name.trim()}`,
              state: record
            }} >
                <Button type="primary">Detials</Button>
            </Link>)
        }
      ];

    return(
      <div style={{"marginTop":"2.5%"}}>
        {
          this.props.characters.fetching ? <Spin size="large"></Spin> :
          (
            <Row>
              <Col span={2}></Col>
              <Col span={20}><Table dataSource={tableData} columns={columns} /></Col>
              <Col span={2}></Col>
            </Row>
          )
        }
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    characters: state.people
  }
}
export default connect(mapStateToProps,{fetchPeoples})(Characters);
