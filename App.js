import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList'
import EventForm from './EventForm';
import {StackNavigatior} from 'react-navigation'

export default StackNavigatior({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Yours Events'
    }),
  },
});