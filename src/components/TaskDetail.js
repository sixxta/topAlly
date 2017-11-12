/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { List, ListItem, Tile } from 'react-native-elements'
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = ({ score }) => ({ score })

class TaskDetailScreen extends React.Component {
  render() {
    const { name, points, form, description, type } = this.props.navigation.state.params
    return (
      <List>
      <ListItem
        title="name"
        rightTitle={name}
        hideChevron
      />
      <Tile
        imageSrc={{require: ('../../img/whiteAllyCookie.jpg')}}
        title={description}
        contentContainerStyle={{height: 70}}
      />
      <ListItem
        title="points"
        rightTitle={points.toString()}
        hideChevron
      />

      <ListItem
        title="type"
        rightTitle={type}
        hideChevron
      />
    </List>
    )
  }
}

export default connect(mapStateToProps)(TaskDetailScreen)
