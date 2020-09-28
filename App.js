import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import firebase from './src/firebasecConnection'


console.disableYellowBox = true

export default function App() {
  const [nome, SetNome] = useState('Carregando...')
  const [ idade, setIdade] = useState('')

  useEffect(() => {

    async function dados() {

        await firebase.database().ref('usuarios/1').on("value", (snapshot) =>{
           SetNome(snapshot.val().nome)
           setIdade(snapshot.val().idade)
         }) 
        }
    /* 
      await firebase.database().ref('nome').once("value", (snapshot) => {
        SetNome(snapshot.val())
      })
    }
    */

    dados()

  }, [])

  return (
    <View style={{ marginTop: 55 }}>
      <Text style={{ fontSize: 25 }}> olá {nome} </Text>
      <Text style={{ fontSize: 25 }}> Idade: {idade} </Text>
    </View>
  )
}