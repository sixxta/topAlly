import React from 'react';
import { ScrollView, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements'

const mapStateToProps = ({ tasks }) => ({ tasks })

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
    return (
      <ScrollView>
        <List containerStyle={{marginBottom: 20}}>
        {allTasks.map((task, i) => (
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
