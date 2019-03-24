import React from 'react';
import { createAppContainer, createSwitchNavigator , createStackNavigator} from 'react-navigation';
import Settings from './settings';
import WeatherProject from './weather_project.1';

export default createAppContainer(createStackNavigator({
  Main: { screen : WeatherProject},
  Settings: { screen : Settings},
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  
  initialRouteName: { screen : WeatherProject  },
  
}));

