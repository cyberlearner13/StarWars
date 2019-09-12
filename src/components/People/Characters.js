import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Spin, Table, Button, Row, Col } from "antd";
import { fetchPeoples, fetchPeoplesWithURL } from "../../actions/fetchPeople";
import BackButton from '../common/BackButton';

class Characters extends Component {
  state = {
    pagination: {}
  };

  componentDidMount() {
    this.props.fetchPeoples();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.characters.data.length) {
        let { count, next, previous } = nextProps.characters.data[0];
        let nextPageNum, prevPageNum;
        if (next) {
          nextPageNum = next.split("=");
        }
        if (previous) {
          prevPageNum = previous.split("=");
        }

        this.setState({
          pagination: {
            total: count,
            next,
            previous,
            current: next ? nextPageNum[1] - 1 : prevPageNum[1] + 1
          }
        });
      }
    }
  }

  getMoreCharacters = paginationByClick => {
    let { current } = this.state.pagination;
    let {
      current: currentClicked,
      next: nextClicked,
      previous: previousClicked
    } = paginationByClick;

        if (currentClicked < current) {
            if (current - currentClicked > 1) {
              let newUrl = `${previousClicked.split("=")[0]}=${currentClicked}`;
              this.props.fetchPeoplesWithURL(newUrl);
            }
            else {
              this.props.fetchPeoplesWithURL(previousClicked);
            }
            //
        }
        else {
          if(currentClicked - current > 1  ){
            let newUrl = `${nextClicked.split("=")[0]}=${currentClicked}`;
            this.props.fetchPeoplesWithURL(newUrl);
          }
          else{
            this.props.fetchPeoplesWithURL(nextClicked);
          }

        }

  };

  render() {
    const tableData = this.props.characters.data.length
      ? this.props.characters.data[0].results
      : [];
      console.log('table: ',tableData)
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Year of Birth",
        dataIndex: "birth_year",
        key: "birth_year"
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender"
      },
      {
        title: "Height",
        dataIndex: "height",
        key: "height"
      },
      {
        title: "Weight",
        dataIndex: "mass",
        key: "mass"
      },
      {
        title: "Color of Eye",
        dataIndex: "eye_color",
        key: "eye_color"
      },
      {
        title: "Color of Hair",
        dataIndex: "hair_color",
        key: "hair_color"
      },
      {
        title: "Color of Skin",
        dataIndex: "skin_color",
        key: "skin_color"
      },
      {
        title: "Character Details",
        key: "Details",
        render: (text, record) => (
          <Link
            to={{
              pathname: `/people/${record.name.trim()}`,
              state: record
            }}
          >
            <Button type="primary">Details</Button>
          </Link>
        )
      }
    ];

    return (
      <div style={{ marginTop: "3rem" }}>
        {this.props.characters.fetching ? (
          <Spin size="large" style={{ marginTop: "5%" }} />
        ) : (
          <div>
            <Row>
              <Col span={2} />
              <Col span={20}>
                <Table
                  dataSource={tableData}
                  columns={columns}
                  pagination={this.state.pagination}
                  onChange={this.getMoreCharacters}
                />
              </Col>
              <Col span={2} />
            </Row>
            <BackButton />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.people
  };
};
export default connect(mapStateToProps, { fetchPeoples, fetchPeoplesWithURL })(Characters);
