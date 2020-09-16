import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pizza: 0,
      pizzas: [
        { key: 1, nome: "Arroz", valor: 12.00 },
        { key: 2, nome: "Batata", valor: 32.00 },
        { key: 3, nome: "Frango", valor: 23.00 },
      ]
    }
  }
  render() {
    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })
    return (
      <View style={styles.container}>

        <Text style={styles.logo}>Menu pizzas</Text>

        <Picker selectedValue={this.state.pizza} onValueChange={(itemValue, itemIndex) => this.setState({ pizza: itemValue })}>
          {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}> Você escolheu: {this.state.pizzas[this.state.pizza].nome} </Text>

        <Text style={styles.pizzas}> R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)} </Text>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  },
  logo: {
    textAlign: 'center',
    fontSize: 25,

  },
  pizzas:{
    marginTop:15,
    backgroundColor: '#DDD',
    fontSize: 25,
    textAlign: 'center'
  }


});
