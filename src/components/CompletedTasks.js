import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = ({ tasks }) => ({ tasks})

class CompletedTasksScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.props.tasks.completedTasks.map(task => <Text>{task.name}</Text>)}</Text>
      </View>
    )
  }
}

export default connect(mapStateToProps)(CompletedTasksScreen);
