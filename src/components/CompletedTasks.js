/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux';

const mapStateToProps = ({ tasks }) => ({ tasks})

class CompletedTasksScreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <List containerStyle={{marginBottom: 20}}>
      {this.props.tasks.completedTasks.map((task) => (
          <ListItem
            key={task.id}
            title={task.name}
            badge={{ value: task.points}}
            hideChevron
          />))}
        </List>
      </ScrollView>
    )
  }
}

///sdfsfdsfdsfsd
//dfsdfsdfdsfsdf

export default connect(mapStateToProps)(CompletedTasksScreen);
