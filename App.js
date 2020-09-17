import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Slider from '@react-native-community/slider'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valor: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Slider minimumValue={0} 
        maximumValue={100} 
        onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
        value={this.state.valor}
        />

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80
  },
  logo: {

  },
  pizzas: {

  }


});
