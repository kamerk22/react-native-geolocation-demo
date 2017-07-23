import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
            <Text>Hello Chat APP</Text>
            <Button 
                onPress = { () => navigate('Chat', { user: 'xBroCode' }) }
                title = "Chat with Lucy"/>
        </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
      title: `Chat With ${navigation.state.params.user}`
  });

  render() {
      const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with { params.user }</Text>
      </View>
    );
  }
}

const Places = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});

AppRegistry.registerComponent('Places', () => Places);