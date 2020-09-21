import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


class Filmes extends Component {
  render() {
    const {nome, foto} = this.props.data

    return (
      <View>

        <View style={styles.card}>
          <Text style={styles.titulo}> {nome} </Text>
          <Image style={styles.capa} source={{uri: foto}}/>

          <View style={styles.areaB}> 
          
              <TouchableOpacity style={styles.botao} onPress={() => alert(nome)} >
                  <Text style={styles.texto} >Leia mais</Text>
              </TouchableOpacity>
          </View>
        </View>
        
      </View>
    );
  }
}

export default Filmes;

const styles = StyleSheet.create({
  card:{
    shadowColor:'#000',
    backgroundColor:'#FFF',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
  },

  titulo:{
    fontSize:18,
    padding: 15
  },
  capa:{
    height:250,
    zIndex: 2,
  },
  areaB:{
    alignItems: 'flex-end',
    marginTop: -40,
    zIndex: 9
  },
  botao:{
    width: 100,
    backgroundColor:'#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  texto:{
    textAlign: 'center',
    color: '#FFF'
  }
});
