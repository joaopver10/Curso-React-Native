import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native';

import Entrar from './src/Entrar'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalv: false
    }
    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
  }
  entrar() {
    this.setState({ modalv: true })
  }
  sair(visible) {
    this.setState({ modalv: visible })
  }

  render() {
    return (
      <View style={styles.container}>

        <Button title='entrar' onPress={this.entrar} />

        <Modal animationType='slide' visible={this.state.modalv} >
          <Entrar fechar={() => this.sair(false)} />
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewinp: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    width: 310,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: '#222',
    color: '#fff',
    height: 40,
    padding: 10,
    marginLeft: 3
  },
  nome: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15
  }

});

