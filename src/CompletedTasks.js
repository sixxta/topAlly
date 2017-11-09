import React from 'react';
import { View, Text } from 'react-native';

export default class CompletedTasksScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Completed Tasks</Text>
      </View>
    )
  }
}
