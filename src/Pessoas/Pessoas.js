import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'



export default class Pessoas extends Component {
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
    box1: {
        backgroundColor: 'red',
        height: 210,
        width: 210,
        backgroundColor:'gray'
    
      },
      box2: {
        backgroundColor: 'green',
        height: 250,
        backgroundColor:'gray'
      },
      box3: {
        backgroundColor: 'yellow',
        height: 250,
        backgroundColor:'gray'
      },
      box4: {
        backgroundColor: 'gray',
        height: 250,
      }
  })