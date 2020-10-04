import React, {useState}from 'react'
import { View, Text, Platform } from 'react-native'
import {Background, Container, Logo, AreaInput, Input, SubmitButton,
     SubmitText,} from '../SignIn/styles'

     
export default function Cadastro() {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    return (
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
            >
                <AreaInput>
                    <Input placaholder='nome'
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={nome}
                    onChange={ ( text) => setNome(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input placaholder='Email'
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={email}
                    onChange={ ( text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input placaholder='Senha'
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={senha}
                    onChange={ ( text) => setSenha(text)}
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText> Cadastrar </SubmitText>
                </SubmitButton>


            </Container>
        </Background>
    )
}