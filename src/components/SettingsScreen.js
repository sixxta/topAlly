import React from 'react';
import { View, Text, ToastAndroid, StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3AC9C'
  },
  checkboxContainer: {
    width: 250
  }
})

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
        <Text>Your score so far: {this.props.score.userScore} AP</Text>
        <Text>Please check your privileges</Text>
        <CheckBox
        left
        title="Are you white"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.checkboxContainer}
        onPress={() => this.changePrivilege('isWhite')}
        checked={this.props.privileges.isWhite} />
        <CheckBox
        left
        title="Are you straight"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.checkboxContainer}
        onPress={() => this.changePrivilege('isStraight')}
        checked={this.props.privileges.isStraight} />
        <CheckBox
        left
        title="Are you male"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.checkboxContainer}
        onPress={() => this.changePrivilege('isMale')}
        checked={this.props.privileges.isMale} />
        <CheckBox
        left
        title="Are you able-bodied"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.checkboxContainer}
        onPress={() => this.changePrivilege('isAbleBodied')}
        checked={this.props.privileges.isAbleBodied} />
        <CheckBox
        left
        title="Are you cis"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.checkboxContainer}
        onPress={() => this.changePrivilege('isCisgender')}
        checked={this.props.privileges.isCisgender} />
        <CheckBox
        left
        title="Are you middle class or rich"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.checkboxContainer}
        onPress={() => this.changePrivilege('isNotPoorOrWorkingClass')}
        checked={this.props.privileges.isNotPoorOrWorkingClass} />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);

//sdfdsfdsfsd
