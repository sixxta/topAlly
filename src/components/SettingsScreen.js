import React from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import { CheckBox } from 'react-native-elements'
import { returnScore } from '../reducers/score'
import { togglePrivilege } from '../reducers/privileges';

const mapStateToProps = ({ score, user, privileges }) => ({ score, user, privileges })
const mapDispatchToProps = (dispatch) => {
  return {
    getScore: function () {
      dispatch(returnScore())
    },
    togglePrivilege: function(attribute){
      dispatch(togglePrivilege(attribute))
    }
  }
}

class SettingsScreen extends React.Component {
  constructor(){
    super()
    this.changePrivilege = this.changePrivilege.bind(this)
  }
  componentDidMount(){
    this.props.getScore();
  }

  changePrivilege(attribute){
    this.props.togglePrivilege(attribute);
    ToastAndroid.showWithGravity('Privileges Checked', ToastAndroid.SHORT, ToastAndroid.TOP);
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome, {this.props.user.name}</Text>
        <Text>Your score so far: {this.props.score.userScore}</Text>
        <Text>Please check your privileges</Text>
        <CheckBox
        center
        title="Are you white"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={() => this.changePrivilege('isWhite')}
        checked={this.props.privileges.isWhite} />
        <CheckBox
        center
        title="Are you straight"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={() => this.changePrivilege('isStraight')}
        checked={this.props.privileges.isStraight} />
        <CheckBox
        center
        title="Are you male"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={() => this.changePrivilege('isMale')}
        checked={this.props.privileges.isMale} />
        <CheckBox
        center
        title="Are you able-bodied"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={() => this.changePrivilege('isAbleBodied')}
        checked={this.props.privileges.isAbleBodied} />
        <CheckBox
        center
        title="Are you cis"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={() => this.changePrivilege('isCisgender')}
        checked={this.props.privileges.isCisgender} />
        <CheckBox
        center
        title="Are you middle class or rich"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={() => this.changePrivilege('isNotPoorOrWorkingClass')}
        checked={this.props.privileges.isNotPoorOrWorkingClass} />
      </View>
    )
  }
}

// const defaultPrivilege = {
//   isWhite: true,
//   isStraight: true,
//   isMale: true,
//   isAbleBodied: true,
//   isCisgender: true,
//   isNotPoorOrWorkingClass: true
// };

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
