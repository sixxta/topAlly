import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { returnScore } from '../reducers/score'

const mapStateToProps = ({ score}) => ({ score })
const mapDispatchToProps = (dispatch) => {
  return {
    getScore: function () {
      dispatch(returnScore())
    }
  }
}

class SettingsScreen extends React.Component {
  componentDidMount(){
    this.props.getScore();
  }

  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Your score so far: {this.props.score}</Text>
        <Text>Profile Screen</Text>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
