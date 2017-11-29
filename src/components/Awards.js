import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

const mapStateToProps = ({ score }) => ({ score })

class AwardsScreen extends React.Component {
  render() {
    return (
      this.props.score.highScore
      ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{textAlign: 'center'}}>
      Congratulations - you are the top ally! In the real world, there are no prizes for being a decent person - but thanks for playing!</Text>
      </View>
      : <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>No awards yet - keep playing!</Text>
      </View>
    )
  }
}

///dfsdfsdfsdfsdfdsdfsdfsd
//sdfsdfsdfsdfsds
//sdfesfgersghfrghrd
//sdfesefsduihfweishdjb

export default connect(mapStateToProps)(AwardsScreen)
