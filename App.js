import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList'
import EventForm from './EventForm';
import {
  createStackNavigator,
} from 'react-navigation';

const App = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Yours Events'
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add a event'
    }),
  },
});

export default App;