import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = ({ tasks }) => ({ tasks})

class SavedTasksScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.props.tasks.allTasks.map(task => <Text key={task.id}>{task.name}: {task.points}</Text>)}
      </View>
    )
  }
}

export default connect(mapStateToProps)(SavedTasksScreen);
