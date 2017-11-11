import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { Entypo, Feather, FontAwesome,  MaterialCommunityIcons } from 'react-native-vector-icons'; // 4.4.2
import SettingsScreen from './SettingsScreen';
import TasksScreen from './Tasks';
import CompletedTasksScreen from './CompletedTasks';
import AwardsScreen from './Awards';
import LandingScreen from './LandingScreen';

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

const RootDrawer = DrawerNavigator({
  Home: {
    screen: LandingScreen,
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
  Tasks: {
    screen: TasksScreen,
    navigationOptions: {
      drawerLabel: 'Tasks',
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
  }
});

export default RootDrawer;
