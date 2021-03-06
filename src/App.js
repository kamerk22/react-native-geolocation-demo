import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import PlaceMap from './PlaceMap';

class FavPlacesScreen extends React.Component {    
  render() {
    return <PlaceMap /> 
  }
}

class AddPlacesScreen extends React.Component {
  render() {
    return <Text>Add Places</Text>
  }
}

const Places = TabNavigator({
  Place : { screen: AddPlacesScreen },
  Favorite: { screen: FavPlacesScreen },
});


AppRegistry.registerComponent('Places', () => Places);