import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Keyboard } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      nome: ''
    }
    this.gravanome = this.gravanome.bind(this)
  }
  // quando é montado na tela

  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value)=> {
      this.setState({nome: value})
    })
  }

  //toda vez que ele é atualizado
  
  async componentDidUpdate(_, prevState){
    const nome = this.state.nome

    if( prevState !== nome){
     await AsyncStorage.setItem('nome', nome)
    }
  }


  gravanome(){
    this.setState({
      nome: this.state.input
    })
    alert('Salvo com sucesso')
    Keyboard.dismiss()
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.viewinp} >

        <TextInput style={styles.input } value={this.state.input} onChangeText={(text)=> this.setState({input: text})} underlineColorAndroid='transparent' />
        
        <TouchableOpacity onPress={this.gravanome}> 
          <Text style={styles.botao} >+</Text> 
        </TouchableOpacity>
        </View>
        
        <Text style={styles.nome}>  {this.state.nome} </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    marginTop: 20,
    alignItems:'center'
  },
  viewinp:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 310,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao:{
    backgroundColor: '#222',
    color: '#fff',
    height:40,
    padding: 10,
    marginLeft: 3
  },
  nome:{
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15
  }

});

