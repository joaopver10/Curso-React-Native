import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ paddingTop: 50, paddingLeft: 5 }}>
        <Text> Olá Mundo! </Text>
        <Jobs />
      </View>
    );
  }
}

class Jobs extends Component {
  render() {
    let img = 'https://sujeitoprogramador.com/steve.png';
    return (
      <Image
        source={{ uri: img }}
        style={{ aspectRatio: 1, width: 300, height: 300 }}
      />
    );
  }
}
