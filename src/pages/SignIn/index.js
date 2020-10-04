import React, {useState}from 'react'
import { View, Text, Platform } from 'react-native'
import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from './styles'
import {useNavigation} from '@react-navigation/native'


export default function SignIn() {

    const navigation = useNavigation()
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')

    return (
        <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
            >
                <Logo source={require('../../assets/Logo.png')}/>
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
                    <SubmitText> Acessar </SubmitText>
                </SubmitButton>

                <Link onPress={ () => navigation.navigate('Cadastro')}>
                <LinkText>Criar uma conta</LinkText>
                </Link>

            </Container>
        </Background>
    )
}