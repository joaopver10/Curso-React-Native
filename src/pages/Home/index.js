import React, {useContext} from 'react'
import { View, Text, Button } from 'react-native'
import {AuthContext} from '../../contexts/auth'

export default function Home(){
    const {user, deslogando} = useContext(AuthContext)
    return(
        <View>
            <Text>Home </Text>
            <Button title='sair da conta' onPress={ () => deslogando()}>Sair da conta</Button>
        </View>
    )
}