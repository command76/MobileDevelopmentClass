import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';
import createTask from './addTask';
import Main from './main';
import archive from './archive';

export default createAppContainer(createStackNavigator({
  Home: { screen: Main },
  addTask: { screen: createTask},
  archive: {screen: archive},
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  initialRouteName: { screen: Main }
}));