import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { set } from 'react-native-reanimated';
import firebase from './src/firebasecConnection'


console.disableYellowBox = true

export default function App() {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')

  useEffect(() => {

    async function dados() {

      //cria um nó
      // await firebase.database().ref('Tipo').set('Cliente')

      //remove (nó)
      //await firebase.database().ref('Tipo').remove()

      /*
      criar um outro child
      await firebase.database().ref('usuarios').child(2).set({
        nome: 'jose',
        cargo: 'Programador'
      })
      */
      //atualizar child
      //await firebase.database().ref('usuarios').child(2).update({
      // nome: 'Alexandre'
      // })





    }


    dados()

  }, [])

  async function cadastrar(){
    if (nome !== '' & cargo !== ''){
      let usuarios = await firebase.database().ref('usuarios')
      let chave = usuarios.push().key

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo
      })
      alert ('cadastrado com sucesso') 
      setCargo('')
      setNome('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setNome(texto)}
        value={nome}
      />
       <Text style={styles.texto}>Cargo</Text>
      <TextInput style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setCargo(texto)}
        value={cargo}
      />
      <Button title='Novo funcionario' onPress={cadastrar}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50
  },
  button:{

  },
  texto:{
    fontSize: 20
  },
  input:{
    marginBottom: 10,
    padding:10,
    borderWidth: 1,
    borderColor: 'black',
    height: 45,
    fontSize: 17
  }


})