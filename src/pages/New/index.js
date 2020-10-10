import React, { useState, useContext } from 'react';
import { SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { Background, Input, SubmitButton, SubmitText } from './styles'
import {format} from 'date-fns'
import Header from '../../components/Header'
import Picker from '../../components/Picker'
import {useNavigation} from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'
import firebase from '../../services/firebasecConnection'

export default function New() {
    const navigation = useNavigation()
    const [valor, setValor] = useState('')
    const [tipo, setTipo] = useState(null)
    const {user: usa} = useContext(AuthContext)

    function pressiona() {
        Keyboard.dismiss()
        if (isNaN(parseFloat(valor)) || tipo === null) {
            alert('Preencha todos os campos')
            return
        }
        Alert.alert(
            'confirmando dados',
            `Tipo ${tipo} - Valor: ${parseFloat(valor)}`,
            [{
                text: 'Cancelar',
                style: 'cancel'
            }, {
                text: 'Continuar',
                onPress: () => pressionou()
            }
            ]
        )
    }

     async function pressionou() {
        let uid = usa.uid

        let key = await firebase.database().ref('historico').child(uid).push().key

        await firebase.database().ref('historico').child(uid).child(key).set({
            tipo: tipo,
            valor: parseFloat(valor),
            date: format(new Date(), 'dd/MM/yy')
        })

            let user = firebase.database().ref('usuarios').child(uid)
            await user.once('value').then((snapshot) => {
                let saldo = parseFloat(snapshot.val().saldo)

                tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor)

                user.child('saldo').set(saldo)
            }) 
            Keyboard.dismiss()
            setValor('')
            navigation.navigate('Home')
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>

                <SafeAreaView style={{ alignItems: 'center' }}>
                    <Input placeholder="Valor desejado"
                        keyboardType="numeric"
                        returnKeyType="next"
                        onSubmitEditing={() => Keyboard.dismiss()}
                        value={valor}
                        onChangeText={(text) => setValor(text)}
                    />
                    <Picker onChange={setTipo} tipo={tipo} />
                    <SubmitButton onPress={pressiona}>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}