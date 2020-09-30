import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../firebasecConnection';

export default function Home({ route }) {
  const navigation = useNavigation();

  async function logout(){
    await firebase.auth().signOut();

    alert('Deslgoado com sucesso!');
    navigation.navigate('Login');
  }   
  
 return (

   <View style={styles.container}>
       <Text style={styles.title}>Seja bem vindo</Text>

       <Text style={styles.email}>
        {route.params?.user}
        </Text>

        <Button
        title="Deslogar"
        onPress={logout}
        />

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 25, 
  },
  email:{
    marginTop: 20,
    marginBottom: 15,
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})