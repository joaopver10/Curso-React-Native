import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      larAnima: new Animated.Value(0)
    };

    Animated.timing(
      this.state.larAnima, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false
    }
    ).start()
  }



  render() {
    let porcent = this.state.larAnima.interpolate({
      inputRange:[0, 100],
      outputRange: ['0%', '100%']
    })

    return (
      <View style={styles.container}>

        <Animated.View style={{ backgroundColor: '#4169E1', width: porcent, height: 25 }}>

        </Animated.View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
});
