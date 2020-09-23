import React, { useState, useEffect, useMemo, useRef } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'



export default function App() {

  const [nome, setNome] = useState('')
  const [input, setInput] = useState('')
  const nomeRef = useRef(null)

  //ComponentDidMount
  useEffect(() => {

    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes')
      if (nomeStorage !== null) {
        setNome(nomeStorage)
      }
    }

    getStorage()

  }, [])
  // ComponentDidUpdate
  useEffect(() => {

    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome)
    }

    saveStorage()

  }, [nome])

  function alterarnome() {
    setNome(input)
    setInput('')
  }
  function novoNome() {
   nomeRef.current.focus()
  }


  const letrasNome = useMemo(() => {
    return nome.length
  }, [nome])


  return (
    <View style={styles.container}>

      <TextInput placeholder='Escreva seu nome' value={input} onChangeText={(texto) => setInput(texto)}
      ref={nomeRef}
      />

      <TouchableOpacity style={styles.btn} onPress={alterarnome}>
        <Text style={styles.btnText}> Alterar nome</Text>
      </TouchableOpacity>

      <Text style={styles.texto}> {nome} </Text>
      <Text style={styles.texto}> Tem {letrasNome} letras </Text>

      <TouchableOpacity onPress={novoNome}>
        <Text>Novo Nome</Text>
      </TouchableOpacity>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  texto: {
    color: '#000',
    fontSize: 35

  },
  btn: {
    backgroundColor: '#222',
    alignItems: 'center'
  },
  btnText: {
    color: '#FFF'
  }

})