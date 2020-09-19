import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class Lista extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data
    };
    this.mostraLikes = this.mostraLikes.bind(this)
    this.like = this.like.bind(this)
    this.carregaIcone= this.carregaIcone.bind(this)
  }
  carregaIcone(likeada){
    return likeada ? require('../img/likeada.png') : require('../img/like.png')
  }

  mostraLikes(likes) {
    let feed = this.state.feed

    if (feed.likers <= 0) {
      return
    }
    return (
      <Text style={styles.likers}> {feed.likers} {feed.likers > 1 ? 'Curtidas' : 'Curtida'} </Text>
    )
  }
  like() {
    let feed = this.state.feed

    if (feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1
        }
      })
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1
        }
      })
    }
  }



  render() {
    return (
      <View style={styles.areaFeed}>

        <View style={styles.areaPerfil}>

          <Image source={{ uri: this.state.feed.imgperfil }} style={styles.fotoPerfil} />

          <Text style={styles.nomeUsuario}> {this.state.feed.nome} </Text>

        </View>

        <Image resizeMode='cover' style={styles.fotoPublica}
          source={{ uri: this.state.feed.imgPublicacao }}
        />

        <View style={styles.btnA}>

          <TouchableOpacity onPress={this.like}>
            <Image source={this.carregaIcone(this.state.feed.likeada)} style={styles.inconelike} />
          </TouchableOpacity>


          <TouchableOpacity style={styles.btnS}>
            <Image source={require('../img/send.png')} style={styles.inconelike} />
          </TouchableOpacity>

        </View>

        {this.mostraLikes(this.state.feed.likers)}

        <View style={styles.areaRoda}>

          <Text style={styles.nomeRoda}>
            {this.state.feed.nome}
          </Text>

          <Text style={styles.descRoda}>
            {this.state.feed.descricao}
          </Text>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaF: {

  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000000',

  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  fotoPublica: {
    flex: 1,
    height: 400,
    alignItems: 'center'
  },

  areaPerfil: {
    flexDirection: "row",
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  btnA: {
    flexDirection: 'row',
    padding: 5
  },
  inconelike: {
    width: 33,
    height: 33
  },
  btnS: {
    paddingLeft: 5
  },
  areaRoda: {
    flexDirection: "row",
    alignItems: 'center'
  },
  descRoda: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000',

  },
  nomeRoda: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#000",
    paddingLeft: 5
  },
  likers: {
    fontWeight: 'bold',
    marginLeft: 5,
  }



})