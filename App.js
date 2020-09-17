import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, Picker, TouchableOpacity, Alert } from 'react-native';

import Slider from '@react-native-community/slider';






export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [{ key: 0, sexualidade: 'Masculino' }, { key: 1, sexualidade: 'Feminino' }],
      valor: 250,
      estudante: false,
    }
    this.envia = this.envia.bind(this)
  }


  envia(){
    if(this.state.nome === '' || this.state.idade === ''){
      alert('Preencha todos dados corretamente!')
      return;
    }
    alert(
      'Conta aberta com sucesso!! \n\n' + 
      'Nome: '+this.state.nome + '\n' + 
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: '+ this.state.sexos[this.state.sexo].sexualidade + ' \n' +
      'Limite Conta: ' + this.state.valor.toFixed(2) + '\n' +
      'Conta Estudante: ' + ((this.state.estudante)? 'Ativo' : 'Inativo')
      );
  
  }

  render() {
    let sex = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexualidade} />
    })


    return (
      <View style={styles.container}>

    
          <TextInput style={styles.campoN}
            placeholder="Digite seu nome"
            onChangeText={(nome) => this.setState({ nome: nome })} />

        <TextInput style={styles.campoN}
          keyboardType='numeric'
          placeholder="Digite sua senha"
          onChangeText={(idade) => this.setState({ idade: idade })} />

        <Picker style={styles.campoM} selectedValue={this.state.sexo}
          onValueChange={(itemValue, indexValue) => this.setState({ sexo: itemValue })} >
          {sex}
        </Picker>

          
        <Slider minimumValue={250} maximumValue={5000} value={this.state.valor}
         onValueChange={(valor) => this.setState({ valor: valor })} />
        <Text style={styles.st}> R$ {this.state.valor.toFixed(0)} </Text>

        <View style={{flexDirection:'row'}}>
        <Text style={{fontWeight:"bold"}} >Estudante: </Text>
       <Switch value={this.state.estudante} trackColor="#00c300"  onValueChange={(estu)=> this.setState({estudante: estu})} />
       
       </View>

        <TouchableOpacity style={styles.botao} onPress={this.envia}>
        <View style={styles.btnA}> 
          <Text style={styles.btnT}>Abra sua conta</Text>
        </View>
        </TouchableOpacity>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80
  },
  campoN: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    width: 255,
    margin: 10,
    fontSize: 20,
    padding: 10,
    height: 45,
    fontStyle: 'italic'
  },
  campoM: {
    width: 265,
    alignSelf: 'center',
  },
  st: {
    alignSelf: 'center'
  },
  botao: {
    width: 210,
    height: 50,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: '#191970'

  },
  btnA: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnT: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }


});
