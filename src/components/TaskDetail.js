/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { List, ListItem, Tile, Button } from 'react-native-elements'
import { ScrollView, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { addCompletedTask } from '../reducers/tasks'
import { increaseScore } from '../reducers/score'

const mapStateToProps = ({ score }) => ({ score })
const mapDispatchToProps = (dispatch) => {
  return {
    addCompletedTask: function (task) {
      dispatch(addCompletedTask(task))
    },
    increaseScore: function(score){
      dispatch(increaseScore(score))
    }
  }
}

class TaskDetailScreen extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    const task = this.props.navigation.state.params
    this.props.addCompletedTask(task)
    this.props.increaseScore(task.points)
    task.points + this.props.score.userScore > this.props.score.currentHighScore
    ? ToastAndroid.showWithGravity('New Top Ally!', ToastAndroid.SHORT, ToastAndroid.TOP)
    : ToastAndroid.showWithGravity('Task Submitted!', ToastAndroid.SHORT, ToastAndroid.TOP)
    this.props.navigation.navigate('Tasks')
  }

  render() {
    const { name, points, form, description, type } = this.props.navigation.state.params
    return (
      <ScrollView>
      <List>
      <ListItem
        title="name"
        rightTitle={name}
        hideChevron
      />
      <Tile
        imageSrc={{require: ('./whiteAllyCookie.jpg')}}
        title={description}
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
      <Button
        title="SUBMIT"
        backgroundColor="grey"
        onPress={this.handleSubmit} />
    </List>
    </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailScreen)
