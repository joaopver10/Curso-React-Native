import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, TextInput, Button, } from 'react-native'
import { useNavigation} from '@react-navigation/native'


import firebase from '../../firebasecConnection'


console.disableYellowBox = true

export default function Acesso() {
  const navigation = useNavigation() 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((value) => {
        alert('Usuario com o email: ' + value.user.email)
        
      })
      .catch(() => {

        alert('Ops deu algo errado com o cadastro')
        return
      })
    setEmail('')
    setPassword('')
  }

  async function logar() {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((value) => {
         navigation.navigate('Home', {user: value.user.email})
      })
      .catch(() => {
        alert('Ops deu algo errado')
        return
      })
    setEmail('')
    setPassword('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Email</Text>
      <TextInput style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />
      <Text style={styles.texto}>Senha</Text>
      <TextInput style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setPassword(texto)}
        value={password}
      />
      <Button title='Acessar' onPress={logar} />

      <Button title='Cadastrar' onPress={cadastrar} />


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center'
  },
  button: {

  },
  texto: {
    fontSize: 20
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    height: 45,
    fontSize: 17
  }


})