import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [
        { nome: 'FRANCISCO', idade: 50, email: 'franciscos@gmail.' },
        { nome: 'Roberto', idade: 32, email: 'roberto@gmail.' },
        { nome: 'Luara', idade: 15, email: 'luaras@gmail.' },
        { nome: 'Leopoldo', idade: 20, email: 'leopoldos@gmail.' },

      ]

    }
  }


  render() {
    return (
      <View style={styles.container}>

        <FlatList data={this.state.feed} renderItem={({ item }) => <Pessoa data={item} />} />

      </View>
    );
  }
}



class Pessoa extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.box1}> {this.props.data.nome}  </Text>
        <Text style={styles.box1}>  {this.props.data.idade}  </Text>
        <Text style={styles.box1}> {this.props.data.email}  </Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
  box1: {
    backgroundColor: 'red',
    height: 210,
    width: 210,
    backgroundColor:'gray'

  },


});
