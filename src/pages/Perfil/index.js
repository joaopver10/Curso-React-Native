import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/auth'
import {useNavigation} from '@react-navigation/native'
import { Container, Nome, NewLink, NewText, Logout, LogoutText } from './styles'
import Header from '../../components/Header'

export default function Perfil() {
    const navigation = useNavigation()

    const {user, deslogando} = useContext(AuthContext)
    return (
        <Container>
            <Header/>
            <Nome>{user && user.nome}</Nome>

            <NewLink onPress={ () => navigation.navigate('Registrar')}>
                <NewText>Registrar Gastos</NewText>
            </NewLink>

            <Logout onPress={ () => deslogando() }>
                <LogoutText>Sair</LogoutText>
            </Logout>

        </Container>
    )
}