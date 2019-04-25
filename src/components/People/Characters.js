import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Spin,Table } from 'antd';
import { fetchPeoples} from "../../actions/fetchPeople";

class Characters extends Component{

  componentDidMount(){
    this.props.fetchPeoples();
  }
  render(){
    const tableData = this.props.characters.data.length ? this.props.characters.data[0].results : [];

    if(tableData.length){
      console.log(tableData)
    }

    return(
      <div style={{"marginTop":"2.5%"}}>
        {
          this.props.characters.fetching ? <Spin size="large"></Spin> : <div>Characters</div>
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
