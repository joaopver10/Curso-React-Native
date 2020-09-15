import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase:'',
      img: require('./src/biscoito.png'),
    };
    this.quebrabiscoito = this.quebrabiscoito.bind(this);

    this.frases = [
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      'Imagine uma nova história para sua vida e acredite nela.',
      'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.',
      'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
      'Não existe um caminho para a felicidade. A felicidade é o caminho.',
      'Não espere por uma crise para descobrir o que é importante em sua vida.',
      'Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade.',
    ];
  }

  quebrabiscoito() {
    let numero = Math.floor(Math.random() * this.frases.length);
    this.setState({ textoFrase: this.frases[numero], 
    img:  require('./src/biscoitoAberto.png')
    });
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />

        <Text style={styles.textoFrase}> {this.state.textoFrase} </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebrabiscoito}>
          <View style={styles.btnA}>
            <Text style={styles.btnT}> Quebrar biscoito </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnA: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnT: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});