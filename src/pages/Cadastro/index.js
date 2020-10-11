import React, { useState, useContext } from 'react'
import { View, Text, Platform, ActivityIndicator } from 'react-native'
import {
    Background, Container, Logo, AreaInput, Input, SubmitButton,
    SubmitText,
} from '../SignIn/styles'

import { AuthContext } from '../../contexts/auth'

export default function Cadastro() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { cadUsuario, loadingAuth } = useContext(AuthContext)

    function cadastrando() {
        cadUsuario(email, senha, nome)
    }

    return (
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <AreaInput>
                    <Input placeholder='nome'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input placeholder='Email'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input placeholder='Senha'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={cadastrando}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                                <SubmitText> Cadastrar </SubmitText>
                            )
                    }

                </SubmitButton>


            </Container>
        </Background>
    )
}