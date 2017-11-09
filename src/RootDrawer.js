import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Settings</Text>
  </View>
);

const SavedTasksScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Saved Tasks</Text>
  </View>
);

const CompletedTasksScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Completed Tasks</Text>
  </View>
);

const AwardsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Awards</Text>
  </View>
);

const LogoutScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Logout</Text>
  </View>
)

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
  SavedTasks: {
    screen: SavedTasksScreen
  },
  CompletedTasks: {
    screen: CompletedTasksScreen
  },
  Awards: {
    screen: AwardsScreen
  },
  Logout: {
    screen: LogoutScreen
  }

});

export default RootDrawer;
