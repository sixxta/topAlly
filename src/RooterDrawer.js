import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { Entypo, Feather, FontAwesome,  MaterialCommunityIcons } from 'react-native-vector-icons'; // 4.4.2
import SettingsScreen from './SettingsScreen';
import SavedTasksScreen from './SavedTasks';
import CompletedTasksScreen from './CompletedTasks';
import AwardsScreen from './Awards';
import LogoutScreen from './LogoutScreen'


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

const HomeScreen = () => (
  <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../img/allycookies.jpg')} />
        <Text>Welcome to Top Ally!</Text>
        <Text>Please sign up to start playing.</Text>
  </View>
);

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor}) => (
        <Entypo
          name={'home'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={'settings'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  SavedTasks: {
    screen: SavedTasksScreen,
    navigationOptions: {
      drawerLabel: 'Saved Tasks',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome
          name={'star-o'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  CompletedTasks: {
    screen: CompletedTasksScreen,
    navigationOptions: {
      drawerLabel: 'Completed Tasks',
      drawerIcon: ({tintColor}) => (
        <FontAwesome
          name={'star'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    },
  },
  Awards: {
    screen: AwardsScreen,
    navigationOptions: {
      drawerLabel: 'Awards',
      drawerIcon: ({tintColor}) => (
        <Feather
          name={'award'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    },
  },
  Logout: {
    screen: LogoutScreen,
    navigationOptions: {
      drawerLabel: 'Logout',
      drawerIcon: ({tintColor}) => (
        <MaterialCommunityIcons
          name={'logout'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    },
  },
});

export default RootDrawer;
