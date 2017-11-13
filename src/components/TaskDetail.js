/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { List, ListItem, Tile, Button, FormLabel, FormInput } from 'react-native-elements'
import { ScrollView, ToastAndroid, TextInput } from 'react-native';
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
    this.inputs = '';
  }

  handleSubmit(){
    const task = this.props.navigation.state.params
    this.props.addCompletedTask(task)
    this.props.increaseScore(task.points)
    task.points + this.props.score.userScore > this.props.score.currentHighScore
    ? ToastAndroid.showWithGravity('New Top Ally!', ToastAndroid.SHORT, ToastAndroid.TOP)
    : ToastAndroid.showWithGravity('Task Submitted!', ToastAndroid.SHORT, ToastAndroid.TOP)
    this.input.clearText();
    this.props.navigation.navigate('Tasks')
  }

  render() {
    const { name, points, description, type } = this.props.navigation.state.params
    return (
      <ScrollView>
      <List>
      <ListItem
        title={name}
        hideChevron
      />
      <Tile
        imageSrc={require('./whiteAllyCookie.jpg')}
        title={description}
      />
      <ListItem
        title="points"
        rightTitle={points.toString() + ' AP'}
        hideChevron
      />
      <ListItem
        title="type"
        rightTitle={type}
        hideChevron
      />
      <FormLabel>Whatever evidence you have for your good deed (links, witnesses, etc.)</FormLabel>
      <FormInput
      multiline={true}
      maxHeight={2}
      ref={input => this.input = input} />
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
