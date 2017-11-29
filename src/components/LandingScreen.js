import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Text, Image, View } from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../reducers/user'
import SignUpForm from './SignUpForm'
import LogOutBotton from './LogoutScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3AC9C'
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    paddingLeft: 50
  }
});

const mapStateToProps = ({ user }) => ({ user })
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: function () {
      dispatch(getUser())
    }
  }
}

class LandingScreen extends Component {
  componentDidMount(){
    this.props.getUser();
  }

  render(){
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
              resize='contain'
              style={styles.image}
              source={require('../../img/gamelogo.png')} />
            <Text>Welcome to Top Ally!</Text>
            {this.props.user.name
        ? null
        : <Text> Please sign up!</Text>}
        </View>
        <View>
        {this.props.user.name
        ? <LogOutBotton />
        : <SignUpForm />}
        </View>
      </KeyboardAvoidingView>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);

//dsfsefdsfdsfsdfdsfdsf
//fsdfdsfsdf
//sdfsdfsdfsdfsd
//sdfdsfsdfsd
