import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import { logIn } from '../reducers/user'

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: ('white', 0.5)
  },
  buttonContainer: {
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: function (user) {
      dispatch(logIn(user))
    }
  }
}

class SignUpForm extends Component {
  constructor(){
    super()
    this.state = {name: '', email: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  handleSubmit(){
    this.props.logIn(this.state)
  }

  render(){

    return (
      <View style={styles.container}>
      <FormLabel>Name</FormLabel>
      <FormInput
      autoFocus={true}
      value={this.state.name}
      ref={ input => {
        this.inputs['one'] = input;
      }}
      onSubmitEditing={() => {
        this.focusNextField('two');
      }}
      onChangeText={(name) => this.setState({name})} />
      <FormLabel>Email</FormLabel>
      <FormInput
      value={this.state.email}
      ref={ input => {
        this.inputs['two'] = input;
      }}
      onSubmitEditing={() => {
        this.focusNextField('three');
      }}
      onChangeText={(email) => this.setState({email})} />
      <FormLabel>Password</FormLabel>
      <FormInput
      ref={ input => {
        this.inputs['three'] = input;
      }}
      secureTextEntry />
      <TouchableOpacity
      onPress={this.handleSubmit}
      style={styles.buttonContainer}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, mapDispatchToProps)(SignUpForm)

//dfgdfgdfgdfg
