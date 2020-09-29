import React from 'react'
import {Text, StyleSheet, View} from 'react-native'


export default function Listagem({data}){
    return(
        <View style={styles.container}>
            <Text style={styles.Text}>{data.nome}</Text>
            <Text style={styles.Text}>{data.cargo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#121212'
},
Text:{
    color: 'white',
    fontSize: 17
}
})