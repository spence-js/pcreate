import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class CompletedBuilds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      buildObj: {}
    }
  }



  componentDidMount() {
    console.log('id', this.props.id)
    this.setState({
      id: this.props.id
    })
    axios.post('')
  }
  
  render() {
    if(this.props.email) {
      return(
        <div>
          Completed Builds
        </div>
      )
    } else {
      return(
        <div>
          <Link to='/Account'>Click here to Login/Register!</Link>
        </div>
      )
    }
  }
}

const mapStateToProps = (reduxState) => {
  console.log(reduxState.user)
  return {
    id: reduxState.user.id,
    email: reduxState.user.email
  }
}

export default connect(mapStateToProps)(CompletedBuilds);