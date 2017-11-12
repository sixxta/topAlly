import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { logOut } from '../reducers/user'

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: function () {
      dispatch(logOut())
    }
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
  }
})

class LogoutScreen extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    this.props.logOut()
  }

  render() {
    return (
      <TouchableOpacity
      style={styles.buttonContainer}
      onPress={this.handleSubmit}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    )
  }
}

export default connect(null, mapDispatchToProps)(LogoutScreen);
