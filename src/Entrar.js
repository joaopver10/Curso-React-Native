import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native';



export default class App extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#292929', flex: 1 }} >
                <Text style={{ color: '#FFF', fontSize: 28 }}> Seja bem vindo </Text>
                <Button title='Sair' onPress={this.props.fechar} />
            </View>
        )
    }
}
