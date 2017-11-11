import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Image
          style={styles.image}
          source={require('../../img/allycookies.jpg')} /> */}
        <Text>Hello I am react native I'm friendly and fun I guess.</Text>
        <Text>Welcome to Top Allyyyy!</Text>
        <Text>Please sign up to start playing.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3AC9C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100
  }
});
