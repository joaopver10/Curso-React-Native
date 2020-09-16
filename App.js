import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

import Pessoas from  './src/Pessoas/Pessoas' 


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

        <FlatList data={this.state.feed} renderItem={({ item }) => <Pessoas data={item} />} />

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  

});
