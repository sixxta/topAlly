import React from 'react';
import { ScrollView, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements'
const _ = require('lodash');


const mapStateToProps = ({ tasks, privileges }) => ({ tasks, privileges })

class SavedTasksScreen extends React.Component {
  constructor(){
    super()
    this.onLearnMore = this.onLearnMore.bind(this);
  }
  onLearnMore (task) {
    this.props.navigation.navigate('Details', {...task});
  }

  render() {
    const { allTasks } = this.props.tasks
    const userPrivileges = _.pickBy(this.props.privilegess, _.isTruthy)
    return (
      <ScrollView>
        <List containerStyle={{marginBottom: 20}}>
        <ListItem
        title={'Tasks for white allies'}
        hideChevron />
        {allTasks.slice(0,6).map((task, i) => (
          <ListItem
            key={i}
            title={task.name}
            badge={{ value: task.points}}
            onPress={() => this.onLearnMore(task)}
          />))}
          <ListItem
          title={'Tasks for male allies'}
          hideChevron />
        {allTasks.slice(6,12).map((task, i) => (
          <ListItem
            key={i}
            title={task.name}
            badge={{ value: task.points}}
            onPress={() => this.onLearnMore(task)}
          />))}
      </List>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps)(SavedTasksScreen);
